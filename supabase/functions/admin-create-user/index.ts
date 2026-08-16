import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const allowedOrigin = "https://gnevesmt.github.io";
const cors = (origin: string | null) => ({
  "Access-Control-Allow-Origin": origin === allowedOrigin ? origin : allowedOrigin,
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
});

Deno.serve(async (req: Request) => {
  const headers = cors(req.headers.get("origin"));
  if (req.method === "OPTIONS") return new Response("ok", { headers });
  if (req.method !== "POST") return new Response(JSON.stringify({ error: "Método não permitido." }), { status: 405, headers });

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return new Response(JSON.stringify({ error: "Sessão obrigatória." }), { status: 401, headers });

    const url = Deno.env.get("SUPABASE_URL")!;
    const callerClient = createClient(url, Deno.env.get("SUPABASE_ANON_KEY")!, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false }
    });
    const adminClient = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });

    const token = authHeader.replace(/^Bearer\s+/i, "");
    const { data: userData, error: userError } = await callerClient.auth.getUser(token);
    if (userError || !userData.user) return new Response(JSON.stringify({ error: "Sessão inválida." }), { status: 401, headers });

    const { data: actor } = await adminClient.from("profiles").select("id, role, active").eq("id", userData.user.id).maybeSingle();
    if (!actor?.active || actor.role !== "admin") {
      return new Response(JSON.stringify({ error: "Acesso permitido somente ao administrador." }), { status: 403, headers });
    }

    const body = await req.json();
    const username = String(body.username ?? "").trim().toLowerCase();
    const fullName = String(body.full_name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const role = body.role === "admin" ? "admin" : "user";
    if (!/^[a-z0-9._-]{3,40}$/.test(username) || fullName.length < 3 || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Informe usuário, nome e e-mail válidos." }), { status: 400, headers });
    }

    const { data: invite, error: inviteError } = await adminClient.auth.admin.inviteUserByEmail(email, {
      data: { username, full_name: fullName }
    });
    if (inviteError || !invite.user) {
      return new Response(JSON.stringify({ error: inviteError?.message ?? "Não foi possível convidar o usuário." }), { status: 400, headers });
    }

    const { error: profileError } = await adminClient.from("profiles").insert({
      id: invite.user.id, username, full_name: fullName, role, active: true, created_by: actor.id
    });
    if (profileError) {
      await adminClient.auth.admin.deleteUser(invite.user.id);
      return new Response(JSON.stringify({ error: profileError.message }), { status: 400, headers });
    }

    await adminClient.from("user_admin_audit").insert({
      actor_id: actor.id, target_id: invite.user.id, action: "user_invited", details: { username, email, role }
    });
    return new Response(JSON.stringify({ success: true }), { status: 201, headers });
  } catch {
    return new Response(JSON.stringify({ error: "Erro interno ao cadastrar usuário." }), { status: 500, headers });
  }
});
