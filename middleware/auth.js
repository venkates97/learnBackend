const jwt = require("jsonwebtoken");
const { JWT_SCERET } = require("../utils/config");


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

module.exports = isAuthenticated;