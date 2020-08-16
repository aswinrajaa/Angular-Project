const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('./database/mongoose');

app.use(express.json());

const Post = require('./database/models/post');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/posts', (req, res) => {
    Post.find({})
        .then(posts => res.send(posts))
        .catch((error) => console.log(error));
});

app.get('/posts/:postId', (req, res) => {
    Post.find({ _id: req.params.postId })
        .then(posts => res.send(posts))
        .catch((error) => console.log(error));
});

app.patch('/posts/:postId', (req, res) => {
    Post.findOneAndUpdate({ '_id': req.params.postId }, { $set: req.body})
        .then(posts => res.send(posts))
        .catch((error) => console.log(error));
});

app.post('/posts', (req, res) => {
    new Post ({ 'title': req.body.title, 'description': req.body.description})
        .save()
        .then((post) => res.send(post))
        .catch((error) => console.log(error));
});

app.delete('/posts/:postId', (req, res) => {
    Post.findByIdAndDelete({ '_id': req.params.postId }, { $set: req.body})
        .then((post) => res.send(post))
        .catch((error) => console.log(error));
});

app.listen(port, () => {
    console.log("Server connected!\nPort: "+port);
});