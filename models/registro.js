const Mongoose = require("mongoose");

const RegisterSchema = Mongoose.Schema({
    carnet:String,
    schedule:String,
    tarde:Boolean,
    date:date
});

module.exports = Mongoose.model("Register", RegisterSchema);