import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-gray-50 shadow-xl rounded-2xl p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>

        <TodoForm addTodo={addTodo} />

        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
