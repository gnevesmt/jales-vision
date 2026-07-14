# Jales Vision — Versão 14

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

## Usuário atual
Usuário: gneves  
Senha: 181969  
Nome: Gilmar Pereira Neves  
Função: Administrador do Portal


## Correção Gestão de Produções

Foram atualizados os identificadores internos das páginas:

- Estatísticas de Produção: `816f3d801679ccb0a3da`
- Produções Periódicas: `3feaea1890969b094e02`

As demais páginas deste menu foram mantidas, pois os identificadores enviados continuam correspondendo ao projeto.


### V15
Atualizada a navegação do menu Gestão de Produções com os identificadores corretos das páginas do Power BI.


## Correção V16 — Navegação em Gestão de Produções

A correção foi aplicada em ambos os modos do projeto:

- `script.js`, utilizado pelo `index.html`;
- JavaScript incorporado em `versao-unico-arquivo.html`.

Isso evita que a versão em arquivo único continue utilizando os identificadores antigos das páginas.
