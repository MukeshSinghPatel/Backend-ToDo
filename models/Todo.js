const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        reuired:true,
        msxlength:50
    },
    description:{
        type:String,
        reuired: true,
        maxlength: 50
    },
    createDate:{
        type:Date,
        reuired:true,
        default: Date.now()
    },
    updatedAt:{
        type:Date,
        reuired:true,
        default:Date.now()
    }

})

module.exports=mongoose.model("todo",todoSchema)