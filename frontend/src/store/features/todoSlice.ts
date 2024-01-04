import { PayloadAction, createSlice } from '@reduxjs/toolkit'
export interface Todo{
    id:number;
    text:string;
}

//our state is going to have a list of todos (we defined the interface)

interface TodoState{
    todos: Todo[]
}


// ------------------------------------------

//our initial state is just an empty list 
const initialState: TodoState = {
    todos: [],
}


export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    //object that contains our actions: fxns that can mutate our state
    reducers: {
        //when we are dispatching addTodo action from our component to the redux store, we can pass an object which contains a text of string as a parameter to this addTodo action 
        //we are dealing with frontend, no use of id?
        addTodo: (state, action:PayloadAction<{text: string}>) => {
            state.todos.push({
                id: state.todos.length,
                text: action.payload.text,
            })
        },
    },
});

export default TodoSlice.reducer;
export const { addTodo }=TodoSlice.actions;