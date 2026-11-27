const jwt = require("jsonwebtoken");
const { JWT_SCERET } = require("../utils/config");
const UserDB = require("../models/user")


async function isAuthenticated(request, response, next) {

    try {
        const token = request.cookies.token;

        if (!token) {
            return response.status(400).json({ message: "user need to login. (user Logged Out)" })
        }
        const decodedUser = jwt.verify(token, JWT_SCERET)

        const userId = (decodedUser.userID);

        request.userId = userId;

        next();
    } catch (e) {
        return response.status(500).json({ message: "(user Logged Out) Please login" })

    }
}

function allowedRoles(roles) {



    return async (request, response, next) => {

        const userId = request.userId

        if (!userId) {
            return response.status(500).json({ message: "user Id not found. please login again" })
        }

        const user = await UserDB.findById(userId);

        if (!user) {
            return response.status(500).json({ message: "user is not found from the DB. please login again" })
        }

        if (!(roles.includes(user.role))){
            return response.status(500).json({ message: "User not have access for this opeartion" })

        }


        console.log("roles:", roles.includes(user.role));

        next();
    }
}

module.exports = {
    isAuthenticated,
    allowedRoles
};