import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";



const TodoCard:FC = () => {
    return (
        <Box color='gray.600' w='100%' bg='white' p='6' rounded='md' >
        <Flex direction='row' justify='space-between' align='center'>
            <Text>This is a todo</Text>
            <Flex justify='space-between' align='center' >
                <Button colorScheme='yellow' mx='4'>edit</Button>
                <Button colorScheme='green'>done</Button>
            </Flex>
        </Flex>
    </Box>
    );
  };

export default TodoCard;