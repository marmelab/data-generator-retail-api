# Local E-Commerce API With Fake Data

A REST API that exposes the data generated by [data-generator-retail](https://www.npmjs.com/package/data-generator-retail) using [JSON Server](https://www.npmjs.com/package/json-server).

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

The data will be available at `http://localhost:3000`.

Available endpoints:

- `/products` (GET, POST)
- `/products/:id` (GET, PUT, DELETE)
- `/categories` (GET, POST)
- `/categories/:id` (GET, PUT, DELETE)
- `/orders` (GET, POST)
- `/orders/:id` (GET, PUT, DELETE)
- `/customers` (GET, POST)
- `/customers/:id` (GET, PUT, DELETE)
- `/invoices` (GET, POST)
- `/invoices/:id` (GET, PUT, DELETE)
- `/reviews` (GET, POST)
- `/reviews/:id` (GET, PUT, DELETE)

See the [JSON server documentation](https://github.com/typicode/json-server/blob/v0/README.md#routes) for more information on route parameters, e.g.:

- `/products?_page=1&_limit=10&_sort=price&_order=asc`

## HTTPS & Sharing

The app exposes the API on localhost in HTTP. You can expose it in HTTPS via a local tunnel, e.g. using [serveo](https://serveo.net/):

```bash
ssh -R 80:localhost:3000 serveo.net
```

## LICENSE

MIT, courtesy of [Marmelab](https://marmelab.com/)
