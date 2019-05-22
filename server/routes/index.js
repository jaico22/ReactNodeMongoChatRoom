const express = require('express')
const {registerNewUser} = require('../controllers')
const router = express.Router()

router.post('/registerUser', registerNewUser.registerNewUser)

module.exports = router