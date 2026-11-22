const { default: mongoose } = require("mongoose");


const todoSchema = new mongoose.Schema({
    title: {
        type: String
    }
    ,
    desc: {
        type: String,
        default: "Please add your desription"
    },

    isDone: {
        type: Boolean,
        default:false
    }
})


module.exports = mongoose.model('TodoDB',todoSchema,'todos')