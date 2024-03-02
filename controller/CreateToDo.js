// Import Models

const ToDo=require('../models/Todo')

// Default route handler
exports.CreateToDo=async(req,res)=>{
    try{
        // extract title and description from request body
        const {title,description}=req.body;
        const response=await ToDo.create({title,description});
        // send a json response with success flag
        res.status(200).json(
           {
            success:true,
            data:response,
            message:"Entry Created Successfully"
           }
        )
    }
    catch(err){
        console.error(err)
        console.log(err)
        res.status(500).json({
            success:false,
            data:"Internal Error",
            message:err.message
        })
    }
}

