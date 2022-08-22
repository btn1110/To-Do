import style from "./TodoListItem.module.css";

const TodoListItem = ({ todoList, setTodoList }) => {
  const todoDeleteHandler = (e) => {
    const { id: targetId } = e.target.parentElement;
    const filter = todoList.filter((todo) => {
      return todo.id !== targetId;
    });
    setTodoList(filter);
  };

  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <li
            key={todo.id}
            id={todo.id}
            className={`font-family ${style.list}`}
          >
            {todo.text}
            <button
              onClick={todoDeleteHandler}
              className={`font-family ${style.button}`}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoListItem;
