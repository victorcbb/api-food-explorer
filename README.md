# api-food-explorer

## Description

It is a API app of food delivery, having users and admin, which relate to an Requests table and in turn relates to products that have ingredients.

### Current Stack :technologist:
- `Typescript`
- `prisma`
- `express`
- `PostgreSQL`
- `jsonwebtoken`
- `bcrypt`

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

