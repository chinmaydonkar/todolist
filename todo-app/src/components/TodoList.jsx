import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks yet.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
