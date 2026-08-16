create schema if not exists private;
revoke all on schema private from public;
grant usage on schema private to authenticated;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null,
  full_name text not null,
  role text not null default 'user' check (role in ('admin','user')),
  active boolean not null default true,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_username_format check (username ~ '^[a-z0-9._-]{3,40}$')
);

create unique index profiles_username_unique_lower on public.profiles (lower(username));
create index profiles_created_by_idx on public.profiles(created_by);

create table public.user_admin_audit (
  id bigint generated always as identity primary key,
  actor_id uuid references auth.users(id) on delete set null,
  target_id uuid references auth.users(id) on delete set null,
  action text not null,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index user_admin_audit_actor_id_idx on public.user_admin_audit(actor_id);
create index user_admin_audit_target_id_idx on public.user_admin_audit(target_id);

alter table public.profiles enable row level security;
alter table public.user_admin_audit enable row level security;

create function private.is_current_user_admin()
returns boolean language sql stable security definer set search_path = ''
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin' and p.active = true
  );
$$;

revoke all on function private.is_current_user_admin() from public;
grant execute on function private.is_current_user_admin() to authenticated;

create policy "authenticated_read_allowed_profiles" on public.profiles
for select to authenticated
using (id = (select auth.uid()) or (select private.is_current_user_admin()));

create policy "admins_read_audit" on public.user_admin_audit
for select to authenticated
using ((select private.is_current_user_admin()));

create function public.set_updated_at()
returns trigger language plpgsql security invoker set search_path = ''
as $$ begin new.updated_at = now(); return new; end; $$;

revoke all on function public.set_updated_at() from public;
create trigger profiles_set_updated_at before update on public.profiles
for each row execute function public.set_updated_at();

revoke all on table public.profiles from anon;
revoke all on table public.user_admin_audit from anon;
revoke insert, update, delete on table public.profiles from authenticated;
revoke insert, update, delete on table public.user_admin_audit from authenticated;
grant select on table public.profiles to authenticated;
grant select on table public.user_admin_audit to authenticated;
