const mongoose = require ('mongoose');

const UserSchema = mongoose.Schema({
    email:String,
    motdepasse:String,
},{
    timestamps:true
})
module.exports = mongoose.model('User',UserSchema);