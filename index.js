const express = require("express");
const dotenv = require("dotenv");
const morgan=require("morgan");
const body_parser= require("body-parser");

const employeeRouter=require("./Routes/Employee")

const app = express();
app.use(morgan("dev"));
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());


require("./connection.js");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Your port number is " + PORT);

});

app.use("/api/employee",employeeRouter);