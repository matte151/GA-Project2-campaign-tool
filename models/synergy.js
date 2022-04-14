const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const synergySchema = new Schema({
    orb1: {type: Schema.Types.ObjectId, ref: 'Orb'},
    orb2: {type: Schema.Types.ObjectId, ref: 'Orb'},
    synergyLevel: Number,
    }, {
    timestamps: true
});


module.exports = mongoose.model('Synergy', synergySchema)