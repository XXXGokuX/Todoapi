const express = require('express')
const router= express.Router()
const {GetTodos,DeleteTodos,UpdateTodos,CreateTodos}= require("../controllers/TodosControllers")
const checkTokenMiddleware= require("../middlewares/checkToken")


router.use(checkTokenMiddleware)

//Create Todos
router.post("/create",CreateTodos )

//Get all Todos
router.get("/all", GetTodos)

//Delete Todos
router.delete("/delete", DeleteTodos)

//Update Todos
router.patch("/update", UpdateTodos)

module.exports= router