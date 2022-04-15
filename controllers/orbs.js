const Orb = require('../models/orb')
const Actor = require('../models/actor')


module.exports = {
    index,
    show,
    new: newActor,
    create,
    update,
    delete: deleteActor,
    // addToActor,
}

async function index(req, res){
    try {
        const orbs = await Orb.find({})
        res.render('orbs/index',{orbs, title: 'Orbs List!'})
    } catch (err){
        res.send(err);
    }
}

async function show(req,res){
    try {
        const orb = await Orb.findById(req.params.id);
        res.render('orbs/show', {orb, title:'Orb Details'})
    } catch (err){
        res.send(err);
    }
}

function newActor(req,res) {
    res.render('orbs/new',{title:'New Orb'})
}

async function create(req,res){
    try {
        console.log(req.body)
        const createdActor = await Orb.create(req.body);
        console.log(createdActor)
        res.redirect('/orbs')
    } catch (err) {
        next (err);
    }
}
async function update(req, res){
    try {
        console.log(req.params.id,"<<<params^^^",req.body,"<<<body^^^")
        const updateActor = await Orb.findByIdAndUpdate(req.params.id, req.body, {new:true})
        console.log(updateActor)
        res.redirect(`/orbs/${req.params.id}`)
    } catch (err) {
        res.send(err)
    }
}
async function deleteActor(req, res) {
    try {
        const removedActor= await Orb.findByIdAndRemove(req.params.id);
        res.redirect('/orbs');
        console.log(removedActor);
    } catch (err) {
        res.send(err);
    }
}
// function addToActor(req, res) {
//     Actor.findById(req.params.id, function(err, actor){
//         actor.orbs.push(req.body.orbId);
//         actor.save(function(err) {
//             res.redirect(`/actors/${actor._id}`)
//         })
//     })
// }


function handleErr(err) {
    console.log(err, '<---- Thar be yer error matey! Love, Orbs Controller')
}