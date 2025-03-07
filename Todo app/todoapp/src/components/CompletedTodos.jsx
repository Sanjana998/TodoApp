import styles from "./CompletedTodos.module.css";
export default function CompletedTodos({ completedCount, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed : {completedCount}</span>
      <span className={styles.item}>Total : {totalTodos}</span>
    </div>
  );
}
