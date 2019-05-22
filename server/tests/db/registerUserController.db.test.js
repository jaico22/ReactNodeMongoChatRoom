const { userRegistrationDb } = require('../../db')
const UserModel = require('../../db/models/users.schema')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/react_chat')

// Insert into database
var username = 'test1'
var password = 'testpw'
var testOutput =  userRegistrationDb.userRegistrationDb(username,password)

// Wait 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function verify() {
    await sleep(500)
    console.log(username)
    let query = UserModel.find({username: username, password: password})
    query.select('username password')
    query.exec( (err, userReturn) => {
        if (err) return handleError(err);
        console.log(userReturn)
    })
}

// Verify 
verify(username, password, UserModel)
