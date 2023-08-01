------------------------------ FRONTEND -------------------------

📝 Descrição da Aplicação Frontend

A aplicação de Gerenciamento de Usuários e Contatos é uma ferramenta poderosa desenvolvida para simplificar e agilizar a manipulação de informações de usuários e seus respectivos contatos. Foi projetada para oferecer uma interface simples e segura, permitindo que os usuários interajam facilmente com seus dados e lista de contatos.

📚 Funcionalidades

Cadastro de Usuários: Permite a criação de novos registros de usuários com informações essenciais, como nome completo, endereço de e-mail, telefone e outros detalhes relevantes.

Listagem de Usuários: Possibilita a leitura dos detalhes de um usuário específico.

Atualização de Usuários: Permite a atualização dos dados de um usuário existente, como nome, sobrenome, endereço, entre outros campos.

Exclusão de Usuários: Caso necessário, a API permite a exclusão de usuários, garantindo a gestão adequada e a conformidade com a legislação de proteção de dados.

Cadastro de Contatos: Além das funcionalidades de usuários, a API permite que contatos sejam associados a um usuário, com detalhes como nome, número de telefone, e-mail, entre outros.

Consulta de Contatos: Os desenvolvedores podem recuperar os contatos associados a um usuário específico.

Atualização de Contatos: É possível atualizar os registros de contatos vinculados aos usuários, garantindo a precisão das informações.

Exclusão de Contatos: Se necessário, os contatos podem ser excluídos, mantendo o banco de dados organizado e livre de informações obsoletas.

Autenticação e Segurança: A API de CRUD de Usuários e Contatos é projetada com segurança em mente. Ela oferece recursos robustos de autenticação, permitindo que apenas usuários autorizados acessem e manipulem os dados. Utiliza protocolos seguros, como HTTPS, para proteger as comunicações entre os clientes e o servidor.

🔧 Tecnologias:

Typescript
ReactJS
Axios
React Hook Form
React Toastify
React Router Dom
Styled Components
Zod

----------------------------- BACKEND ---------------------------



-- API de Gerenciamento de Clients e Contatos --

A API de Gerenciamento de Clients e Contatos é uma ferramenta robusta desenvolvida para simplificar e agilizar a manipulação de informações de usuários e seus respectivos contatos. Seu objetivo é fornecer uma interface simples e segura que permite que aplicativos e sistemas interajam de forma eficiente com os dados de usuários e suas listas de contatos.

Funcionalidades

A API oferece as seguintes funcionalidades:

Cadastro de Clientes: Permite que aplicativos criem novos registros de usuários com informações essenciais, como nome completo, endereço de e-mail, telefone e outros detalhes relevantes.

Recuperação de Clientes: Possibilita a leitura dos detalhes de um usuário específico apenas.

Atualização de Clientes: Permite a atualização dos dados de um usuário existente, como nome, sobrenome, endereço, entre outros campos.

Exclusão de Clientes: Caso necessário, a API possibilita a exclusão de usuários, garantindo a gestão adequada e a conformidade com a legislação de proteção de dados.

Cadastro de Contatos: Além das funcionalidades de usuários, a API permite que contatos sejam associados a um usuário, com detalhes como nome, número de telefone, e-mail, entre outros.

Consulta de Contatos: Os desenvolvedores podem recuperar os contatos associados a um usuário específico.

Atualização de Contatos: É possível atualizar os registros de contatos vinculados aos usuários, garantindo a precisão das informações.

Exclusão de Contatos: Se necessário, os contatos podem ser excluídos, mantendo o banco de dados organizado e livre de informações obsoletas.

Autenticação e Segurança: A API de CRUD de Usuários e Contatos é projetada com segurança em mente. Ela oferece recursos robustos de autenticação, permitindo que apenas usuários autorizados acessem e manipulem os dados. Utiliza protocolos seguros, como HTTPS, para proteger as comunicações entre os clientes e o servidor.

Tecnologias Utilizadas

A API foi desenvolvida utilizando as seguintes tecnologias:

Typescript
Node.js
Express
TypeORM
Zod
Cors
Dotenv
BcryptJs
Jsonwebtoken
express-async-errors
reflect-metadata

-- Rodando o Projeto --

Para executar o projeto, siga as etapas abaixo:

Clone o repositório para sua máquina local.

Crie um arquivo .env na raiz do projeto e copie o conteúdo do arquivo .env.example para ele. Em seguida, configure o DATABASE_URL com as informações do banco de dados PostgreSQL criado.

No terminal, navegue até o diretório do projeto e execute o comando npm install para instalar todas as dependências necessárias.

Rode as migrações existentes na pasta migrations para criar as tabelas no banco de dados com o comando npm run typeorm migration:run -- -d src/data-source.

Para iniciar o servidor, execute o comando npm run dev.

Rotas que não precisam de autenticação
Criação de usuário
POST /clients - FORMATO DA REQUISIÇÃO

