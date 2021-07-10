const express = require("express");
const next = require("next");
const cors = require("cors");
require("dotenv").config();
const connect = require("./model/connect");
const bodyParser = require("body-parser").json();

// pull PORT number from .env file
const PORT = process.env.PORT;

// Start next app in dev mode and create a handle
// the request handler is provided by Next to manage server requests and response
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const routes = require("./routes/index.js");
    const authRouter = require("./routes/auth-router.js");
    const todoRouter = require("./routes/todo-router.js");

    server.use(cors());

    // all requests made to /api will be handled by routes()
    server.use("/api", routes(server));
    server.use("/api/auth", bodyParser, authRouter(server));
    server.use("/api/todo", bodyParser, todoRouter(server));

    // all other requests will be handled by the Next App
    server.get("*", (req, res) => {
      return handler(req, res);
    });

    // Our mongi DB connect method
    connect();

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`>_ Ready on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
