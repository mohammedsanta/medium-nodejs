const express = require('express');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../helper/authenticationToken');
const isMember = require('../helper/memberOnly');
const Route = express.Router();

// Posts For examble 

const posts = [
    {
        title: "Algorithms",
        content: "",
        member: false,
    },
    {
        title: "Algorithms Advanced",
        content: "",
        member: true,
    }
]

// 

Route.get('/:id',(req,res,next) => {

    // get post to pass it to the function

    const post = posts[req.params.id];

    // funciton to check if the user can read the article or not

    isMember(post,req,res,next);

});


// end point for testing 

Route.get('/check',isMember,(req,res) => {

    console.log('request done')
    res.send('user')

})

// to write a comment

Route.post('/comment',(req,res) => {

    res.send('make comment')

})

// end point for make clap for the article

Route.post('/clap',(req,res) => {

    res.send('make clap to the post')

})

module.exports = Route;