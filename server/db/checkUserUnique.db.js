const UserModel = require('./models/users.schema')

/**
 * Uniquness Check 
 * 
 * Runs check if another user is already registered with a given username and 
 * password
 * 
 * @param {string} username 
 * @param {function} successCallback 
 * @param {function} errorCallback 
 */
function _checkIfUserUnique(username,successCallback,errorCallback){
    console.log('Checking if user exists..')
    UserModel.find({username: username},(err, matchingUser)=>{
        if (err) handleError(err)
        console.log(matchingUser.length)
        if (matchingUser.length==0){
            successCallback(true)
        }else{
            errorCallback(false)
        }
    })    
}

/**
 * Asynchronous wrapper for Uniquness check
 * 
 * @param {string} username 
 */
function checkIfUserUnique(username){
    return new Promise((resolve, reject) => {
        _checkIfUserUnique(username,(successResponse) => {
            console.log('Sucess')
            resolve(successResponse);
        }, (errorResponse) => {
            console.log('Fail')
            reject(errorResponse)
        });
    });
}

module.exports = {
    checkIfUserUnique
}