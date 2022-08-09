const connectToMongo = require("./database");
const express = require("express");

connectToMongo();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Bharat");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
