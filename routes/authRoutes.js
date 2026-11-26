const express = require("express");
const app = require("../app");
const { registerUser, loginUser, me, logOutUser } = require("../Controlles/authController");

const authRoute = express.Router();


//Match routes
authRoute.post("/register", registerUser )
authRoute.post("/login", loginUser )
authRoute.post("/me",me)
authRoute.post("/logout", logOutUser)



module.exports = authRoute;