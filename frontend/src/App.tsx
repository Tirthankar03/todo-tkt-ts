import { Container } from "@chakra-ui/react";
// import React from "react";
import Header from "./components/Header";
import './App.css'
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useAppDispatch } from "./store/store";
import { useEffect, useState } from "react";
import { fetchTodos } from "./store/features/todoSlice";

function App() {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  });

  return (
    <Container maxW="640px">
    {/* <h1>hi App</h1> */}
    <Header/>
    <AddTodo currentId={currentId} setCurrentId={setCurrentId}/>
    <TodoList setCurrentId={setCurrentId}/>
  </Container>
  )
}

export default App
