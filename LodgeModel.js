const mongoose=require("mongoose");
const LodgeSchema=new mongoose.Schema({
     name:{type:String,required:true},
     location:{type:String,required:true},
     rating:{type:Number,required:true},
     phone:{type:Number,require:true,}
});
const LodgeModel=mongoose.model("products",LodgeSchema);
module.exports=LodgeModel;