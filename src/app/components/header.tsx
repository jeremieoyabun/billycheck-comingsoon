import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <img src="/logo.png" alt="BillyCheck" className={styles.logo} />
      </Link>
    </header>
  );
}
