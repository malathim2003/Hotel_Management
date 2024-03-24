const mongoose=require('mongoose')
const UserModel=require('../models/UserModel')
const SendMail=require('../mailSender/SendMail')

const UserService={
    users:async()=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/Elanza")
        var usersData=await UserModel.find()
        mongoose.connection.close()
        return usersData
    },
    register:async(userData)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/Elanza")
        var user=await UserModel.findOne({uname:userData.uname})
        if(user==null){
            var pDoc=await UserModel.create(userData)
            mongoose.connection.close()
            return pDoc
        }
        else{
            return "Already have account? Login here"
        }
    },
    login: async (u, p) => {
        await mongoose.connect("mongodb://127.0.0.1:27017/Elanza");
        var user = await UserModel.findOne({ uname: u ,password:p});
        console.log(u,p);
        console.log("user=",user);
        mongoose.connection.close();
        console.log(user);
        return user;
      },
    changepassword:async(userData)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/Elanza")
        console.log(userData)
        var user=await UserModel.findOneAndUpdate({uname:userData.uname},{password:userData.newPassword})
        console.log(user)
        if(user!=null)
        {
            return user
        }
        else
        {
            return null
        }
    },
    forgetPassowrd:async(userData)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/BuyOrSell")
        var otp=userData.otp
        if(SendMail.MailSender(userData.email)==otp){
            var forget=await UserModel.findOneAndUpdate(
                {uname:userData.uname},
                {password:userData.newPassword}
            )
            console.log(forget)
            if(forget!=null)
            {
                mongoose.connection.close()
                return UserModel.find({email:userData.email})
            }
            else{
                mongoose.connection.close()
                return "User name not found"
            }
        }
        else{
            mongoose.connection.close()
            return null
        }        
    }
}

module.exports=UserService