{
  "name": "Fabio",
	"email": "fabio@mail.com",
	"password": "123456",
	"number": "8398639116"
}
Caso dê tudo certo, a resposta será assim:

**POST /clients - FORMATO DA RESPOSTA - STATUS 201

{
	"id": "08fdd885-9b8f-4ecc-8979-ba206242f5d5",
	"name": "Fabio",
	"email": "fabio@mail.com",
	"number": "8398639116",
	"createdAt": "2023-07-31"
}

**LOGIN
POST /login - FORMATO DA REQUISIÇÃO

{
	"email": "fafa@mail.com",
	"password": "123456"
}
Caso dê tudo certo, a resposta será assim:

POST /login - FORMATO DA RESPOSTA - STATUS 201

{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnROYW1lIjoiUmVlZCIsImlhdCI6MTY5MDc4ODkzMywiZXhwIjoxNjkwODc1MzMzLCJzdWIiOiI4ODg1NjUzNS1hZjQ2LTRjM2EtYjY4Yy03Zjg1YzQxOGIxYWIifQ.OjCfd8FzcUxXovss_KFbkIASra0_nhgVexb1K13SQBg",
	"id": "88856535-af46-4c3a-b68c-7f85c418b1ab",
	"email": "fafa@mail.com",
	"name": "Reed"
}

Rotas que necessitam de autorização
Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

Authorization: Bearer {token}

Após o usuário estar logado, ele deve conseguir cadastrar seus contatos.

**Buscar Perfil do usuário logado (token)
GET /clients/id - FORMATO DA REQUISIÇÃO

Na requisição é necessário o TOKEN e passar o ID do usuario pelo paramêtro.

GET /clients/id - FORMATO DA RESPOSTA - STATUS 200

{
	"id": "88856535-af46-4c3a-b68c-7f85c418b1ab",
	"name": "Reed",
	"email": "fafa@mail.com",
	"number": "12345678",
	"createdAt": "2023-07-25"
}

**Atualizar os dados do perfil
Na requisição é necessário o TOKEN e passar o ID do usuario pelo paramêtro.
PATCH /clients/id - FORMATO DA REQUISIÇÃO
{
	"name": "Gabriel Atualizado",
	"email": "gabrield@mail.com",
	"password": "123456",
	"number": "8398639116"
}
Caso dê tudo certo, a resposta será assim:

PATCH /clients/id - FORMATO DA RESPOSTA - STATUS 200
{
	"id": "976c44c5-699e-45f2-acff-5057535d07db",
	"name": "Gabriel Atualizado",
	"email": "gabrield@mail.com",
	"number": "8398639116",
	"createdAt": "2023-07-24"
}

**Deletar Perfil do usuário logado (token)
DELETE /clients/id - FORMATO DA REQUISIÇÃO

Na requisição é necessário o TOKEN e passar o ID do usuario pelo paramêtro.

DELETE /clients/id - FORMATO DA RESPOSTA - STATUS 204

Não possui corpo de resposta.

**Criar contatos para o seu perfil
POST /contacts - FORMATO DA REQUISIÇÃO
Na requisição é necessário o TOKEN.
{
	"name": "Fullstack",
	"email": "fullstackzinho@mail.com",
	"number": "8398639116"
}
Caso dê tudo certo, a resposta será assim:

PATCH /contacts - FORMATO DA RESPOSTA - STATUS 201

{
	"name": "Fullstack",
	"email": "fullstackzinho@mail.com",
	"number": "8398639116",
	"createdAt": "2023-07-31"
}

**Listar contatos do usuário logado
GET /contacts - FORMATO DA REQUISIÇÃO
Na requisição é necessário o TOKEN.

GET /contacts - FORMATO DA RESPOSTA - STATUS 200
[
	{
		"id": "d70c4f8e-ee85-4d2d-83ec-3c0c6a8dcae7",
		"name": "Fender",
		"email": "fender@mail.com",
		"number": null,
		"createdAt": "2023-07-31"
	}
]

**Atualizar contatos do usuário logado
Na requisição é necessário o TOKEN e passar o ID do usuario pelo paramêtro.

PATCH /contacts/id - FORMATO DA REQUISIÇÃO
{
	"name": "Jessica Plantee",
	"email": "fabijjjj@mail.com",
	"password": "123456",
	"number": "8398639116"
}

PATCH /contacts/id - FORMATO DA RESPOSTA - STATUS 200

[
	{
		"name": "Jessica Plantee",
		"email": "fabijjjj@mail.com",
		"number": "8398639116",
		"createdAt": "2023-07-27"
	}
]

**Deletar contatos do usuário logado
Na requisição é necessário o TOKEN e passar o ID do usuario pelo paramêtro.

DELETE /contacts/id - FORMATO DA REQUISIÇÃO

DELETE /contacts/id - FORMATO DA RESPOSTA - STATUS 204

Não possui corpo de resposta.

