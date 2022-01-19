const express = require('express')
const router = express.Router()

//import validators
const {userRegisterValidator,userLoginValidator} = require('../validators/auth')
const {runsValidation} = require('../validators/index')

//import controllers
const {register,registerActivate,login} = require('../controllers/authController')


router.post("/register",userRegisterValidator,runsValidation,register)
router.post("/register/activate",registerActivate)

router.post("/login",userLoginValidator,runsValidation,login)

module.exports = router