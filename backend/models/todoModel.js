import mongoose from 'mongoose'

// @ts-ignore
const todoSchema =  mongoose.Schema({
        text: {
            type: String,
            maxLength: 200,
        }
    
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;