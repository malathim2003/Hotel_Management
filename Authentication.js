const UserService=require("../services/UserService");
const authenticate=async(req,res,next)=>{
let token =req.headers.authorization;
if(token){
token=token.split(" ")[1];
[u,p,r]=token.split(":");
user=await UserService.login(u,p);
if(user.role==r)
    next()
else
    res.send("invalid credentials")
}
else{
res.send("no token")
}
}
module.exports=authenticate;