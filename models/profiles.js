const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId, auth: 'Users' },
    username: String,
    about: String,
    picture: String,
})

const profileModel = mongoose.model(profileSchema,'profile');

module.exports = profileModel