import styles from "styles/Home.module.css";

export function Header() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </div>
  );
}
