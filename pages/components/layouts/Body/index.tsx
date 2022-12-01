import Head from "next/head";
import styles from "styles/Home.module.css";
import { Todo } from "../../organisms/Todo";
import { TopSearchBar } from "../../organisms/TopSearchBar";

export function Body() {
  return (
    <div className={styles.container}>
      {/* <TopSearchBar /> */}
      <Todo />
    </div>
  );
}
