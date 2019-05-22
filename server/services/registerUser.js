const {userRegistrationDb, checkIfUserUnique} = require('../db')


/**
 * User Registration Logic.
 * 
 * Handles business logic for user registration.
 * First, function will verify uniquness of username
 * If user name is unique, user will be registered
 * 
 * @param {string} userName 
 * @param {string} password 
 */
async function registerUser(userName, password){
    try {
        // Check if user already exists
        try {
            // Check if user is unique
            let userExists = await checkIfUserUnique.checkIfUserUnique(userName);
            // Upon verifying uniquness, register user
            return userRegistrationDb.userRegistrationDb(userName, password);
        }catch(e){
            console.log('User already exists')
            console.log(e.message)
            return false
        }
    }catch(e) {
        throw new Error(e.message); 
    }
}

module.exports = {
    registerUser
}