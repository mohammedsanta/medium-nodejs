const express = require('express');
const userModel = require('../models/users');

const Route = express.Router();

Route.post('/register',(req,res) => {

    const data = req.body;

    const createUser = userModel.create({
        username: data.username,
        password: data.password,
        email: data.email,
    })

    console.log(data)

    res.send('work')

});



module.exports = Route