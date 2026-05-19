const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-3">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />

        <span
          className={`${
            todo.completed ? "line-through text-gray-400" : "text-black"
          }`}
        >
          {todo.text}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => {
            const newText = prompt("Edit Task", todo.text);

            if (newText) {
              editTodo(todo.id, newText);
            }
          }}
          className="bg-yellow-400 px-3 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
