import Head from "next/head";
import styles from "styles/Home.module.css";
import Todo from "../../organisms/Todo";

export default function Body() {
  return (
    <div className={styles.container}>
      {/* <TopSearchBar /> */}
      <Todo />
    </div>
  );
}
