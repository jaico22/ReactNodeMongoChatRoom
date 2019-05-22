const UserModel = require('./models/users.schema')

/**
 * User Registration Databse Functionality.
 * 
 * Handles database interactions for user registration
 * 
 * @param {string} username 
 * @param {string} password 
 * @param {function} successCallback 
 * @param {function} errorCallback 
 */
function _userRegistrationDb(username, password, successCallback, errorCallback){
    let newUser = new UserModel({username: username, password: password});
    console.log("User registration db logic called");
    console.log("Attempting to register user")
    newUser.save((err, saved) => {
        if (err) {
            console.log('failed')
            errorCallback(false)
        }else {
            console.log('user registerd')
        }
    })
    successCallback(true) 
}
/**
 * Wrapper for User Registration Database Functionality.
 * 
 * @param {string} username 
 * @param {string} password 
 */
function userRegistrationDb(username,password) {
    return new Promise((resolve, reject) => {
        _userRegistrationDb(username, password, (successResponce) => {
            resolve(successResponce);
        }, (errorResponce) => {
            reject (errorResponce)
        })
    })
}


module.exports = {
    userRegistrationDb
}