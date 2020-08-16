const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        minlength: 5
    },
    image:{
        type: String
    }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;