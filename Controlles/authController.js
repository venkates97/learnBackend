const user = require("../models/user");
const UserDB = require("../models/user");
const { JWT_SCERET, NODE_ENV } = require("../utils/config");
const checkExistingUser = require("../validation/checkExistingUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const authController = {

    registerUser: async (request, response) => {

        try {
            const { name, email, password } = request.body;

            // Validate user existance
            if (await checkExistingUser(email)) {
                return response.status(500).json({ "message": "User already exist" })
            }

            //Password erncryption
            const encryptedpassCode = await bcrypt.hash(password, 10);
            // console.log("encryptedpassCode: ", encryptedpassCode);

            // save it in user db model
            const newUser = new UserDB({
                name,
                email,
                password: encryptedpassCode
            })

            // if new user save it in database
            const savedUser = await newUser.save();

            // Never show password in front end
            const user = savedUser.toObject();
            delete user.password;


            // send resonse with saved message
            response.status(201).json({
                "message": "New user registered"
                , "New user Details": user
            });

        } catch (e) {
            response.status(500).json({ "message": "error in registering user..." })
        }
    },

    loginUser: async (request, response) => {

        try {
            const { email, password } = request.body;

            // Find DB details user
            const existUser = await UserDB.findOne({ email });

            // check existing user
            if (!existUser) {
                response.status(500).json({ "message": "User Does't exist" });
            }

            // check password
            const verifypasscode = await bcrypt.compare(password, existUser.password);
            console.log("verifypasscode:", verifypasscode);

            if (!verifypasscode) {
                response.status(500).json({ "message": "Password is does't match please try again" });
            }

            const token = jwt.sign({ userID: existUser._id }, JWT_SCERET, { expiresIn: '1h' })


            // tokent is sent to cookia
            response.cookie('token', token, {
                httpOnly: true,
                secure: NODE_ENV === "production",
                sameSite: 'strict',
                maxAge: 3600000
            })


            // user loging
            response.status(200).json({
                "message": "User Logged in",
                "token": token

            });

        } catch (e) {

            response.status(500).json({ "message": "User unable to login" });

        }
    },

    me: async (request, response) => {
        try {

            // get token for authendication
            const userId = request.userId;

            // get user details from DB
            const user = await UserDB.findById(userId).select('-password -__v');

            if (!user) {
                response.status(404).json({ "message": "User not found" })
            }

            // response send to front end
            response.status(200).json({
                "message": "cookie recived",
                "user": user
            })

        } catch (e) {
            response.status(500).json({ "message": "unable to get cookie" })
        }
    },

    logOutUser: async (request, response) => {

        try {
            response.clearCookie('token',{
                httpOnly:true,
                secure:NODE_ENV ==='production',
                sameSite:'strict'
            })

            response.status(200).json({ message: "user has been loged out" })
        } catch (e) {
            response.status(500).json({ message: "user unable to loged out" })

        }
    }
}

module.exports = authController;