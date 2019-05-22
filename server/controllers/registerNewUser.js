const { registerUser } = require('../services')
/**
 * Controller for user registration
 * 
 * Controlls API for user registration
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const registerNewUser = async (req, res, next) => {
    const {username, password} = req.body
    console.log('registration entered')
    try {
        const status = await registerUser.registerUser(username, password);
        res.json({errorState: status})
        next()
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

module.exports = {
    registerNewUser
}