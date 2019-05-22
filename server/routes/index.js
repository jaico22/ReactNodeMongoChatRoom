const express = require('express')
const {registerNewUser, userLoginCntrl} = require('../controllers')
const router = express.Router()

router.post('/registerUser', registerNewUser.registerNewUser)
router.post('/userLogin', userLoginCntrl.userLoginCntrl)

module.exports = router