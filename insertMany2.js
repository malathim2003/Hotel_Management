const mongoose = require("mongoose")
const UserModel = require("./models/UserModel");
const demo = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/Elanza');
    await UserModel.insertMany([
        {fname:"M",lname:"Mala",uname:"mala123",email:"mala@gmail.com",password:123, role:"Admin"},
        {fname:"M",lname:"Mala",uname:"mala13",email:"mala@gmail.com",password:123,role:"User"},
        {fname:"P",lname:"Ragavi",uname:"rags",email:"rags@gmail.com",password:567,role:"User"},
        {fname:"S",lname:"Kuvala",uname:"kuvala123",email:"kuvalas@gmail.com",password:13,role:"User"},

       
    ]);
    mongoose.connection.close();
}
demo().then(()=>{console.log("inserted!")}).catch((err)=>{console.log(err)})