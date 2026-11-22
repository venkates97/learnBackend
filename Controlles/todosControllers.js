const TodoDB = require("../models/todos");

const todosControllers ={

    getAllTodos: async (req, res) => {

        const todos = await TodoDB.find()
        res.json(todos);
    }   
    
}

module.exports = todosControllers;