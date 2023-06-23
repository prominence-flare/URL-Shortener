const mongoose= require("mongoose");

const urlSchema= new mongoose.Schema({
    short:{
        type:String,
        require:true,
        unique:true,
    },
    originalUrl:{
        type:String,
        require:true
    },
    history:[{timestamp:{type: Number}}],

},{timestamps:true});

const URL=mongoose.model('url',urlSchema)

module.exports=URL;
