const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: { 
        type:String,
        required:true 
    },
    number: { type:Number,required:true,minlength:10},
    email: { type:String,required:true,unique:true},
    pass: { type:String,required:true},
    date:{
        type: Date,
        default:Date.now
    }
   
},{ timestamps:true,}
);

const User = mongoose.model('User',userSchema);
module.exports = User;