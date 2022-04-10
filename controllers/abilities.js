const Ability = require('../models/ability')

module.exports = {
    index,
    // show,
    // new: newAbility,
    // create,
    // delete: deleteAbility,
}

function index(req, res){
    // Actor.find({}, function(err, actors){  need something to pull in only the abilities of the specific actor that sent to this page, and list those.
        // if(err) return handleErr(err);
        res.render('abilities/index',{title: 'Abilities controller sent me here!'})
    // })
}





function handleErr(err) {
    console.log(err, '<---- Thar be yer error matey! Love, Abilities Controller')
}