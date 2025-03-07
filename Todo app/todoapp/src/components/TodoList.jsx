import styles from "./Todolist.module.css";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  //  'slice' is used to create a shalow copy of the orginal array, wihtout modifying it
  // sort(a,b) sorts the array, 'a and b' are the two pairs taken in array to compare
  // here we use 'done' because we want the sorting to be bsed one done , and in ascedning order
  // done: true is 1, False: 0 | so false, 'Un checked items' will come first and then the true items
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.TodoList}>
      {sortedTodos.map((item) => (
        // we are passsing the item value as a PROP to another .jsx file to make code neat.
        // we add 'KEY' value to uniquely identify the particular item, and since here we dont have an 'id' we use the
        // item name itself as the key
        <TodoItem
          key={item.name}
          // no need of selecting name, entire object can be sent because it is selected later inside todoitem
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
