const express = require("express");
const todoRouter = require("./routes/todoRoutes");

const app = express();

app.use("/todos", todoRouter );



module.exports = app;