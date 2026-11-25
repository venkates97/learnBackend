const UserDB = require("../models/user");

async function checkExistingUser(email) {

    console.log();
    const existUser = (await UserDB.find({email})).length;
    
    if (existUser  > 0)
    {
        return true;
    }

    return false;
    
}

module.exports = checkExistingUser;