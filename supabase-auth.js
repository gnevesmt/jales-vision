(function(){
  const SUPABASE_URL="https://gnacuondhfktcmfqpzho.supabase.co";
  const SUPABASE_KEY="sb_publishable_dXT5S0lZfqVk5Vfcls26tQ_6EwgkCP_";
  const ADMIN_ALIAS_EMAIL="gilmar.pereira@grupojales.com.br";
  const client=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY,{
    auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}
  });

  let currentProfile=null;
  const byId=id=>document.getElementById(id);
  const normalizeLogin=value=>{
    const login=String(value||"").trim().toLowerCase();
    return login==="gneves"?ADMIN_ALIAS_EMAIL:login;
  };

  async function loadProfile(user){
    const {data,error}=await client.from("profiles").select("id,username,full_name,role,active").eq("id",user.id).single();
    if(error||!data?.active)throw new Error("Usuário sem perfil ativo no portal.");
    currentProfile=data;
    sessionStorage.setItem("gj_v4_auth","true");
    sessionStorage.setItem("gj_v14_user",JSON.stringify({
      username:data.username,name:data.full_name,role:data.role==="admin"?"Administrador do Portal":"Usuário conectado"
    }));
    const adminButton=byId("adminUsersButton");
    if(adminButton)adminButton.classList.toggle("hidden",data.role!=="admin");
    return data;
  }

  async function enterWithSession(session){
    if(!session?.user)return false;
    try{
      await loadProfile(session.user);
      if(typeof applyLoggedUser==="function")applyLoggedUser();
      if(typeof updateDynamicWelcome==="function")updateDynamicWelcome();
      if(typeof showDash==="function")await showDash();
      return true;
    }catch(error){
      await client.auth.signOut();
      const errorBox=byId("loginError");
      if(errorBox)errorBox.textContent=error.message;
      return false;
    }
  }

  async function signIn(login,password){
    const errorBox=byId("loginError");
    if(errorBox)errorBox.textContent="Validando acesso...";
    const {data,error}=await client.auth.signInWithPassword({email:normalizeLogin(login),password});
    if(error){
      if(errorBox)errorBox.textContent="Usuário/e-mail ou senha incorretos.";
      return false;
    }
    if(errorBox)errorBox.textContent="";
    return enterWithSession(data.session);
  }

  async function signOut(){
    await client.auth.signOut();
    currentProfile=null;
    byId("adminUsersButton")?.classList.add("hidden");
  }

  async function loadUsers(){
    const tbody=byId("adminUsersList");
    if(!tbody||currentProfile?.role!=="admin")return;
    tbody.innerHTML='<tr><td colspan="4">Carregando...</td></tr>';
    const {data,error}=await client.from("profiles").select("username,full_name,role,active").order("full_name");
    if(error){tbody.innerHTML='<tr><td colspan="4">Não foi possível carregar os usuários.</td></tr>';return}
    tbody.innerHTML=data.map(user=>`<tr><td>${escapeHtml(user.username)}</td><td>${escapeHtml(user.full_name)}</td><td>${user.role==="admin"?"Administrador":"Usuário"}</td><td>${user.active?"Ativo":"Bloqueado"}</td></tr>`).join("");
  }

  function escapeHtml(value){
    const div=document.createElement("div");div.textContent=String(value??"");return div.innerHTML;
  }

  async function createUser(event){
    event.preventDefault();
    const message=byId("createUserMessage");
    message.classList.remove("error");message.textContent="Enviando convite...";
    const {data,error}=await client.functions.invoke("admin-create-user",{body:{
      full_name:byId("newUserFullName").value.trim(),
      username:byId("newUsername").value.trim().toLowerCase(),
      email:byId("newUserEmail").value.trim().toLowerCase(),
      role:byId("newUserRole").value
    }});
    if(error||data?.error){message.classList.add("error");message.textContent=data?.error||error.message;return}
    message.textContent="Convite enviado com sucesso.";
    event.currentTarget.reset();
    await loadUsers();
  }

  function openAdmin(){
    if(currentProfile?.role!=="admin")return;
    byId("userAdminModal").classList.remove("hidden");
    loadUsers();
  }

  function showPasswordSetup(){
    byId("setPasswordModal")?.classList.remove("hidden");
  }

  async function saveFirstPassword(event){
    event.preventDefault();
    const password=byId("newAccountPassword").value;
    const confirmation=byId("confirmAccountPassword").value;
    const message=byId("setPasswordMessage");
    message.classList.remove("error");
    if(password.length<8||password!==confirmation){message.classList.add("error");message.textContent="As senhas devem ser iguais e possuir ao menos 8 caracteres.";return}
    const {error}=await client.auth.updateUser({password});
    if(error){message.classList.add("error");message.textContent=error.message;return}
    message.textContent="Senha definida com sucesso.";
    byId("setPasswordModal").classList.add("hidden");
    const {data}=await client.auth.getSession();
    await enterWithSession(data.session);
  }

  window.JalesAuth={client,signIn,signOut};

  document.addEventListener("DOMContentLoaded",async()=>{
    byId("adminUsersButton")?.addEventListener("click",openAdmin);
    byId("closeUserAdmin")?.addEventListener("click",()=>byId("userAdminModal").classList.add("hidden"));
    byId("createUserForm")?.addEventListener("submit",createUser);
    byId("setPasswordForm")?.addEventListener("submit",saveFirstPassword);

    const invitation=/type=invite|type=recovery/.test(location.hash+location.search);
    const {data}=await client.auth.getSession();
    if(invitation&&data.session){showPasswordSetup();return}
    if(data.session)await enterWithSession(data.session);
    else if(typeof showLogin==="function")showLogin();
  });
})();
