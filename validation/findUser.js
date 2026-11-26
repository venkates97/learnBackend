const UserDB = require("../models/user");

const user=[];

async function findUser(email) {


    try {

        const existUser = await UserDB.findOne({ email });

        user = existUser;
        if (existUser) {
            return true;
        } else {
            return false;
        }

    } catch (e) {

        return console.log("unable to retrive user data from DB")
    }

function verfypassword(){

    console.log("veryfy passcode")

}

}

module.exports = findUser;