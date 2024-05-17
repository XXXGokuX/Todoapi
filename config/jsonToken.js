var jwt = require('jsonwebtoken');
const JWT_KEY= process.env.JWT_SECRET_KEY


const genrateToken= async (value)=>{
    const token= await jwt.sign(value,JWT_KEY)
    return token;
}

const verifyToken= async (token)=>{
   try
   {
    const decoded= await jwt.verify(token,JWT_KEY)
    return decoded
   }
   catch(err)
   {
    console.log("INAVLID TOKEN")
    console.log(err.message)
   }
}

module.exports ={genrateToken,verifyToken}