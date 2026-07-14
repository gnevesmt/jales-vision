const AUTH_KEY="gj_v4_auth",SIDE_KEY="gj_v4_side",ACTIVE_KEY="gj_v4_page",USER_KEY="gj_v14_user";
const USERS=[
  {
    username:"gneves",
    password:"181969",
    name:"Gilmar Pereira Neves",
    role:"Administrador do Portal"
  }
];
const PBI={base:"https://app.powerbi.com/reportEmbed",reportId:"1e928c52-0b4c-4e12-8be0-f3bebbb4dc9a",tenantId:"335baa78-4e80-4d9d-9812-7b1addf57580"};

const ICONS={
"user":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
"lock":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
"eye":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
"arrow-right":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
"menu":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
"home":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
"logout":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 17l5-5-5-5M15 12H3"/><path d="M14 3h7v18h-7"/></svg>',
"maximize":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg>',
"chevron":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m9 18 6-6-6-6"/></svg>',
"ruler":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m4 15 11-11 5 5-11 11H4v-5Z"/><path d="m14 6 4 4M11 9l2 2M8 12l2 2"/></svg>',
"wallet":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h14a2 2 0 0 1 2 2v10H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12"/><path d="M16 10h6v4h-6a2 2 0 0 1 0-4Z"/></svg>',
"search-check":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10" cy="10" r="6"/><path d="m14.5 14.5 5 5M7.5 10l1.7 1.7L12.5 8.5"/></svg>',
"chart":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
"shield":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 5 6v5c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
"folder":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h7l2 2h9v11H3V6Z"/></svg>',
"overview":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
"building":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 21V5h10v16M14 9h6v12M7 8h2M7 12h2M7 16h2M17 12h1M17 16h1"/></svg>',
"line-chart":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 20h18M4 17l5-5 4 3 7-9"/></svg>',
"calendar":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></svg>',
"compare":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 4v16M17 4v16M3 8h8M13 16h8"/><path d="m8 5 3 3-3 3M16 13l-3 3 3 3"/></svg>',
"trend":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/></svg>',
"forecast":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/><path d="m4 9 6-4 6 7 5-5"/></svg>',
"invoice":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
"money":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M7 9H5M19 15h-2"/></svg>',
"clipboard":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8 9h8M8 13h8M8 17h5"/></svg>',
"timeline":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3v18"/><circle cx="6" cy="7" r="2"/><circle cx="6" cy="17" r="2"/><path d="M8 7h10M8 17h7"/></svg>',
"users":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20a6 6 0 0 1 12 0M14 20a5 5 0 0 1 7 0"/></svg>',
"trophy":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"/><path d="M8 6H4v2a4 4 0 0 0 4 4M16 6h4v2a4 4 0 0 1-4 4M12 12v5M8 21h8M10 17h4"/></svg>',
"hardhat":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 16a8 8 0 0 1 16 0"/><path d="M2 16h20v3H2zM9 16V7M15 16V7"/></svg>',
"bar-chart":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10h4v10M10 20V4h4v16M16 20v-7h4v7"/></svg>',
"monitor":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
"coin":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5c-.8-.8-1.9-1.2-3.2-1.2-1.8 0-3.3.8-3.3 2.2 0 3.4 6.5 1.3 6.5 4.8 0 1.5-1.5 2.5-3.5 2.5-1.5 0-2.8-.5-3.7-1.4M12 5v14"/></svg>',
"calculator":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><rect x="8" y="5" width="8" height="4" rx="1"/><path d="M8 13h1M12 13h1M16 13h1M8 17h1M12 17h1M16 17h1"/></svg>',
"clipboard-check":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8 12l2.5 2.5L16 9"/></svg>',
"productivity":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V11h4v9M10 20V7h4v13M16 20V4h4v16"/><path d="m3 8 5-4 4 3 7-5"/></svg>',
"safety":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 16a8 8 0 0 1 16 0"/><path d="M2 16h20v3H2zM9 16V7M15 16V7"/><path d="M12 3 5 6v3"/></svg>',
"future":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M22 12h-3M12 22v-3M2 12h3"/></svg>'
};

