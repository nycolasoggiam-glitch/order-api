# Order API
API desenvolvida como parte de desafio técnico.

API desenvolvida em **Node.js** para gerenciamento de pedidos.

Este projeto foi desenvolvido como parte de um **desafio técnico** para demonstrar habilidades em desenvolvimento backend, criação de APIs REST e integração com banco de dados.

---

# Tecnologias utilizadas

* Node.js
* Express
* Sequelize
* SQLite
* JavaScript

---

# Estrutura do projeto

src/
├ config
├ controllers
├ models
├ routes
├ services
├ utils
└ app.js

---

# Instalação

Clone o repositório:

git clone https://github.com/nycolasoggiam-glitch/order-api.git

Entre na pasta do projeto:

cd order-api

Instale as dependências:

npm install

---

# Executar o projeto

npm start

O servidor iniciará em:

http://localhost:3000

---

# Endpoints da API

Criar pedido

POST /order

Buscar pedido

GET /order/:orderId

Listar pedidos

GET /order/list

Atualizar pedido

PUT /order/:orderId

Deletar pedido

DELETE /order/:orderId

---

# Exemplo de Request

{
"numeroPedido": "v10089015vdb-01",
"valorTotal": 10000,
"dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
"items": [
{
"idItem": "2434",
"quantidadeItem": 1,
"valorItem": 1000
}
]
}

---

# Transformação de dados (Mapping)

Os dados recebidos pela API são transformados para o seguinte formato antes de serem armazenados no banco de dados:

{
"orderId": "v10089016vdb",
"value": 10000,
"creationDate": "2023-07-19T12:24:11.529Z",
"items": [
{
"productId": 2434,
"quantity": 1,
"price": 1000
}
]
}

---

# Autor

Nycolas Oggiam
