# Jales Vision — Versão 14

## Atualização V21

- A barra lateral recolhe automaticamente ao retirar o mouse de toda a área de navegação, devolvendo o espaço ao relatório.
- Os submenus também são fechados no recolhimento automático.
- Os elementos flutuantes da tela de login foram reposicionados na área livre, sem ficarem atrás do formulário.
- O símbolo SESMT recebeu afastamento adicional das bordas.
- A estrutura de publicação permanece na raiz do GitHub Pages, sem caminhos de pastas locais.

## Correções aplicadas

### Saudação pelo usuário logado
A saudação agora utiliza automaticamente o primeiro nome do usuário autenticado.

Exemplo:
- Bom dia, Gilmar!
- Boa tarde, João!
- Boa noite, Maria!

### Estrutura de usuários
O arquivo `script.js` contém a lista `USERS`, com:
- usuário;
- senha;
- nome completo;
- cargo ou função.

### Perfil no cabeçalho
O nome, função e iniciais também são atualizados de acordo com o usuário conectado.

### Menu recolhido
O botão de recolher/expandir foi reposicionado abaixo da logo quando o menu estiver recolhido, eliminando a sobreposição.

## Autenticação
O acesso agora utiliza Supabase Auth. Nenhuma senha deve ser registrada neste arquivo ou no JavaScript público.

### Administração de usuários
- O botão **Administrar usuários** aparece somente para perfis administradores.
- O administrador informa nome, usuário, e-mail e perfil.
- O Supabase envia um convite para que o próprio usuário defina a senha.
- Perfis, status e auditoria são protegidos por Row Level Security (RLS).
- A Edge Function `admin-create-user` valida novamente a permissão administrativa no servidor.

### Publicação
Para a autenticação integrada, publique `index.html`, `style.css`, `script.js`,
`supabase-auth.js` e a pasta `assets` na raiz do GitHub Pages. A versão
`versao-unico-arquivo.html` permanece apenas como referência visual legada.


## Correção Gestão de Produções

Foram atualizados os identificadores internos das páginas:

- Estatísticas de Produção: `816f3d801679ccb0a3da`
- Produções Periódicas: `3feaea1890969b094e02`

As demais páginas deste menu foram mantidas, pois os identificadores enviados continuam correspondendo ao projeto.


### V15
Atualizada a navegação do menu Gestão de Produções com os identificadores corretos das páginas do Power BI.

### V18 — Layout e tela de login

- Menus principais com fundo mais escuro e submenus mais claros.
- Expansão automática dos submenus ao passar o mouse no computador.
- Efeitos de destaque para menus, submenus e página selecionada.
- Compatibilidade por clique mantida para dispositivos móveis.
- Todo novo acesso começa obrigatoriamente na página inicial do Jales Vision.
- Nova tela funcional de login voltada à Segurança do Trabalho, com rede de distribuição urbana/rural e frases motivacionais.
- Alterações aplicadas aos arquivos separados e à versão de arquivo único.
- O menu principal permanece visualmente destacado enquanto o usuário percorre seus submenus e recolhe ao retirar o mouse de todo o grupo.
- Logo superior ampliada nos modos expandido e recolhido, preservando proporção e posicionamento.
- Navegação em cascata: o próximo menu abre imediatamente e o anterior recolhe com pequeno atraso, evitando o fechamento brusco de todos os grupos.
- Elementos flutuantes animados na tela de login: capacete, cinto paraquedista, luvas de vaqueta e isolantes, óculos claros e escuros, símbolo CIPA/SESMT/Segurança e cifras em reais.


## Correção V16 — Navegação em Gestão de Produções

A correção foi aplicada em ambos os modos do projeto:

- `script.js`, utilizado pelo `index.html`;
- JavaScript incorporado em `versao-unico-arquivo.html`.

Isso evita que a versão em arquivo único continue utilizando os identificadores antigos das páginas.
