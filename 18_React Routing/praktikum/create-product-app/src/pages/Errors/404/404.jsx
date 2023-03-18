import styles from "./404.module.css";

export default function NotFound() {
  return (
    <div className={styles.background}>
      <h1 className={styles.text}>404</h1>
      <h1 className={styles.text}>Page Not Found!</h1>
    </div>
  );
}
