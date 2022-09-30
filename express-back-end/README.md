# Open Order API

## Setup

Install dependencies with `npm install`.

## Creating The DB

Use the `psql -U development` command to login to the PostgreSQL server with the username `development` and the password `development`. This command **MUST** be run in a vagrant terminal, we are using the PostgreSQL installation provided in the vagrant environment.

Create a database with the command `CREATE DATABASE open_order;`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

```
PGHOST=localhost
PGUSER=development
PGDATABASE=manage_order
PGPASSWORD=development
PGPORT=5432
```

## Seeding

Run a the development server with `npm start` in the Host environment. We are only using vagrant for `psql` this week.

Both of these achieve the same result.

- Make a `GET` request to `/api/debug/reset` with `curl http://localhost:8001/api/debug/reset`.
- Use the browser to navigate to `http://localhost:8001/api/debug/reset`.

The `development` data is random. Each time we seed we expect to see different appointments.

## Run The Server

Running the server normally
```sh
npm start
```

Running the server so it returns an error when saving/deleting for testing the client's error handling capabilities
```sh
npm run error
```

## Api

### Days

`GET /api/users`

Response

```json
[
  {
    "id": 1,
    "name": "Egg Eggerson",
    "email": "friedEgg99@hotmail.com",
    "phone": "604789456",
    "password": "password"
  }
]
```

### Appointments

`GET /api/order_items`

Response:

```json
[
  {
    "id": 1,
    "name": "Mie Ayam",
    "price": 15,
    "order_quantity": 50,
    "description": "Mie Ayam is a common Indonesian dish of seasoned yellow wheat noodles topped with diced chicken meat",
    "img_url": "/images/mie_ayam.jpeg",
    "created_at": "2022-08-01T17:00:00.000Z",
    "order_date": "2022-10-01T17:00:00.000Z",
    "locations": [
      "Lougheed at 2 PM",
      "Pick Up at 4 PM",
      "Pick Up at 3 PM"
    ]
  }
]
```

`PUT /api/appointments/:id`

Body:

```json
{
  "interview": {
    "student": String,
    "interviewer": Number
  }
}
```

`DELETE /api/appointments/:id`

### Interviewers

`GET /api/interviewers`

Response:

```json
{
  "1": {
    "id": 1,
    "name": "Sylvia Palmer",
    "avatar": "https://i.imgur.com/LpaY82x.png"
  },
  "2": {
    "id": 2,
    "name": "Tori Malcolm",
    "avatar": "https://i.imgur.com/Nmx0Qxo.png"
  }
}
```
