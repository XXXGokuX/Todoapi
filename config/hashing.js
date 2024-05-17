
const bcrypt= require("bcrypt")


const hashPassword= async (password)=>{
   
    try
    {
        const hashedPassword= await bcrypt.hash(password,10)
        return hashedPassword
    }
    catch(err)
    {
        console.log("Error while hashing password")
        console.log(err.message)
    }
}

const verifyPassword= async (password,hashedPassword)=>{
    try 
    {
        const result= await bcrypt.compare(password,hashedPassword)    
        return result
        
    } 
    catch (error) {
       console.log("Error while verifying password")
       console.log(error.message)

    }   
}

module.exports= {hashPassword,verifyPassword}