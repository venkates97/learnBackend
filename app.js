const express = require("express");
const todoRouter = require("./routes/todoRoutes");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger");


const app = express();


app.use(bodyParser.json());
app.use(logger);

// app.use(express.json())

app.use("/todos", todoRouter );




module.exports = app;