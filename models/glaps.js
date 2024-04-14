const mongoose = require('mongoose');

const glapSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.ObjectId, auth: 'Users' },
    story: { type: mongoose.Schema.ObjectId, auth: 'Stories' },
    glap: Number,
})

const glapModel = mongoose.model(glapSchema,'glaps')

module.exports = glapModel