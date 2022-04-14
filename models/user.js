const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId:{type: String, required: true},
    email: String,
    userLevel: {type: String, enum: ['Player','DM','Super']},
    }, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)