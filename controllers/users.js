const User = require('../models/user')

module.exports = {
    index,
    // show,
    // new: newOrb,
    // create,
    // delete: deleteOrb,
}

function index(req, res){
    User.find({}, function(err, users){ 
        if(err) return handleErr(err);
        res.render('users/index',{users, title: 'Users controller sent me here!'})
    })
}





function handleErr(err) {
    console.log(err, '<---- Thar be yer error matey! Love, Users Controller')
}