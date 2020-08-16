const mongoose = require('mongoose');
//Post Schema - Model for Post!
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        minlength: 5
    }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;