const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const login = new Schema({
    email: {
        type: String,
        required: true 
    },
    password:{
        type: String,
        required: true
    }
}, { timestamps: true});

const Login = mongoose.model('Information', login);
module.exports = Login; 