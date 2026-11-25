const express = require("express");
const app = require("../app");
const { registerUser } = require("../Controlles/authController");

const authRoute = express.Router();


//Match routes
authRoute.post("/register", registerUser )



module.exports = authRoute;