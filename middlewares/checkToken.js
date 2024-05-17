
const {verifyToken}= require('../config/jsonToken')


const checkToken= async (req,resp,next)=>{

    const token= req.headers.authorization
    
    const isValid= await verifyToken(token)
    
    if(!isValid)
    return resp.status(401).json({message: 'Invalid API TOKEN'})    

    console.log(isValid)
    req.id= isValid.id
    next()
    
}


module.exports = checkToken