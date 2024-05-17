const todoModel= require('../models/todosModel')

const CreateTodos= async (req,resp)=>{
    // resp.send("CREATE TOKEN "+req.id)
    const {title,description}= req.body

    const todo= await new todoModel({
        title,
        description,
        user_id: req.id
    })

    const saveTodo= await todo.save()

    resp.status(201).json({todo: saveTodo,message:"Todo created"})

}

const GetTodos= async (req,resp)=>{
    
    const {id} = req;
    
    const allTodos= await todoModel.find({user_id: id})

    resp.status(200).json({todos: allTodos})

}

const DeleteTodos= async (req,resp)=>{
    
    const {todo_id}= req.body

    const exists= await todoModel.findByIdAndDelete(todo_id)

    if(!exists)
    return resp.status(400).json({message:"INAVLID TODO ID"})    

    return resp.status(204).json({message: exists})

}

const UpdateTodos= async (req,resp)=>{
    let {todo_id,title,description}= req.body

    const exists= await todoModel.findById(todo_id)

    

    if(!exists)
    return resp.status(400).json({message:"INAVLID TODO ID"}) 
    
    title ??= exists.title
    description ??= exists.description

    const todo= await todoModel.findByIdAndUpdate(todo_id,{title,description},{new:true})

    return resp.status(200).json({message: todo})
}


module.exports= {CreateTodos,UpdateTodos,DeleteTodos,GetTodos}