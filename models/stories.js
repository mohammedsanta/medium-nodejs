const mongoose = require('mongoose');

const storiesSchema = new mongoose.Schema({
    auth: { type: mongoose.Schema.ObjectId, ref: 'Users' },
    title: String,
    tags: String,
});

const storiesModel = mongoose.model(storiesSchema,'Stories');

module.exports = storiesModel