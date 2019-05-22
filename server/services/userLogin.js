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
function userLogin(username, password){
    // Doesn't do a whole lot... 
    let loginSuccess = loginDb.loginDb(username,password)
    return loginSuccess
}