const { response } = require("../app")
const UserDB = require("../models/user")
const authController = {

    registerUser: async (request, response) => {

        try {
            const {name,email,password} = request.body;
            // console.log(name,email,password);

            const newUser = new UserDB({
                name,
                email,
                password
            })


            // check wheather this user is already existed or not 

            const existingUser = await UserDB.find({email}) 
            
            // console.log(existingUser.length > 0);
            if (existingUser.length > 0)
            {
                return response.status(500).json({"message": "User already exist"})
            }
            

            const savedUser = await newUser.save()

            response.status(201).json({ 
                "message": "New user registered"
                ,"New user Details" : savedUser
            });

        } catch (e) {
            response.status(500).json({ "message": "error in registering user..." })
        }
    }


}

module.exports = authController;