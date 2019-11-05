const Mongoose = require("mongoose");

const RegisterSchema = Mongoose.Schema({
    carnet:String,
    schedule:String,
    tarde:Boolean,
    date: Date
});

module.exports = Mongoose.model("Register", RegisterSchema);