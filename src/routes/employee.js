const express = require("express")
const router =express.Router()
const Employee =require("../model/employees")
// 1) add a new employee
router.post('/employee' ,async (req ,res) =>{
    try{
        const {name ,email ,phone ,address} =req.body
        const add_Employee =new Employee({
            name,
            email,
            phone,
            address
        })
        const empRecord =await add_Employee.save()
        res.status(200).json(empRecord)
  
    }catch(e){
        console.log(e)
        res.status(401).send("something went wrong")
    }
})

//2) get the list of employees
router.get("/employee/employee_list" , async (req ,res) => {

    try{
        const empDetails =await Employee.find()
        res.status(201).json({list : empDetails})
    }catch(e){
        res.status(404).send("List not found")
    }
})

//3) get details of individual employee
router.get("/employee/employee_list/:id" ,async (req ,res) => {
    try{
        const {name, email,phone ,address} =req.body
        const _id =req.params.id
        const Emp_details =await Employee.findById(_id)

        res.status(201).json(Emp_details)
    }
    catch(e) {
        res.status(400).send("Employee does not exists")
    }
})

//4) update details of employee
router.patch("/employee/employee_update/:id" ,async (req ,res) => {
    try{
        const _id= req.params.id
        const{name,email,phone,address} =req.body
        const updatedEmployee =await Employee.findByIdAndUpdate(_id,{
            name,email,phone,address
        },{new :true})
        res.status(201).json(updatedEmployee)
    }catch(e){
        res.status(400).send("can not update the details of the emplopyee")
    }
})

//5) Delete the employee present in the database
router.delete("/employee/employee_removed/:id" ,async(req, res) => {
    try {
        // const{name,email.phone,address} = req.body
        const _id =req.params.id
        const deleted_emp =await Employee.findByIdAndDelete(_id,{new :true})
        res.status(201).json(deleted_emp)
        res.send('delted')
    } catch (e) {
        res.status(400).send("Can not delete the employee. please recheck")
    }
})
module.exports =router