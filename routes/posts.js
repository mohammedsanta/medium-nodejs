const express = require('express');
const Route = express.Router();

Route.get('',(req,res) => {

    res.send('Post')

});

Route.post('/comment',(req,res) => {

    res.send('make comment')

})

Route.post('/clap',(req,res) => {

    res.send('make clap to the post')

})

module.exports = Route;