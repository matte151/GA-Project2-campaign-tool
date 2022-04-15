const Actor = require('../models/actor')
const OrbStat = require('../models/orbStat')
const Ability = require('../models/ability')
const Orb = require('../models/orb')

module.exports = {
    index,
    show,
    new: newActor,
    create,
    update,
    delete: deleteActor,
    addOrb,
    addOrbStats,
}

function index(req, res){
    Actor.find({}, function(err, actors){
        if(err) return handleErr(err);
        res.render('actors/index',{actors, title: 'Actors'})
    })
}

async function show(req,res){
    try {
        Actor.findById(req.params.id).populate('orbStats').populate('abilities').populate('orbs').exec(function(err, actor){
            Orb.find( {_id: {$nin: actor.orbs}}, function(err, freeOrbs){
                res.render('actors/show', {actor, freeOrbs, title:'Actor Details'})
            })
            
        });

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
        res.send(err);
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
function addOrb(req, res) {
    Actor.findById(req.params.id, function(err, actor){
        // console.log(req.body.orbId,"<----- this is the body ID you're looking for")
        actor.orbs.push(req.body.orbId);
        actor.save(function(err) {
            res.redirect(`/actors/${actor._id}`)
        })
    })
}

function addOrbStats(req, res) {
    Actor.findById(req.params.id, function(err, actor){
        // console.log(req.body.orbId,"<----- this is the body ID you're looking for")
        actor.orbStats.push(req.body.orbStatId);
        actor.save(function(err) {
            res.redirect(`/actors/${actor._id}`)
        })
    })
}

// async function addOrbStats(req, res) {
//     try {
//         console.log(req.params.id)
//         const foundActor = Actor.findByIdAndUpdate(req.params.id,
//             {$push: {"orbStats": req.body}},
//             {upsert: true, new : true},
//             function(err, actor){
//                 console.log(foundActor)
//                 res.redirect(`/actors/${actor.req.params.id}`)
//             }
//         )
//         // BOTH THE ABOVE AND THE BELOW HAVE FAILED... No clue why...  Below seems to return an object, but then doesn't update properly when it pushes... above seems to query a huge amount.
//         // const newOrbStat = await OrbStat.create(req.body)
//         // console.log(newOrbStat,"<-----newOrbStat")
//         // const updatedActor = await actor.findByIdAndUpdate().orbStats.push(newOrbStat._id)
//         // console.log(updatedActor,"<--------updatedActor")
//         // updatedActor.save(function(err){
//         //     console.log(updatedActor,"<--------updatedActor after save?")
//         //     res.redirect(`/actors/${actor._id}`)
//         // })
//     }catch (err) {
//         res.send(err);
//     }
// }

function handleErr(err) {
    console.log(err, '<---- Thar be yer error matey! Love, Actors Controller')
}