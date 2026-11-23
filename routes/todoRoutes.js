const express = require("express");
const { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require("../Controlles/todosControllers");

const todoRouter = express.Router();


todoRouter.get("/", getAllTodos);
todoRouter.get("/:id", getTodoById);
todoRouter.post("/", createTodo);
todoRouter.put("/:id",updateTodo);
todoRouter.delete("/:id",deleteTodo);


module.exports = todoRouter;