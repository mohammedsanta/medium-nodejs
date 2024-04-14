const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.ObjectId, auth: 'Users' },
    comment: String,
    data: Date,
})

const commentModel = mongoose.model(commentSchema,'Comment');

module.exports = commentModel;