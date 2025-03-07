import styles from "./Form.module.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    // we are adding the todo items to an array 'todos'
    // since we need not only the current item(todo) but also the previous, we are using a s
    // spread operator(...) to get previous items stored in 'todos' list
    setTodos([...todos, todo]);
    // we need to empty the inputbox after adding to list
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.moderninput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            placeholder="Enter Todo Items..."
          />
          <button className={styles.modernbutton} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
