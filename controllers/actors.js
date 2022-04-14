const Actor = require('../models/actor')

module.exports = {
    index,
    show,
    new: newActor,
    create,
    update,
    delete: deleteActor,
}

function index(req, res){
    Actor.find({}, function(err, actors){
        if(err) return handleErr(err);
        res.render('actors/index',{actors, title: 'Actors'})
    })
}

async function show(req,res){
    try {
        const actor = await Actor.findById(req.params.id);
        res.render('actors/show', {actor, title:'Actor Details'})
    } catch (err){
        res.send(err);
    }
}

function newActor(req,res) {
    res.render('actors/new',{title:'New Actor'})
}

async function create(req,res){
    try {
        console.log(req.body)
        const createdActor = await Actor.create(req.body);
        console.log(createdActor)
        res.redirect('/actors')
    } catch (err) {
        next (err);
    }
}

async function update(req, res){
    try {
        console.log(req.params.id,"<<<params^^^",req.body,"<<<body^^^")
        const updateActor = await Actor.findByIdAndUpdate(req.params.id, req.body, {new:true})
        console.log(updateActor)
        res.redirect(`/actors/${req.params.id}`)
    } catch (err) {
        res.send(err)
    }
}

async function deleteActor(req, res) {
    try {
        const removedActor= await Actor.findByIdAndRemove(req.params.id);
        res.redirect('/actors');
        console.log(removedActor);
    } catch (err) {
        res.send(err);
    }
}

function handleErr(err) {
    console.log(err, '<---- Thar be yer error matey! Love, Actors Controller')
}