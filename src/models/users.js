const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    created_At:{
        type:Date,
        default:Date.now()
    },
    updated_At:{
        type:Date,
        default:Date.now()
    }
});

const user = mongoose.model('users',userSchema);
module.exports = user;
