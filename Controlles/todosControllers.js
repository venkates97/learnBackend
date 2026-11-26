const TodoDB = require("../models/todos");
const todosControllers = {

    getAllTodos: async (request, response) => {

        try {



        
            // console.log("Test: ", userDetails);




            const todos = await TodoDB.find()
            response.status(200).json(todos);
        } catch (e) {
            response.status(500).json("Unable to fetch from mongo db")
        }

    },

    getTodoById: async (request, response) => {

        try {

            const { id: cat } = request.params;
            console.log(cat);

            const todo = await TodoDB.findById(cat)
            response.status(200).json(todo)


        } catch (e) {
            response.status(500).json({ "message": "Error in fecthig the id elements from mongo db" })
        }

    },

    createTodo: async (request, response) => {

        try {
            console.log(request.body);

            const { title,
                desc,
                isDone } = request.body;

            const newTodo = new TodoDB({
                title,
                desc,
                isDone
            })


            const todo = await newTodo.save();

            response.status(200).json(todo)


        } catch (e) {
            response.status(500).json({ "message": "Error in creating the new todo element on mongo db" })
        }

    },

    updateTodo: async (request, response) => {

        try {
            // console.log(`id: ${request.params} \nBody: ${request.body}`);


            console.log(request.params);
            console.log(request.body);

            const { id } = request.params;
            const { title,
                desc,
                isDone } = request.body;

            const updateData = request.body;



            const todo = await TodoDB.findByIdAndUpdate(request.params.id, request.body)

            response.status(200).json(todo)


        } catch (e) {
            response.status(500).json({ "message": "Error in creating the new todo element on mongo db" })
        }

    },

    deleteTodo: async (request, response) => {

        try {

            const todo = await TodoDB.findByIdAndDelete(request.params.id)

            response.status(200).json(todo)


        } catch (e) {
            response.status(500).json({ "message": "Error in Deleting todo element on mongo db" })
        }

    },

}

module.exports = todosControllers;