const MENU=[
 {title:"Medições",icon:"calculator",items:[
  ["Visão Geral","27734aa94bb48d9e09bf","overview"],
  ["Obras Medidas","48f2942284d243c5f15f","building"],
  ["Estatísticas de Medições","75847bd59a3539c384e4","bar-chart"],
  ["Medições Periódicas","845738860916c02011a3","calendar"],
  ["MDO Medido vs Fiscal","79253e55239ad803260e","compare"],
  ["Evolução das Medições","9181cc4749da69c9574f","trend"],
  ["Previsões Futuras","484e446b02a3d497c32c","forecast"]]},
 {title:"Financeiro",icon:"coin",items:[
  ["Visão Geral NF","80a651f356a2495d9401","overview"],
  ["Notas Fiscais Emitidas","7047cebd55d772f0fe58","invoice"],
  ["Notas Fiscais Periódicas","4ad13325039261cf24be","calendar"],
  ["Previsões de Faturamento","8d34a520f79f3e5a22bc","money"]]},
 {title:"Fiscalizações",icon:"clipboard-check",items:[
  ["Visão Geral","f18b8dbdc31f9fc52135","overview"],
  ["Obras Fiscalizadas","ff94a47c4aaedaa6ca04","building"],
  ["Estatísticas de Fiscalizações","2a649266dd4f7cc8e6b3","bar-chart"],
  ["Fiscalizações Periódicas","d2a09e3516ba67413e5b","calendar"],
  ["Linha do Tempo Fiscal","571abdca452344c5a3cb","timeline"],
  ["Análise dos Fiscais","ae5e81022b1f9d349789","users"]]},
 {title:"Gestão de Produções",icon:"productivity",items:[
  ["Visão Geral","a8c05da34da89f37f02a","overview"],
  ["Avaliação das Equipes","0394f1623728572ae661","users"],
  ["Estatísticas de Produções","816f3d801679ccb0a3da","bar-chart"],
  ["Produções Periódicas","3feaea1890969b094e02","calendar"],
  ["Desempenho de Equipes (Ranking Top)","c6f0088f39c4f77fc917","trophy"]]},
 {title:"SESMT",icon:"safety",items:[
  ["Página 1 SESMT","312650124d4397bb8eca","shield"],
  ["Página 2 SESMT","601e20a908881426dc69","clipboard"],
  ["Página 3 SESMT","e9155b6aa296845a3ab1","bar-chart"],
  ["Página 4 SESMT","078cb7d93918176240fb","users"],
  ["Página 5 SESMT","039ce25a70101ed77817","hardhat"]]}
,
 {title:"Projeto Futuro",icon:"future",items:[
  ["Página 1","2e68f97ecbc1d738cbf1","overview"],
  ["Página 2","1a4679d1872c43cb3cf0","clipboard"],
  ["Página 3","ebe8a76ec4fbd1168cd7","bar-chart"],
  ["Página 4","6674159973c3b4aa63b1","timeline"],
  ["Página 5","ec02ebbb70ed98481fa7","forecast"]]}];

const $=id=>document.getElementById(id);
const els={login:$("loginScreen"),dash:$("dashboardScreen"),form:$("loginForm"),user:$("username"),pass:$("password"),err:$("loginError"),side:$("sidebar"),menu:$("menuContainer"),home:$("homeButton"),welcome:$("welcomePage"),report:$("reportPage"),frame:$("reportFrame"),loading:$("loadingLayer"),title:$("pageTitle"),overlay:$("mobileOverlay"),profileName:$("profileName"),profileRole:$("profileRole"),profileInitials:$("profileInitials")};

function hydrateIcons(root=document){root.querySelectorAll("[data-icon]").forEach(el=>{const name=el.dataset.icon;if(ICONS[name])el.innerHTML=ICONS[name]})}

function getLoggedUser(){
  try{
    return JSON.parse(sessionStorage.getItem(USER_KEY) || "null");
  }catch{
    return null;
  }
}

function getFirstName(fullName){
  return String(fullName || "Usuário").trim().split(/\s+/)[0] || "Usuário";
}

