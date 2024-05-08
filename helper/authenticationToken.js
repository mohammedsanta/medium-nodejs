const jwt = require('jsonwebtoken')

// implementation to make authentication by json web token library

function authenticateToken(req,res,next) {

    const data = req.headers.cookie.split('=');
    const token = data[1];

    if(token == null) return res.status(401).json({message: 'Unauthorized'});

    jwt.verify(token,'jwtSecurityKey',(err,user) => {

        if(err) return res.status(403).json({message: 'Forbidden'})

        req.user = user

        console.log(req.user)

    })

    next();

}

module.exports = authenticateToken;