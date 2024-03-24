const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
     fname:{type:String,required:true},
     lname:{type:String,required:true},
     uname:{type:String,required:true,unique:true},
     password:{type:String,required:true},
     email:{type:String,require:true},
     role:{type:String}
});
const UserModel=mongoose.model("User",UserSchema);
module.exports=UserModel;