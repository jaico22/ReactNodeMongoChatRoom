const UserModel = require('./models/users.schema')

function loginDb(username, password){
    UserModel.find({username: username, password: password}, (err, matchingUser)=>{
        if (err) handleError(err)
        // If match found return 1
        if (matchingUser.length==0) return 1
        else return 0
    })
}

module.exports = {
    loginDb
}