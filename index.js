const connectToMongo = require("./database");
const express = require("express");
var cors = require("cors");

connectToMongo();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello Bharat, Application is running Successfully");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
