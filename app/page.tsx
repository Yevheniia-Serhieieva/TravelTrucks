import Link from "next/link";
import styles from "./page.module.css";
import css from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={css.hero}>
        <h1 className={css.main_title}>Campers of your dreams</h1>
        <h2 className={css.text}>
          You can find everything you want in our catalog
        </h2>
        <Link href={`/catalog/filter/all`} className={css.button}>
          View Now
        </Link>
      </div>
    </main>
  );
}
