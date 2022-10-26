const express = require("express");
const bodyParser = require("body-parser");
const server = require("./server");
const PORT = 5000;

const app = express();

app.use(bodyParser.json());
app.use(server);
app.listen(PORT, () => {
  console.log("listenin", PORT);
});