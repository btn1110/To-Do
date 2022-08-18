import React from "react";
import { v4 as createId } from "uuid";

const ToDoForm = ({ todos, setTodos, todoList, setTodoList }) => {
  const todoInputHandler = (e) => {
    setTodos(e.target.value);
  };
  const todoSubmitHandler = (e) => {
    e.preventDefault();
    if (todos.trim().length === 0) {
      return;
    }
    setTodoList([
      ...todoList,
      {
        id: createId(),
        text: todos,
      },
    ]);

    setTodos("");
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <input
        type="text"
        placeholder="오늘 하루도 행복하게"
        onChange={todoInputHandler}
        value={todos}
      ></input>
      <button type="submit">저장</button>
    </form>
  );
};

export default ToDoForm;
