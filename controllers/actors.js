const Actor = require('../models/actor')

module.exports = {
    index,
    show,
    new: newActor,
    create,
    // delete: deleteActor,
}

function index(req, res){
    Actor.find({}, function(err, actors){
        if(err) return handleErr(err);
        res.render('actors/index',{actors, title: 'Actors List!'})
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



function handleErr(err) {
    console.log(err, '<---- Thar be yer error matey! Love, Actors Controller')
}