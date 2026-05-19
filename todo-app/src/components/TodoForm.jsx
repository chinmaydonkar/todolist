import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
