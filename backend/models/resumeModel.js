const mongoose = require('mongoose')

const Schema = mongoose.Schema

const resumeSchema = new Schema({
    name:{
        type:String,
        required:true
    }


},{timestamps:true});

module.export = mongoose.model('Resume',resumeSchema)