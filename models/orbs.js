const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const orbSchema = new Schema({
    name: String,
    relatedOrbs: [{}],
    class: String,
    
    }, {
    timestamps: true
});


module.exports = mongoose.model('Orb', orbSchema)