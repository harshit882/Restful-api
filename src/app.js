const bodyParser = require("body-parser")
const express =require("express")
const EmployeeRoute =require("./routes/employee")
const { default: mongoose } = require("mongoose")
const app = express()
require("./db/connection")
app.use(bodyParser.json())
app.use(EmployeeRoute)
const port = process.env.PORT || 3000

//starting the server of the application
app.listen(port ,()=>{
    console.log(`connection established at port: ${port}`)
})

