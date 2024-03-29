const Todo = require('../models/Todo')

// define route handler

exports.getTodo = async (req, res) => {
    try {
        // fetch all todo item from database
        const todos = await Todo.find({});
        // response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo Data is Fetched"
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server Error"
        })
    }
}


exports.getTodoById = async (req, res) => {
    try {
        // extract todo by id
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id })

        // Data not Found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data Found With Given Id"
            })
        }
        // Data Found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server Error"
        })
    }
}