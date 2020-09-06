const mongoose = require('mongoose');
//Login Schema - Model for Post!
const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        minlength: 5
    }
});

const Login = mongoose.model('Login', loginSchema);
module.exports = Login;