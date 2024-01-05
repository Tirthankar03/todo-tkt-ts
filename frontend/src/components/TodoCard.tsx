import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useAppDispatch } from "../store/store";
import { deleteTodos } from "../store/features/todoSlice";



const TodoCard: FC<{ text: string, id:any, setCurrentId:any }> = ({ text, id, setCurrentId }) => {
  const dispatch = useAppDispatch();
    return (
        <Box color='gray.600' w='100%' bg='white' p='6' rounded='md' >
        <Flex direction='row' justify='space-between' align='center'>
            <Text>{text}</Text>
            <Flex justify='space-between' align='center' >
                <Button colorScheme='yellow' mx='4' onClick={()=> setCurrentId(id)}>edit</Button>
                <Button colorScheme='green' onClick={()=>dispatch(deleteTodos(id))}>done</Button>
            </Flex>
        </Flex>
    </Box>
    );
  };

export default TodoCard;