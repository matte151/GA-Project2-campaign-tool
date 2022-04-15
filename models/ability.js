const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const abilitySchema = new Schema({
    name: String,
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    primaryOrb:{type: Schema.Types.ObjectId, ref: 'Orb', required: true},
    primaryStat: {type: String, enum:['empower','knowledge','utility','quickness','body']},
    secondaryOrbs:[{type: Schema.Types.ObjectId, ref: 'Orb',}],
    secondaryStat: [{type: String, enum:['empower','knowledge','utility','quickness','body']}],
    effectivePowerLevel: Number,    
    abilityLevel: Number,
    range: String,
    cost: Number,
    type:{type: String, enum:['PP','BP'], default: 'PP'}, //stretch make this section only show up if they have blood magic, otherwise have it default to PP.
    areaOfEffect: String,
    damageScalingOrb: Number,
    damageScalingLevel: Number,
    damageScalingMin: Number,
    damageScalingMax: Number,
    damageFlatBonus:Number,
    penetrationArmor: Number,
    penetrationOS: Number,
    saveDCBase: Number,
    saveDCScalingOrb: Number,
    saveDCSclaingLevel: Number,
    critMultiplier: Number,
    notes: String,
    }, {
    timestamps: true
});


//https://mongoosejs.com/docs/guide.html search "Instance Methods"  Maybe try out a virtual method as well??? LOOOKS COOOOOOL
abilitySchema.methods.damageCalc = function(){
    const min = damageScalingMin*damageScalingOrb*effectivePowerLevel+damageScalingMin*damageScalingLevel*abilityLevel;
    const max = damageScalingMax*damageScalingOrb*effectivePowerLevel+damageScalingMax*damageScalingLevel*abilityLevel;
    const flat = damageFlatBonus
    const damage = (Math.floor(Math.random()*(max-min+1)+min + flat))
    saveDC = (Math.floor(saveDCBase + saveDCScalingOrb*effectivePowerLevel+saveDCSclaingLevel*abilityLevel))
    return {damage, penetrationOS, penetrationArmor, critMultiplier, saveDC}
}


module.exports = mongoose.model('Ability', abilitySchema)