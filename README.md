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

