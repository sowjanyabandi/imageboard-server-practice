const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./db");
const Image = require("./image/model");
const imageRouter = require("./image/router");
const app = express();
const corsMiddleware = cors();
app.use(corsMiddleware);
const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use(imageRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
