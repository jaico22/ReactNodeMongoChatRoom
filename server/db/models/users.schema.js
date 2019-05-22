const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type : String, default: ''},
    password: { type : String, default: ''},
});

UserSchema.pre('save', function(next){
    next();
})
module.exports = mongoose.model('Users', UserSchema);