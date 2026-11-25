const express = require("express");
const todoRouter = require("./routes/todoRoutes");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger");
const errorHandeler = require("./middleware/errorHandeler");
const authRoute = require("./routes/authRoutes");


const app = express();


app.use(bodyParser.json());
app.use(logger);

// app.use(express.json())

// adding router
app.use("/todos", todoRouter);

app.use("/auth", authRoute)

//handling router notfound error

app.use(errorHandeler);




module.exports = app;