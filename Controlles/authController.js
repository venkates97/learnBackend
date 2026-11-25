const { response } = require("../app")
const UserDB = require("../models/user");
const checkExistingUser = require("../validation/checkExistingUser");
const authController = {

    registerUser: async (request, response) => {

        try {
            const { name, email, password } = request.body;

            // save it in user db model
            const newUser = new UserDB({
                name,
                email,
                password
            })

            // Validate user existance
            if (await checkExistingUser(email)) {
                return response.status(500).json({ "message": "User already exist" })
            }

            // if new user save it in database
            const savedUser = await newUser.save()

            // send resonse with saved message
            response.status(201).json({
                "message": "New user registered"
                , "New user Details": savedUser
            });

        } catch (e) {
            response.status(500).json({ "message": "error in registering user..." })
        }
    }


}

module.exports = authController;