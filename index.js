import cors from "cors";
import generator from "data-generator-retail";
import jsonServer from "json-server";

const { commands, ...data } = generator.default();
const fixedData = {
  orders: commands,
  ...data,
};

const server = jsonServer.create();
const router = jsonServer.router(fixedData);

server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
server.get("/", (_req, res) => {
  res.send(`
<html lang="en">
  <head>
    <style>
    body {
      font-family: Monaco, monospace;
    }
    </style>
  </head>
  <body>
    <h1>Data Generator Retail API</h1>
    <h2>Endpoints:</h2>
    <ul>
      <li><a href="/products?_page=1&_limit=10">/products</a> (GET, POST)</li>
      <li><a href="/products/1">/products/:id</a> (GET, PUT, DELETE)</li>
      <li><a href="/categories?_page=1&_limit=10">/categories</a> (GET, POST)</li>
      <li><a href="/categories/1">/categories/:id</a> (GET, PUT, DELETE)</li>
      <li><a href="/orders?_page=1&_limit=10">/orders</a> (GET, POST)</li>
      <li><a href="/orders/1">/orders/:id</a> (GET, PUT, DELETE)</li>
      <li><a href="/customers?_page=1&_limit=10">/customers</a> (GET, POST)</li>
      <li><a href="/customers/1">/customers/:id</a> (GET, PUT, DELETE)</li>
      <li><a href="/invoices?_page=1&_limit=10">/invoices</a> (GET, POST)</li>
      <li><a href="/invoices/1">/invoices/:id</a> (GET, PUT, DELETE)</li>
      <li><a href="/reviews?_page=1&_limit=10">/reviews</a> (GET, POST)</li>
      <li><a href="/reviews/1">/reviews/:id</a> (GET, PUT, DELETE)</li>
    </ul>
  </body>
</html>
    `);
});
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, async () => {
  console.log(`REST API Server is running at http://localhost:${port}/`);
});
