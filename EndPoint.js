const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const ProductRouter = require("./routers/LodgeRouter");
const UserRouter=require("./routers/UserRouter")
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(ProductRouter);
app.use(UserRouter);

app.listen(8081,()=>{
    console.log("Server started!!!")
});

