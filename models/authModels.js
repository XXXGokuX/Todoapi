
const mongoose= require('mongoose')


// Declare the Schema of the Mongo model
var signUpSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

const signInSchema= new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})



//Export the model
// signInModel= mongoose.model.User || mongoose.model('User', signInSchema);
signUpModel= mongoose.model.User || mongoose.model('User',signUpSchema)


module.exports= { signUpModel }