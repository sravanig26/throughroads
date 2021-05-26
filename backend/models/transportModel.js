const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tranSchema = new Schema({
    busno:{
        type: String, 
        required:true
    },
    busregd:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    dest:{
        type:String,
        required:true
    },
    sourceTime:{
        type:String,
        required:true
    },
    destTime:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    transportType:{
        type:String,
        required:true
    },
    stopsOne:{
        type:String,
        required:true
    },
    stopsTwo:{
        type:String,
        required:true
    },
    stopsThree:{
        type:String,
        required:true
    },
    stopsFour:{
        type:String,
        required:true
    },
    stopsFive:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    }
   
},{ timestamps:true,}
);

const TransportAdd = mongoose.model('Transport',tranSchema);
module.exports = TransportAdd;