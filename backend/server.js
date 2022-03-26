const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const cors = require("cors");
const db = require("./db");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const router = require("./routes/app");

app.use("/", router);

const port = process.env.port;
app.listen(port, () => {
  console.log("hello to my server http://localhost:" + port);
});
