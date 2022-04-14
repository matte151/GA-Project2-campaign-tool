const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actorSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    class: {type: String, required: true, enum:['Player','NPC','Monster']},
    abilities: [{type: Schema.Types.ObjectId, ref: 'Ability'}],
    items: String, //later make this a new model
    orbs:[{type: Schema.Types.ObjectId, ref: 'Orb'}],
        // Make a stats table that belongs to actors? Not sure, it may be a populate nightmare...
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number,
    balisticSkill: Number,
    weaponSkill: Number,
    fortitude: Number,
    reflex: Number,
    will: Number,
    evasion: Number,
    missChance: Number,
    maxWounds: Number,
    currentWounds: Number,
    toughness: Number,
    armor: Number,
    overshieldT: Number,
    overshieldMaxHp: Number,
    overshieldCurrentHp: Number,
    overshieldNote: String,
    regen: Number,
    injuries: String,
    maxPP: Number,
    currentPP: Number,
    maxBP: Number,
    currentBP: Number,
    haste: Number,
    level: Number,
    notesDM: String,
    notesPlayer: String,
})

module.exports = mongoose.model('Actor', actorSchema)