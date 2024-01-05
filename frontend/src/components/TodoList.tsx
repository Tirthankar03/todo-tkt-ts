import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import TodoCard from "./TodoCard";
import { useAppSelector } from "../store/store";



const TodoList:FC = ({setCurrentId}) => {
  //fetch data from Appselector
  const todos = useAppSelector(state=>state.todo.todos);
  //state => state.todo (abstracted inside)
  // const todos2 = useAppSelector(state=>state.todo);
  // const todos3 = useAppSelector(state=>state);


  console.log(todos);
  // console.log(todos2);
  // console.log(todos3);

    //   const getTodos = async() => { 
    //     try {

    //         const res = await fetch("http://localhost:5000/api/todos/get",{
    //             method: "GET",
    //             mode: "no-cors", 
    //         })

    //         const data = await res.json();

    //         console.log(data);

    //         return data;

    //     } catch (error) {
    //         console.log("Error has occurred :(", error);
    //     }
    //  }

    //  getTodos();
  
  
    return (
        <Flex direction='column' justify={"center"} align={"center"}mt={6} mb='12'gap='3'>
          {/* <TodoCard/>
          <TodoCard/>
          <TodoCard/> */}

          {todos.map(todo=>{
            return <TodoCard key={todo._id} id={todo._id} text={todo.text} setCurrentId={setCurrentId} />
          })}
      </Flex>
    );
  };

export default TodoList;