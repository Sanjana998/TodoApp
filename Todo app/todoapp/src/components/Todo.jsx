import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import CompletedTodos from "./CompletedTodos";

export default function Todo() {
  // 'lifting stateup' concept : here we need todos in both the .jsx hence its included in the parent .jsx function
  const [todos, setTodos] = useState([]);
  const completedCount = todos.filter((todo) => todo.done === true).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <CompletedTodos completedCount={completedCount} totalTodos={totalTodos} />
    </div>
  );
}
