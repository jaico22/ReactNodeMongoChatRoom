const {userLogin} = require('../services')

const userLoginCntrl = async (req, res, next) => {
    const {username, password} = req.body
    console.log('login entered')
    try {
        const status = await userLogin.userLogin(username, password);
        console.log('Login API responce received')
        console.log(status)
        res.json({loginState: status})
        next()
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500) && next()
    }
}

module.exports = {
    userLoginCntrl
}