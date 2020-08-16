var express = require('express');
var routes = express.Router();

const mongoose = require('../database/mongoose');

const Post = require('../database/models/post');

//Get all Posts
routes.get('/api/posts', (req, res) => {
    Post.find({})
        .then(posts => res.send(posts))
        .catch((error) => console.log(error));
});

//Create a Post
routes.post('/api/posts', (req, res) => {
    new Post ({ 'title': req.body.title, 'description': req.body.description})
        .save()
        .then((post) => res.send(post))
        .catch((error) => console.log(error));
});

//Delete a Post
routes.delete('/api/posts/:postId', (req, res) => {
    Post.findByIdAndDelete({ '_id': req.params.postId }, { $set: req.body})
        .then((post) => res.send(post))
        .catch((error) => console.log(error));
});

//Get specific Post: Not Implemented!
routes.get('api/posts/:postId', (req, res) => {
    Post.find({ _id: req.params.postId })
        .then(posts => res.send(posts))
        .catch((error) => console.log(error));
});

//Edit specific Post: Not Implemented!
routes.patch('/api/posts/:postId', (req, res) => {
    Post.findOneAndUpdate({ '_id': req.params.postId }, { $set: req.body})
        .then(posts => res.send(posts))
        .catch((error) => console.log(error));
});

module.exports = routes;