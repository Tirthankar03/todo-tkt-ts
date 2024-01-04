import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";


const Header:FC = () => {
  return (
      <Flex direction='column' justify={"center"} align={"center"}mt={6} mb='12'>
        <Box color='gray.800' w='100%' bg='purple.200' p='6' rounded='2xl' >
            <Text fontSize='2xl' textAlign="center">Todo App</Text>
        </Box>
    </Flex>
  );
};

export default Header;
