const express=require('express')
const app=express();

// load config from env file 
require("dotenv").config();
const PORT=process.env.PORT || 4000;

// Middleware to parse from request body
app.use(express.json());

// import routes from TODO API
const todoRoutes=require("./routes/todos");
// const { CreateToDo } = require('./controller/CreateToDo');
// mount the TODO API router
app.use("/api/v1",todoRoutes)

app.listen(PORT,()=>{
    console.log(`Server Started Successfully at ${PORT}`)
})

// connection to thedatabase
const dbConnect=require('./config/database')
dbConnect();

app.get('/', (req,res)=>{
    res.send("This is Home Page")
})