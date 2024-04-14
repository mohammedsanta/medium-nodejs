const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
});

userSchema.pre('save',function (next) {

    if(this.isNew) {

        // hashing password
        bcrypt.hash(this.password,10,(err,hashedPassword) => {

            // replace clean text to hashed
            this.password = hashedPassword;

            // next
            next()
        })

    } else {
        next()
    }


})


const userModel = mongoose.model('Users',userSchema);


module.exports = userModel;