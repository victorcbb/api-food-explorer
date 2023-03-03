# api-food-explorer

## Description

This is a restaurant food delivery API, having users as customers and ADMIN, being able to select one or more products, forming an order to make the purchase.
ADMIN, in addition to conventional use, can manage orders and add new products.

### Current Stack :technologist:
- `Typescript`
- `prisma`
- `express`
- `PostgreSQL`
- `jsonwebtoken`
- `bcrypt`
- `Docker`

## Installation

First clone this repository:

```bash
$ git clone git@github.com:victorcbb/api-food-explorer.git
```

Inside the directory, run:
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev
```

## Running the DB

### Install Docker

Now it will be necessary to install Docker so that we can create a DB to test the app. The installation strategies vary according to each OS, so i'll leave a link to each one:

- [For Windows](https://docs.docker.com/desktop/install/windows-install/)
- [For MacOS](https://docs.docker.com/desktop/install/mac-install/)
- [For Linux](https://docs.docker.com/desktop/install/linux-install/#supported-platforms)

With Docker installed, let's create a Postgres container through the CLI:

 ```bash 
docker run --name NOME_DO_CONTAINER -e POSTGRES_USER=NOME_DO_USER -e POSTGRES_PASSWORD=SENHA_PARA_O_USER -e POSTGRES_DB=NOME_DO_BANCO -p 5432:5432 -d postgres
```

Use the same credencials from the previous step inside the `.env.example` file, taking the opportunity to change the name of this file to `.env`.

This API uses the [prisma](https://www.prisma.io/) ORM to create the database and its queries. For the database work locally it will be necessary to follow some steps.

- Run prisma migrate:
 ```bash 
npx prisma migrate dev
```

- Run prisma seed:
 ```bash 
npx prisma db seed
```

## Endpoints

### Authenticate

`POST`: 
```bash 
/authenticate/
```

### Ingredients

`POST`: 
```bash 
/ingredients/
```

### Products

`GET`: 
```bash 
/products/
```

`GET`: 
```bash 
/products/details/:id
```

`POST`: 
```bash 
/ingredients/
```

`PATCH`: 
```bash 
/ingredients/image/:id
```

### Requests

`POST`: 
```bash 
/requests/
```

`GET`: 
```bash 
/requests/myrequests
```

`GET`: 
```bash 
/requests/admin
```

`PUT`: 
```bash 
/requests/update
```

### Users

`POST`: 
```bash 
/users/
```

