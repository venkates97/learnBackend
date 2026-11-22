const express = require("express");
const { getAllTodos } = require("../Controlles/todosControllers");

const todoRouter = express.Router();


todoRouter.get("/", getAllTodos);


module.exports = todoRouter;