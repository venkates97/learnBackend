const express = require("express");
const todoRouter = require("./routes/todoRoutes");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger");
const errorHandeler = require("./middleware/errorHandeler");
const authRoute = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

//Body Parser
app.use(bodyParser.json());
//Cookie Parser
app.use(cookieParser());

//Logger
app.use(logger);

// app.use(express.json())

// adding router
app.use("/todos", todoRouter);

// auth Router
app.use("/auth", authRoute)

//handling router notfound error

app.use(errorHandeler);




module.exports = app;