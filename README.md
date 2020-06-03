# Server APP Ecoleta
Este respositório contém a API para o App Ecoleta desenvolvido durante a Next Level Week da Rocketseat.

Requisitos:
*NodeJS v12.16.1

## Como executar
Faça o clone/dowload deste repositório, execute `npm install` para baixar as dependencias e `npm run dev`para execultar o projeto.

## Rotas
Todas as requisições de POST para está API devem conter o header `Content-Type: application/json`
Esta API contém as seguintes rotas:

* `GET/items` : lista os itens cadastrados
* `GET/points/:id` : lista um ponto de coleta apartir de um `id` informado
* `GET/points` : lista todos os pontos de coleta apartir dos seguintes parametros:  `city`, `uf`, `items`, informado nos Query Params
* `POST/points` : cria um novo ponto de coleta

## Exemplos

### GET/ items
Requesições:
```javascript
GET/items
```
Resposta:
```javascript
  [
  {
    "id": 1,
    "image_url": "http://localhost:3333/uploads/lampada.svg"
  },
  {
    "id": 2,
    "image_url": "http://localhost:3333/uploads/baterias.svg"
  },
  {
    "id": 3,
    "image_url": "http://localhost:3333/uploads/papeis-papelao.svg"
  },
  {
    "id": 4,
    "image_url": "http://localhost:3333/uploads/eletronicos.svg"
  },
  {
    "id": 5,
    "image_url": "http://localhost:3333/uploads/organicos.svg"
  },
  {
    "id": 6,
    "image_url": "http://localhost:3333/uploads/oleo.svg"
  }
]
```

### GET /points/:id
Requisição:
```javascript
GET /points/4
```
Resposta:
```javascript
  {
  "point": {
    "id": 4,
    "image": "image-fake",
    "name": "Mercado Imperatiz",
    "email": "mercadoimperatiz.com.br",
    "whatsapp": "82223322",
    "latitude": -45.4434,
    "longitude": -45.3434,
    "city": "Rio do Sul",
    "uf": "SC"
  },
  "items": [
    {
      "title": "Lâmpadas"
    },
    {
      "title": "Pilhas e baterias"
    },
    {
      "title": "Óleo de cozinha"
    }
  ]
}
```

### POST /points

Requisição:
```javascript
//POST /tools
//Content-Type: application/json
{
	"name" : "Mercado Seu Zé",
	"email" : "mercadoimperatiz.com.br",
	"whatsapp" : "82223322",
	"latitude" : -45.4434,
	"longitude" : -45.3434,
	"city" : "Rio do Sul",
	"uf": "SC",
	"items" : [
		1,
		2,
		6
	]
}
```

Resposta:
```javascript
{
  "id": 1,
  "image": "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "name": "Mercado Seu Zé",
  "email": "mercadoimperatiz.com.br",
  "whatsapp": "82223322",
  "latitude": -45.4434,
  "longitude": -45.3434,
  "city": "Rio do Sul",
  "uf": "SC"
}
```

### GET /points?city=Rio%do%Suç&uf=SC&items=2

Requisição:
```javascript
GET /points?city=Rio do Sul, SC, 2
```
Resposta:
```javascript
[
  {
    "id": 4,
    "image": "image-fake",
    "name": "Mercado Imperatiz",
    "email": "mercadoimperatiz.com.br",
    "whatsapp": "82223322",
    "latitude": -45.4434,
    "longitude": -45.3434,
    "city": "Rio do Sul",
    "uf": "SC"
  },
  {
    "id": 5,
    "image": "image-fake",
    "name": "Mercado Imperatiz",
    "email": "mercadoimperatiz.com.br",
    "whatsapp": "82223322",
    "latitude": -45.4434,
    "longitude": -45.3434,
    "city": "Rio do Sul",
    "uf": "SC"
  }
]
```


