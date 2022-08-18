import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Quotes from "./components/Quotes/Quotes";
import ToDoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
import Header from "./components/Layout/Header";

function App() {
  const [todos, setTodos] = useState("");
  const [quotes, setQuotes] = useState({
    author: "",
    content: "",
  });
  const [todoList, setTodoList] = useState([]);

  const api_url = "https://api.quotable.io/random";

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch(api_url);
      const data = await response.json();

      setQuotes({
        author: data.author,
        content: data.content,
      });
    };
    fetchQuotes();
  }, []);
  return (
    <Fragment>
      <Header />
      <Quotes quotes={quotes} />
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
