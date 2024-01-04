import express from 'express'
import { addTodos, deleteTodo, 
    updateTodo 
} from '../controllers/todoController.js';
import { getTodos} from "../controllers/todoController.js";


const router = express.Router();

router.get("/get", getTodos)
router.post("/add", addTodos);
router.put("/update", updateTodo);
router.delete("/delete/:id", deleteTodo);


export default router;