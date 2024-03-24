const mongoose=require('mongoose')
const LodgeModel=require('../models/LodgeModel')
const LodgeService={
    addProduct:async(name,location,rating,phone)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/Elanza")
        var pDoc=await LodgeModel.create({name:name,location:location,rating:rating,phone:phone})
        mongoose.connection.close()
        return pDoc
    },
    removeProduct:async(productId)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/Elanza")
        var data=await LodgeModel.findByIdAndDelete(productId)
        mongoose.connection.close()
        return data
    },
    getByLocation:async(locationValue)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/Elanza")
        var products=await LodgeModel.find({location:locationValue})
        mongoose.connection.close()
        return products
    },
    findAll:async()=>{
        await await mongoose.connect("mongodb://127.0.0.1:27017/Elanza")
        var products=await LodgeModel.find()
        mongoose.connection.close()
        return products
    }
}
module.exports=LodgeService;