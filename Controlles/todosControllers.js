const todosControllers ={

    getAllTodos: (req, res) => {
        res.json(
            { 
                message: "All todos fetched successfully" 
            }
        );
    }   
    
}

module.exports = todosControllers;