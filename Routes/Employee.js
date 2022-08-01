const express=require("express")
const router=express.Router()


const employeeController= require("../Controller/EmployeeCollection")

router.get("/", employeeController.index)
router.get("/show",employeeController.show)
router.post("/store",employeeController.AddEmployee)
router.post("/update",employeeController.update)
router.post("/deleat",employeeController.deleatEmp)


module.exports =router