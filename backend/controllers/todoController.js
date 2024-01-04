import Todo from '../models/todoModel.js'


const getTodos = async (req,res) => {
    try {
        const allTodos = await Todo.find();
        res.status(200).json(allTodos)
    } catch (err) {
        res.status(500).json({error: err.message})
        console.log("Error in getFeedPosts", err.message);
    }
}


const addTodos = async (req,res) => {
    try {
        const {text} = req.body;
        const newTodo = new Todo({text});
        
        await newTodo.save();
        console.log("todo added successfully", newTodo);
        return res.status(201).json({message: "Todo added successfully✅", newTodo})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

const updateTodo = async (req,res) => {
    try {
        const {id} = req.params;
        const {text} = req.body;

        let todo = await Todo.findById(id);

        if(!todo) return res.status(404).json({error: "Todo not found"});

        todo.text = text || todo.text;

        todo  = await todo.save();

        res.status(200).json({message: "todo updated successfully😳", todo});


    } catch (err) {
        res.status(500).json({error: err.message})
        console.log("Error in updating todo", err.message);
    }
}

const deleteTodo = async (req,res) => { 
    try {
        const {id} = req.params;
        const todo = await Todo.findById(id);

        if(!todo) return res.status(404).json({error: "todo not found"});

        await Todo.findByIdAndDelete(id);

        res.status(200).json({message: "Todo deleted successfully✅"})
    } catch (err) {
        res.status(500).json({error: err.message})
        console.log("Error in deleting todo", err.message);
    }
 }


export {
    getTodos,
     addTodos,
     deleteTodo,
     updateTodo
    }