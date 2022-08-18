import React, { Fragment, useState } from "react";
import "./App.css";
import Quotes from "./components/Quotes";
import ToDoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <Fragment>
      <Quotes />
      <ToDoForm
        todos={todos}
        setTodos={setTodos}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} todos={todos} />
    </Fragment>
  );
}

export default App;
