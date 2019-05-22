const {registerUser} = require('../../services')
const UserModel = require('../../db/models/users.schema')
const mongoose = require('mongoose')
const {sleep} = require('../../utils/helpers')
mongoose.connect('mongodb://localhost/react_chat')

// aysnc registration wrapper
async function registrationWrapper(username,password){
    await registerUser.registerUser(username,password);
}

var username = 'test4578'
var password = 'pwwww1';

(async() => { 
    // Clear database
    console.log('Clearing database')
    await UserModel.deleteMany({}, function(err){
        if (err) return handleError(err)
        console.log('Database cleared')
    })
    // Register initial
    console.log('Test: Registering user1')
    await registrationWrapper(username, password)
    await sleep(50)
    // Verify that duplicates cannot be written
    console.log('Trying to re-register')
    await registrationWrapper(username, password)
})();


