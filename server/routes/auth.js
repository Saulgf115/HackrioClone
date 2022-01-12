const express = require('express')
const router = express.Router()

//import validators
const {userRegisterValidator} = require('../validators/auth')
const {runsValidation} = require('../validators/index')

//import controllers
const {register} = require('../controllers/authController')


router.post("/register",userRegisterValidator,runsValidation,register)

module.exports = router