import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import TodoCard from "./TodoCard";
import { useAppSelector } from "../store/store";



const TodoList:FC = () => {
  //fetch data from Appselector
  const todos = useAppSelector(state=>state.todo.todos);
  // const todos2 = useAppSelector(state=>state.todo);
  // const todos3 = useAppSelector(state=>state);


  console.log(todos);
  // console.log(todos2);
  // console.log(todos3);
  
  
    return (
        <Flex direction='column' justify={"center"} align={"center"}mt={6} mb='12'gap='3'>
          {/* <TodoCard/>
          <TodoCard/>
          <TodoCard/> */}

          {todos.map(todo=>{
            return <TodoCard key={todo.id} text={todo.text} />
          })}
      </Flex>
    );
  };

export default TodoList;