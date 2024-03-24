const nodemailer=require('nodemailer')
const crypto = require("crypto");

SendMail={
    MailSender:async(mailId)=>{  
            
    const id = crypto.randomBytes(3).toString("hex");
    
    const transporter=nodemailer.createTransport({
        service:'gmail',
        secure: true,
        auth:{
            user:'elanza@gmail.com',
            pass:'ambiance'
        }
    })
    const info=transporter.sendMail({
        from:'elanza@gmail.com',
        to:mailId,
        subject:'OTP for Forget Password',
        html:'<h1> One Time Password</h1><br/><h3>'+id+'</h3>'        
    })
    console.log((await info).response)
    return id;
    }
}
    
module.exports=SendMail

