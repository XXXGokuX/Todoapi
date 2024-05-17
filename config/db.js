const mongoose= require('mongoose')
const dotenv= require("dotenv")

dotenv.config()

const URI= process.env.MONGO_URI


async function connectDB()
{
    try
    {
       await mongoose.connect(URI)
       console.log("DATABASE CONNECT SUCCESS")     
    }
    catch(err)
    {
        console.log("DATABASE CONNECTION FAIL")
        console.log(err.message)
    }

}

module.exports= connectDB