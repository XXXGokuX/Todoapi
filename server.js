const express= require('express')
const cors= require('cors')
const connectDB= require("./config/db.js")
const authRoutes= require("./routes/auth.js")
const todosRoutes= require("./routes/todos.js")

const dotenv= require('dotenv')


dotenv.config()

//port
const PORT= process.env.PORT || 8000


//app config
const app= express()

//built-in middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))



//connect to db
connectDB()


//Register Auth Routes
app.use("/api/user",authRoutes)

//All todos Routes
app.use('/api/todos',todosRoutes)


app.get("/",(req,resp)=> resp.send("ROOT PATH"))


//Start Server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})