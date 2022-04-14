const User = require('../models/user')

module.exports = {
    index,
    update,
    delete: deleteUser,
}

function index(req, res){
    User.find({}, function(err, users){ 
        if(err) return handleErr(err);
        res.render('users/index',{users, title: 'Users controller sent me here!'})
    })
}

async function update(req, res){
    try {
        console.log(req.params.id,"<<<params^^^",req.body,"<<<body^^^")
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
        console.log(updateUser)
        res.redirect(`/users`)
    } catch (err) {
        res.send(err)
    }
}
async function deleteUser(req, res) {
    try {
        const removedUser= await User.findByIdAndRemove(req.params.id);
        res.redirect('/users');
        console.log(removedUser);
    } catch (err) {
        res.send(err);
    }
}




function handleErr(err) {
    console.log(err, '<---- Thar be yer error matey! Love, Users Controller')
}