const mongoose = require ('mongoose');

const UserSchema = mongoose.Schema({
    nom:String,
    prenom:String,
    email:String,
    userName:String,
    motdepasse:String,
    role:{type:String, default: 'user'},
},{
    timestamps:true
})
module.exports = mongoose.model('User',UserSchema);