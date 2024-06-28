var mongoose = require('mongoose');
const { Schema } = mongoose;
//Table Schema
const UsersSchema = new Schema({
    uname:String,
    Umobile:Number,
    uemail:String,
    upassword:String
})
//Schema Export as model
var userModel = mongoose.model("user",UsersSchema);

module.exports = userModel;