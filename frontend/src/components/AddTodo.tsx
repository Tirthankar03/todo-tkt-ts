import  { useState } from 'react'
import { Box, Flex,FormControl, Textarea, Button } from "@chakra-ui/react";
import { useAppDispatch } from "../store/store";
import { addTodo, saveTodos } from '../store/features/todoSlice';

function AddTodo() {
    const [textInput, setTextInput] = useState('')

    const handleTextChange = (e:any) => { 
        const input = e.target.value;
        setTextInput(input);
    }

    // const handleAddTodo = async() => { 
    //     try {

    //         const res = await fetch("/api/todos/add",{
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({text: textInput}),
    //         })

    //         const data = await res.json();

    //         console.log(data);
            
    //         //clear out the textarea after adding of todo
    //         setTextInput("");

    //     } catch (error) {
    //         console.log("Error has occurred :(", error);
    //     }
    //  }

    const dispatch = useAppDispatch();

  return (
    <Flex direction='column' justify={"center"} align={"center"}mt={6} mb='12'>
    <Box color='gray.800' w='100%' bg='blue.200' p='4' rounded='2xl' >

    <FormControl>
        <Flex direction='row' justify='space-between' align='center'>
                <Textarea w='80%' placeholder='missing out on work?' 
                onChange={handleTextChange}
                 value={textInput}/>

                <Button colorScheme='red' onClick={()=>
                {
                    dispatch(saveTodos(textInput)) 
                    setTextInput("")
                }
                    }>Add</Button>
        </Flex>
    </FormControl>
    </Box>
</Flex>
  )
}

export default AddTodo