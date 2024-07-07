const mongoose = require("mongoose");
require("dotenv").config();
//const DATABASE_URL = process.env.MONGODB_URL || "mongodb://0.0.0.0:27017/Study_notion_db";
const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("connection Successful"))
    .catch((error)=>{
        console.log("issue in db connection")
        console.error(error.message);
        process.exit(1);
    });
}
module.exports=dbconnect;                         