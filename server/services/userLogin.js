const {loginDb} = require('../db')
/**
 * User Login.
 * 
 * Handles buisness logic for user login. Doesn't do a whole lot right now 
 * except check if username and password match. Might handle encryption later, 
 * but given that this is mostly experimental, that is not high priority
 * 
 * @param {string} username 
 * @param {string} password 
 */
async function userLogin(username, password){
    // Doesn't do a whole lot... 
    var loginSuccess = false
    try {
        loginSuccess = await loginDb.loginDb(username,password)
    } catch(e) {
        console.log(e.message)
        console.log('idk...')
    }
    return loginSuccess
}

module.exports ={
    userLogin
}