const mongoose = require('mongoose')

const followSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId, auth: 'Users' },
    follow: { type: mongoose.Schema.ObjectId, auth: 'Users' }
})

const followModel = mongoose.model('follows',followSchema);

module.exports = followModel;