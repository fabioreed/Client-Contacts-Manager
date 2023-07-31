# Client-Contacts-Manager
*POST Rota de Login:
Endpoint: /login
{
	"email": "fafa@mail.com",
	"password": "123456"
}

Response STATUS 200 OK:
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnROYW1lIjoiUmVlZCIsImlhdCI6MTY5MDc4ODkzMywiZXhwIjoxNjkwODc1MzMzLCJzdWIiOiI4ODg1NjUzNS1hZjQ2LTRjM2EtYjY4Yy03Zjg1YzQxOGIxYWIifQ.OjCfd8FzcUxXovss_KFbkIASra0_nhgVexb1K13SQBg",
	"id": "88856535-af46-4c3a-b68c-7f85c418b1ab",
	"email": "fafa@mail.com",
	"name": "Reed"
}

//CRUD Clientes
*POST Cadastro de Cliente (usuário):
Não é necessário Token.
Endopoint: /clients
{
	"name": "Usuario Novo",
	"email": "fabiofofo@mail.com",
	"password": "123456",
	"number": "8398639116"
}

Response STATUS 201 Created:
{
	"id": "08fdd885-9b8f-4ecc-8979-ba206242f5d5",
	"name": "Usuario Novo",
	"email": "fabiofofo@mail.com",
	"number": "8398639116",
	"createdAt": "2023-07-31"
}

*GET Listar Clientes por ID:
Necessário Token.
Endpoint: /clients/${id}

Response STATUS 200 OK:
{
	"id": "88856535-af46-4c3a-b68c-7f85c418b1ab",
	"name": "Reed",
	"email": "fafa@mail.com",
	"number": "12345678",
	"createdAt": "2023-07-25"
}

*PATCH Atualizar Cliente por ID:
Necessário Token.
Endpoint: /clients/${id}
{
	"name": "Gabriel Atualizado",
	"email": "gabrield@mail.com",
	"password": "123456",
	"number": "8398639116"
}

Response STATUS 200 OK:
{
	"id": "976c44c5-699e-45f2-acff-5057535d07db",
	"name": "Gabriel Atualizado",
	"email": "gabrield@mail.com",
	"number": "8398639116",
	"createdAt": "2023-07-24"
}

*DELETE Cliente por ID, necessário Token. Endpoint: /clients/${id}

Response Status 204!

//CRUD Contatos
*POST Crirar Contatos, necessário Token. Endpoint: /contacts
{
	"name": "Fullstack",
	"email": "fullstackzinho@mail.com",
	"number": "8398639116"
}

Response 201 Created:
{
	"name": "Fullstack",
	"email": "fullstackzinho@mail.com",
	"number": "8398639116",
	"createdAt": "2023-07-31"
}

*GET Listar clientes relacionados àquele Token. Necessário Token.
/contacts
Response 200 Ok:
{
  "id": "d70c4f8e-ee85-4d2d-83ec-3c0c6a8dcae7",
  "name": "Fender",
  "email": "fender@mail.com",
  "number": null,
  "createdAt": "2023-07-31"
}

*PATCH Atualizar Clients Necessário Token
/contacts/${id}
{
	"name": "Jessica Plantee",
	"email": "fabijjjj@mail.com",
	"password": "123456",
	"number": "8398639116"
}

Response 200 Ok:
{
	"name": "Jessica Plantee",
	"email": "fabijjjj@mail.com",
	"number": "8398639116",
	"createdAt": "2023-07-27"
}

*DELETE Contato por ID, necessário Token. Endpoint: /contacts/${id}

Response Status 204!