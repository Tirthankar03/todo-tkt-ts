import { Container } from "@chakra-ui/react";
// import React from "react";
import Header from "./components/Header";
import './App.css'
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useAppDispatch } from "./store/store";
import { useEffect } from "react";
import { fetchTodos } from "./store/features/todoSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  });

  return (
    <Container maxW="640px">
    {/* <h1>hi App</h1> */}
    <Header/>
    <AddTodo/>
    <TodoList/>
  </Container>
  )
}

export default App
