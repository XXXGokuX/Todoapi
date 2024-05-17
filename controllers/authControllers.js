
const {signInModel,signUpModel} = require("../models/authModels.js")
const {hashPassword,verifyPassword}= require("../config/hashing.js")
const {validationResult}= require('express-validator')
const {genrateToken}= require("../config/jsonToken.js")

const signin= async (req,resp)=>{
    const result =validationResult(req)
    const {email,password}= req.body

    if(result.errors.length > 0)
    return resp.status(401).json({errors: result.errors,message:"BAD CREDENTAILS"})
    
    
    const exists= await signUpModel.findOne({ email })

    console.log(exists)
    if(!exists)
    return resp.status(401).json({message:"Invalid Email"})

    const isMatch= await verifyPassword(password,exists.password)

    if(!isMatch)
    return resp.status(401).json({message: "Invalid Password"})

    
    const token= await genrateToken({id:exists._id,email:exists.email})
    resp.status(200).json({token})
}


const signup= async (req,resp)=>{

    const {username,email,password}= req.body

    const exists= await signUpModel.findOne({ email })

    if(exists)
    resp.status(409).json({message: 'User alredy exists'})

    const encodedPassword= await hashPassword(password)

    try
    {
        const user= await new signUpModel({
            username,
            email,
            password: encodedPassword
        })

        const data= await user.save()

        resp.status(200).json({user: {username,email,id:data._id},message: "User Created"})
    }
    catch(err)
    {
        console.log("User Not Created")
        console.log(err.message)
        resp.status(404).json({meassge:"User not created"})
    }
    

}


module.exports= {signin,signup}