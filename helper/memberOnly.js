const jwt = require('jsonwebtoken');

function isMember(post,req,res,next) {

    const token = req.headers.cookie.split('=')[1];

    jwt.verify(token,'jwtSecurityKey',(err,user) => {

        // check if there is any error

        if(err) return res.status(401).json({message: 'Unauthorized'});

        // get data to make the condition

        const userMember = user.isMember;
        const postType = post.member;

        // check if the use is member or not

        if(postType == true && userMember == false) return res.json({message: 'You are not a Member to Read this Article'}) 

        // if the user member he can read the article

        res.send('Post')

        next();
    });

}

module.exports = isMember