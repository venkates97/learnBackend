const express = require("express");
const { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require("../Controlles/todosControllers");
const { isAuthenticated, allowedRoles } = require("../middleware/auth");

const todoRouter = express.Router();

todoRouter.use(isAuthenticated);

// Protected routes
todoRouter.get("/",allowedRoles(["admin","user"]), getAllTodos);
todoRouter.get("/:id",allowedRoles(["admin","user"]), getTodoById);
todoRouter.post("/",allowedRoles(["admin","user"]), createTodo);
todoRouter.put("/:id",allowedRoles(["admin","user"]),updateTodo);
todoRouter.delete("/:id",allowedRoles(["admin"]),deleteTodo);


module.exports = todoRouter;