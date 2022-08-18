import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      <TodoListItem todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default TodoList;
