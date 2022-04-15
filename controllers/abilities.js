const Ability = require('../models/ability')
const Orb = require('../models/orb')
const Actor = require('../models/actor')
const OrbStat = require('../models/orbStat')


module.exports = {
    index,
    show,
    new: newAbility,
    create,
    delete: deleteAbility,
    update,
}


function index(req, res){
    Ability.find({}, function(err, abilities){
        if(err) return handleErr(err);
        res.render('abilities/index',{abilities, title: 'Abilities'})
    })
}

async function show(req,res){
    try {
        const ability = await Ability.findById(req.params.id);
        res.render('abilities/show', {ability, title:'Ability Details'})
    } catch (err){
        res.send(err);
    }
}

async function newAbility(req,res) {
    try {
        const actors = await Actor.find({});
        const orbs = await Orb.find({});
        res.render('abilities/new', {orbs, actors, title:'New Ability'})
    } catch (err) {
        res.send(err);
    }
}

async function create(req,res){
    try {
        console.log(req.body)
        const createdAbility = await Ability.create(req.body);
        console.log(createdAbility)
        res.redirect('/abilities')
    } catch (err) {
        res.send(err);
    }
}
async function update(req, res){
    try {
        console.log(req.params.id,"<<<params^^^",req.body,"<<<body^^^")
        const updateAbility = await Ability.findByIdAndUpdate(req.params.id, req.body, {new:true})
        console.log(updateAbility)
        res.redirect(`/abilities/${req.params.id}`)
    } catch (err) {
        res.send(err)
    }
}

async function deleteAbility(req, res) {
    try {
        const removedAbility= await Ability.findByIdAndRemove(req.params.id);
        res.redirect('/abilities');
        console.log(removedAbility);
    } catch (err) {
        res.send(err);
    }
}





function handleErr(err) {
    console.log(err, '<---- Thar be yer error matey! Love, Abilities Controller')
}