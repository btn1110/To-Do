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
          <li key={todo.id} id={todo.id}>
            {todo.text}
            <button onClick={todoDeleteHandler}>x</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoListItem;
