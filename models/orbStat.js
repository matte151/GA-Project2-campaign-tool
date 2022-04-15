const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const orbSchema = new Schema({
    name: {type: Schema.Types.ObjectId, ref: 'Orb'},
    empower: Number,
    knowledge: Number,
    utility: Number,
    quickness: Number,
    body: Number,
    }, {
    timestamps: true
});


module.exports = mongoose.model('OrbStat', orbSchema)