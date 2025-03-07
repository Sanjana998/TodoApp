import styles from "./TodoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clicked for item", item);
    // so when we click the button, it compares if the item clicked is -not equal to the todo item iterated one-ny-one using 'filter'
    // and it stores the items which are not the current item
    // and then the items are set isnide the settodos list, which is responsible for displaying the items
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(item) {
    console.log("Handle click for item", item);
    // here we are iterating through each todo in todos list and when we come across the item clicked right now
    // we set the done value to opposite of the previous state (true will become false and vice versa)
    // we are initlaizing to a new array and passing to 'setTodos' so that we hold the array values and its not lost
    const newArray = todos.map((todo) =>
      todo.name == item.name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    console.log(newArray);
  }
  // here we create a constant variable for classname
  // when the current item is clicked, the variable is refrenced and it checks if the item.done is true
  // If 'true' then we call the styles.completed class, if not it doesnt call anything
  const completedClassname = item.done ? styles.completed : "";
  return (
    <div className={styles.itemslist}>
      <div className={styles.itemName}>
        <span className={completedClassname} onClick={() => handleClick(item)}>
          {item.name}
        </span>
        <span>
          <button
            // we arent directly using handledelete(item) because it gets called asoon as the page loads
            //  hence we need to retun this as a callback function
            onClick={() => handleDelete(item)}
            className={styles.deletebtn}
          >
            ⓧ
          </button>
        </span>
      </div>
      {/* line after each element */}
      <hr className={styles.line} />
    </div>
  );
}
