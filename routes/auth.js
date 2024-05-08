const express = require('express');
const jwt = require('jsonwebtoken')
const userModel = require('../models/users');

const Route = express.Router();

const jwtKey = 'jwtSecurityKey';

Route.post('/register',(req,res) => {

    const data = req.body;

    const createUser = userModel.create({
        username: data.username,
        password: data.password,
        email: data.email,
    })

    const token = jwt.sign(data,jwtKey);
    
    res.cookie('token',token,{ httpOnly: true})
    
    res.send(token)
    
    console.log(req.headers.cookie)
});



module.exports = Route