const Actor = require('../models/actor')

module.exports = {
    index,
    // show,
    // new: newActor,
    // create,
    // delete: deleteActor,
}

function index(req, res){
    Actor.find({}, function(err, actors){
        if(err) return handleErr(err);
        res.render('actors/index',{actors, title: 'Actors controller sent me here!'})
    })
}





function handleErr(err) {
    console.log(err, '<---- Thar be yer error matey! Love, Actors Controller')
}