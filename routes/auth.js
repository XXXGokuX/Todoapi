const express = require('express')
const {signin,signup}= require("../controllers/authControllers.js")
const router= express.Router()
const {body}= require('express-validator')

//Create New User
router.post('/signup',signup)

//Login User
router.post('/signin',
body('email').isEmail().withMessage("Email cannot be empty"),
body('password').isString().withMessage("Password must be string").notEmpty().withMessage("Password cannot be empty")
,signin)


module.exports= router