const mongoose =require("mongoose")
require("dotenv").config()
const mongoUrl=`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_DATABASE_NAME}.uwcbdry.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(mongoUrl).then(()=>{
    console.log("database connected")
}).catch((e)=>{
    console.log("database not connected")
})