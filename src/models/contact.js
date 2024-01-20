const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name : { 
        type:String,
        required:true,
    },
    email : { 
        type:String,
        required:true,
        unique:true,
    },
    password : { 
        type:String,
        required:true,
    },
    phoneNumber : { 
        type:String,
        required:true,
    },
    role : { 
        type:String,
        required:true,
        default:"PERSONAL"
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

const contact = mongoose.model('contacts',contactSchema);
module.exports = contact;