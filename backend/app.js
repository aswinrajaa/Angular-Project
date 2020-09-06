const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('./database/mongoose');

const route = require('./Routes/Routes');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//API Routes
app.get('/api/posts', route);

app.get('/api/posts/:postId', route);

app.patch('/api/posts/:postId', route);

app.post('/api/posts', route);

app.delete('/api/posts/:postId', route);

app.delete('/api/posts/delete', route);

app.post('/api/login',route);

app.listen(port, () => {
    console.log("Server connected!\nPort: "+port);
});