import styles from "./Layout.module.css";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">Deapp Food</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://deapp.ir" target="_blank" rel="noreferrer">
          Deapp
        </a>
        Next Project | Deapp Food &copy;
      </footer>
    </>
  );
}

export default Layout;
