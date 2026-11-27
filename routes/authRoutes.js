const express = require("express");
const app = require("../app");
const { registerUser, loginUser, me, logOutUser } = require("../Controlles/authController");
const {isAuthenticated} = require("../middleware/auth");

const authRoute = express.Router();


//Match routes

// public routes
authRoute.post("/register", registerUser )
authRoute.post("/login", loginUser )

// protected routes
authRoute.post("/me",isAuthenticated,me)
authRoute.post("/logout",isAuthenticated, logOutUser)



module.exports = authRoute;