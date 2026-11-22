const express = require("express");

const todoRouter = express.Router();


todoRouter.get("/all", (request, response) => {
  response.send("Hello, World venkat!");   
});


module.exports = todoRouter;