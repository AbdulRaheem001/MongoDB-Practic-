const { response } = require("express");
const employee = require("../Models/employee");

const index = (req, res, next) => {
    employee.find()
        .then(response => {
            res.json({ response })
        }).catch(error => {
            res.json({
                message: "An Erro is occure"
            })

        })
}

const show = (req, res, next) => {
    let userId = res.body.userId;
    employee.findById(userId)
        .then(response => {
            res.json({ response })
        }).catch(error => {
            res.json({
                message: "An Erro is occure"
            })
        })
}

//Add Employee

const AddEmployee= (req,res,next)=>{
    let NewEmployee= new employee({
        Name: res.body.name,
        Email: res.body.email,
        Phone: res.body.phone,
        Gender: res.body.gender,
        Password: res.body.password,
        ConPassword:res.body.conpass
    })
    NewEmployee.save()
    .then(response=>{
        res.json({
            message: "Data is Added"
        })
    })
        .catch(error=>{
            res.json({
                message: "Data is not Added due to some error"
            })
        })
    
}

//Update Employee

const update =(req,res,next)=>{
    let employeeId=res.body.userId
    let updateData={
        Name: res.body.name,
        Email: res.body.email,
        Phone: res.body.phone,
        Gender: res.body.gender,
        Password: res.body.password,
        ConPassword:res.body.conpass
    }
    employee.findByIdAndUpdate(employeeId,{$set:updateData})
    .then(()=>{
        res.json({
            message: "Data is Updated"
        })
    })
        .catch(error=>{
            res.json({
                message: "Data is not Updated due to some error"
            })
        })
 
}

const deleatEmp= (req,res,next)=>{
    let userId=res.body.id;
    employee.findOneAndRemove(userId)
    .then(()=>{
        res.json({
            message: "Employee is deleated"
        })
    })
        .catch(error=>{
            res.json({
                message: "Data is not Deleated due to some error"
            })
        })
}

module.exports={
    index,show,deleatEmp,update,AddEmployee
}