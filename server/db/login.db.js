const UserModel = require('./models/users.schema')

/**
 * 
 * @param {string} username 
 * @param {string} password 
 * @param {function} callback 
 */
function _loginDb(username, password,callback){
    UserModel.find({username: username, password: password}, (err, matchingUser)=>{
        // Debug
        console.log('Entering login...')
        console.log(username)
        console.log(password)
        console.log(matchingUser.length)
        if (err) handleError(err)
        // If match found return 1
        if (matchingUser.length==0){
            callback(false)
        }else{
            callback(true)
        }
    })
}

function loginDb(username,password){
    return new Promise((resolve) => {
        _loginDb(username,password,(response) => {
            console.log('Login Callback: ' + response)
            resolve(response)
        })
    })
}

module.exports = {
    loginDb
}