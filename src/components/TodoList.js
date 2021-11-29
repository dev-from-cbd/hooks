import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Task Manager</h1>
      <TodoForm>task #1</TodoForm>
    </div>
  );
}

export default TodoList;
