const express=require("express");
const LodgeService = require("../services/LodgeService");
const authenticate = require("../authentication/Authentication")
const LodgeRouter = express.Router();
LodgeRouter.get('/product',async function (req, res) {
    console.log("Router Working");
    res.json(await LodgeService.findAll())
});
LodgeRouter.get("/product/:location", async (req, res) => {
    var { location } = req.params;
    var products = await LodgeService.getByLocation(location);
    res.json(products);
});
LodgeRouter.post("/product/add",authenticate, async(req,res)=>{
    var {name,location,rating,phone}=req.body
    var p=await LodgeService.addProduct(name,location,rating,phone);
    res.json(p);
});
LodgeRouter.delete("/product/:id",authenticate, async(req,res)=>{
    var {id}=req.params
    res.json(await LodgeService.removeProduct(id))
});
module.exports= LodgeRouter;