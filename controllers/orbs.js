const Orb = require('../models/orb')

module.exports = {
    index,
    // show,
    // new: newOrb,
    // create,
    // delete: deleteOrb,
}

function index(req, res){
    // Actor.find({}, function(err, actors){  find the specific actor (once they're loaded) and then find THIER orbs.
        // if(err) return handleErr(err);
        res.render('orbs/index',{title: 'Orbs controller sent me here!'})
    // })
}





function handleErr(err) {
    console.log(err, '<---- Thar be yer error matey! Love, Orbs Controller')
}