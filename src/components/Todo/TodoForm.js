import React, { useState } from "react";
import { v4 as createId } from "uuid";
import style from "./TodoForm.module.css";

const ToDoForm = ({ todos, setTodos, todoList, setTodoList }) => {
  const [isValid, setIsValid] = useState(true);

  const todoInputHandler = (e) => {
    setTodos(e.target.value);
  };
  const todoSubmitHandler = (e) => {
    e.preventDefault();
    if (todos.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
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
    <form onSubmit={todoSubmitHandler} className={style.form}>
      <input
        className={`${style.input} ${isValid ? "" : `${style.inValid}`}`}
        type="text"
        placeholder="Make To-Do"
        onChange={todoInputHandler}
        value={todos}
      ></input>
      <button className={`font-family ${style.button}`} type="submit">
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