function getInitials(fullName){
  const parts=String(fullName || "Usuário").trim().split(/\s+/).filter(Boolean);
  if(!parts.length)return "US";
  if(parts.length===1)return parts[0].slice(0,2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length-1][0]}`.toUpperCase();
}

function applyLoggedUser(){
  const user=getLoggedUser();
  if(!user)return;

  if(els.profileName)els.profileName.textContent=user.name;
  if(els.profileRole)els.profileRole.textContent=user.role || "Usuário conectado";
  if(els.profileInitials)els.profileInitials.textContent=getInitials(user.name);
}

function reportUrl(page){const p=new URLSearchParams({reportId:PBI.reportId,autoAuth:"true",ctid:PBI.tenantId,pageName:page,pageView:"fitToWidth",filterPaneEnabled:"false",navContentPaneEnabled:"false"});return `${PBI.base}?${p}`}
function expandSidebar(){if(innerWidth>820&&els.side.classList.contains("collapsed")){els.side.classList.remove("collapsed");localStorage.setItem(SIDE_KEY,"false")}}
function closeGroups(){document.querySelectorAll(".menu-group").forEach(g=>{g.classList.remove("open");g.querySelector(".menu-main")?.setAttribute("aria-expanded","false")})}
function clearActive(){document.querySelectorAll(".active,.active-parent").forEach(x=>x.classList.remove("active","active-parent"))}
function toggleGroup(group){expandSidebar();const open=group.classList.contains("open");closeGroups();if(!open){group.classList.add("open");group.querySelector(".menu-main").setAttribute("aria-expanded","true")}}
function showHome(){expandSidebar();clearActive();closeGroups();els.home.classList.add("active");els.title.textContent="Jales Vision";els.report.classList.add("hidden");els.welcome.classList.remove("hidden");localStorage.removeItem(ACTIVE_KEY);if(innerWidth<=820)closeMobile()}
function openPage(title,page,button,gi,ii,save=true){expandSidebar();clearActive();els.home.classList.remove("active");button.classList.add("active");const group=button.closest(".menu-group");group.classList.add("open");group.querySelector(".menu-main").classList.add("active-parent");els.title.textContent=title;els.welcome.classList.add("hidden");els.report.classList.remove("hidden");els.loading.classList.remove("hidden");const url=reportUrl(page);if(els.frame.src!==url)els.frame.src=url;if(save)localStorage.setItem(ACTIVE_KEY,JSON.stringify({gi,ii}));if(innerWidth<=820)closeMobile()}
function buildMenu(){MENU.forEach((g,gi)=>{const box=document.createElement("div");box.className="menu-group";const main=document.createElement("button");main.className="menu-main";main.dataset.tooltip=g.title;main.title=g.title;main.innerHTML=`<span class="menu-icon">${ICONS[g.icon]}</span><span class="menu-label">${g.title}</span><span class="menu-arrow">${ICONS.chevron}</span>`;const sub=document.createElement("div");sub.className="submenu";const inner=document.createElement("div");inner.className="submenu-inner";g.items.forEach(([title,page,icon],ii)=>{const b=document.createElement("button");b.className="menu-item";b.dataset.tooltip=title;b.title=title;b.innerHTML=`<span class="submenu-icon">${ICONS[icon]}</span><span class="menu-label">${title}</span>`;b.addEventListener("click",()=>openPage(title,page,b,gi,ii));inner.appendChild(b)});sub.appendChild(inner);main.addEventListener("click",()=>toggleGroup(box));box.append(main,sub);els.menu.appendChild(box)})}
function restore(){const raw=localStorage.getItem(ACTIVE_KEY);if(!raw){showHome();return}try{const s=JSON.parse(raw),item=MENU[s.gi]?.items[s.ii],b=document.querySelectorAll(".menu-group")[s.gi]?.querySelectorAll(".menu-item")[s.ii];if(item&&b)openPage(item[0],item[1],b,s.gi,s.ii,false);else showHome()}catch{showHome()}}
function showLogin(){els.dash.classList.add("hidden");els.login.classList.remove("hidden");els.frame.src="about:blank";els.form.reset()}
async function enterFullscreen(){try{if(!document.fullscreenElement)await document.documentElement.requestFullscreen()}catch{}}
async function showDash(){applyLoggedUser();updateDynamicWelcome();els.login.classList.add("hidden");els.dash.classList.remove("hidden");els.side.classList.toggle("collapsed",localStorage.getItem(SIDE_KEY)==="true"&&innerWidth>820);restore();await enterFullscreen()}
function logout(){sessionStorage.removeItem(AUTH_KEY);sessionStorage.removeItem(USER_KEY);localStorage.removeItem(ACTIVE_KEY);if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});showLogin()}
function openMobile(){els.side.classList.add("mobile-open");els.overlay.classList.add("show")}
function closeMobile(){els.side.classList.remove("mobile-open");els.overlay.classList.remove("show")}
function clock(){const n=new Date();$("clock").innerHTML=`<strong>${n.toLocaleTimeString("pt-BR")}</strong><br>${n.toLocaleDateString("pt-BR",{weekday:"short",day:"2-digit",month:"2-digit",year:"numeric"})}`}

buildMenu();els.home.dataset.tooltip="Página inicial";els.home.title="Página inicial";$("sidebarLogout").dataset.tooltip="Sair";$("sidebarLogout").title="Sair";hydrateIcons();clock();setInterval(clock,1000);

els.form.addEventListener("submit",async e=>{
  e.preventDefault();

  const username=els.user.value.trim();
  const password=els.pass.value;
  const authenticatedUser=USERS.find(user =>
    user.username===username && user.password===password
  );

  if(authenticatedUser){
    sessionStorage.setItem(AUTH_KEY,"true");
    sessionStorage.setItem(USER_KEY,JSON.stringify({
      username:authenticatedUser.username,
      name:authenticatedUser.name,
      role:authenticatedUser.role
    }));
    els.err.textContent="";
    applyLoggedUser();
    updateDynamicWelcome();
    await showDash();
  }else{
    els.err.textContent="Usuário ou senha incorretos.";
    els.pass.value="";
    els.pass.focus();
  }
});

$("togglePassword").onclick=()=>{
  els.pass.type=els.pass.type==="password"?"text":"password";
};

$("sidebarToggle").onclick=()=>{
  els.side.classList.toggle("collapsed");
  localStorage.setItem(SIDE_KEY,String(els.side.classList.contains("collapsed")));
};

els.home.onclick=showHome;
$("sidebarLogout").onclick=logout;
$("headerLogout").onclick=logout;
$("mobileMenuButton").onclick=openMobile;
els.overlay.onclick=closeMobile;
$("fullscreenButton").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{}};
els.frame.addEventListener("load",()=>setTimeout(()=>els.loading.classList.add("hidden"),500));
addEventListener("resize",()=>{if(innerWidth>820)closeMobile()});

sessionStorage.getItem(AUTH_KEY)==="true"&&getLoggedUser()?showDash():showLogin();


// Cards da página inicial abrem o grupo correspondente no menu.
document.querySelectorAll(".home-module-card").forEach(card=>{
  card.addEventListener("click",()=>{
    const groupIndex=Number(card.dataset.groupTarget);
    const group=document.querySelectorAll(".menu-group")[groupIndex];
    if(!group)return;
    expandSidebar();
    closeGroups();
    group.classList.add("open");
    group.querySelector(".menu-main")?.setAttribute("aria-expanded","true");
    group.querySelector(".menu-main")?.scrollIntoView({behavior:"smooth",block:"center"});
  });
});


// ==========================================================
// SAUDAÇÃO DINÂMICA DA TELA INICIAL
// ==========================================================
function updateDynamicWelcome() {
  const greetingEl = document.getElementById("dynamicGreeting");
  const messageEl = document.getElementById("welcomeMessage");
  const momentEl = document.getElementById("welcomeMoment");

  if (!greetingEl || !messageEl || !momentEl) return;

  const now = new Date();
  const hour = now.getHours();

  let greeting = "Boa noite";
  let symbol = "🌙";

  if (hour >= 5 && hour < 12) {
    greeting = "Bom dia";
    symbol = "☀️";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Boa tarde";
    symbol = "🌤️";
  }

  const loggedUser=getLoggedUser();
  const firstName=getFirstName(loggedUser?.name);
  greetingEl.textContent = `${symbol} ${greeting}, ${firstName}!`;
  messageEl.textContent =
    "Bem-vindo ao Jales Vision — visão completa da operação em tempo real.";

  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(now);

  const formattedTime = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(now);

  momentEl.textContent = `${formattedDate} • ${formattedTime}`;
}

updateDynamicWelcome();
setInterval(updateDynamicWelcome, 60000);
