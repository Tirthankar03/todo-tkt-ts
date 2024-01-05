import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { store } from '../store';
import { Key } from 'react';
export interface Todo{
    _id?: string;
    id?:string;
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
// const todoState = store.getState().todo.todos;
//async thunks
export const fetchTodos = createAsyncThunk(
    "todos/get",
    async (thunkAPI) => {
      const response = await fetch("http://localhost:5000/api/todos/get", {
        method: "GET",
      });
      const data = response.json();
      return data;
    },
  );
  
  export const saveTodos = createAsyncThunk(
    "todos/add",
    async (text: string, thunkAPI) => {
      const response = await fetch("http://localhost:5000/api/todos/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
        }),
      });
      const data = await response.json();
      return data;
    },
  );

  export const deleteTodos = createAsyncThunk(
    "todos/delete",
    async (id: number, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:5000/api/todos/delete/${id}`, {
                method: "DELETE",
              });
        
              const data = await response.json();
              console.log(data);
              console.log(id);
              
              return id;
              
            //   return key;
        } catch (error) {
            console.log("error in hitting the delete endpoint", error);
        }
     
    },
  );

  export const updateTodos = createAsyncThunk(
    "todos/update",
    async (  { id, text }: { id: number; text: string }, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:5000/api/todos/update/${id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  text,
                }),
              });
              const data = await response.json();
              console.log("data that should've come back",data);
              
              let updatedText = data.todo.text;
              return {id, updatedText};
        } catch (err) {
            console.log("error in updating todos", err);
        }
    },
  );

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    //object that contains our actions: fxns that can mutate our state
    reducers: {
        //when we are dispatching addTodo action from our component to the redux store, we can pass an object which contains a text of string as a parameter to this addTodo action 
        //we are dealing with frontend, no use of id?
        addTodo: (state, action:PayloadAction<{text: string}>) => {
            state.todos.push({
                // id: state.todos.length,
                text: action.payload.text,
            })
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
          state.todos = action.payload;
        });
    
        builder.addCase(saveTodos.fulfilled, (state, action) => {
          state.todos.push(action.payload.newTodo);
        });

        builder.addCase(deleteTodos.fulfilled, (state, action) => {
            // Remove the deleted todo from the state using its ID
            const deletedId = action.payload;
            console.log("delete action payload?", typeof deletedId, deletedId);
            console.log("state.todos?", state.todos);
          
            state.todos = state.todos.filter((ele) => ele._id != null && ele._id !== deletedId);
          });


        
    builder.addCase(updateTodos.fulfilled, (state, action) => {
        const { id, updatedText } = action.payload;
        // Find the index of the todo with the given id
        const todoIndex = state.todos.findIndex((todo) => todo._id === id);
  
        if (todoIndex !== -1) {
          // If the todo is found, update its text
          state.todos[todoIndex].text = updatedText;
        }
      });


      },
});

export default TodoSlice.reducer;
export const { addTodo }=TodoSlice.actions;