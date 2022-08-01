const mongoos=require("mongoose");


const EmployeeSchema= new mongoos.Schema({
    Name: { 
        type : String
    },
    Email: {
        type : String
    },
    Phone: { 
        type : Number
    },
    Gender: {
        type: String
    },
    Password: { 
        type : String
    },
    ConfPassword: { 
        type : String
    },
},{timestamps : true})

const Employee =mongoos.model("EmployeeData",EmployeeSchema);

module.export=Employee;