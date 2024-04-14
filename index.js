const express = require('express');
const app = express();
const mongoose = require('mongoose')
const postsRoute = require('./routes/posts')
const authRoute = require('./routes/auth')

// Start Connect to Mongo DB

mongoose.connect('mongodb://127.0.0.1:27017/meduim')
.then()
.catch((err) => {
    console.log(err)
})

// End

app.use(express.json())

// Home

app.get('/',(req,res) => {

    res.send('return list of articels')

});

// User

app.get('/user',(req,res) => {

    res.send('return articles and books and about user')

})

// Routes

app.use('/auth',authRoute);
app.use('/post',postsRoute)

// Start server

app.listen(3000,() => {
    console.log('app is running')
});