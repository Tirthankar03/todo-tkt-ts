import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import TodoCard from "./TodoCard";



const TodoList:FC = () => {
    return (
        <Flex direction='column' justify={"center"} align={"center"}mt={6} mb='12'gap='3'>
          <TodoCard/>
          <TodoCard/>
          <TodoCard/>
      </Flex>
    );
  };

export default TodoList;