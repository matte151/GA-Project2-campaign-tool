const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const abilitySchema = new Schema({
    name: String,
    primaryOrb:{type: Schema.Types.ObjectId, ref: 'Orb', required: true},
    primaryStat: {type: String, enum:['empower','knowledge','utility','quickness','body']},
    secondaryOrbs:[{type: Schema.Types.ObjectId, ref: 'Orb',}],
    secondaryStat: [{type: String, enum:['empower','knowledge','utility','quickness','body']}],
    range: String,
    cost: Number,
    type:{type: String, enum:['PP','BP'], default: 'PP'}, //stretch make this section only show up if they have blood magic, otherwise have it default to PP.
    areaOfEffect: String,
    damageCalc: Function,
    notes: String,
    }, {
    timestamps: true
});

module.exports = mongoose.model('Ability', abilitySchema)