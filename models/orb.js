const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const orbSchema = new Schema({
    name: String,
    class: {type: String, enum:['Primary','Sub']},
    dimension: {type: String, enum:['Elemental','Fabric','Manipulation','Theoretical','Overall','Other']}
    }, {
    timestamps: true
});


module.exports = mongoose.model('Orb', orbSchema)