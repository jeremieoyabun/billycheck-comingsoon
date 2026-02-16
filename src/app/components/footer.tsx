"use client";

import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.links}>
          <Link href="/qui-sommes-nous" className={styles.link}>Qui sommes-nous</Link>
          <Link href="/politique-de-confidentialite" className={styles.link}>Politique de confidentialité</Link>
          <Link href="/cgu" className={styles.link}>CGU</Link>
          <Link href="/mentions-legales" className={styles.link}>Mentions légales</Link>
          <a className={styles.link} href="mailto:contact@billycheck.com">contact@billycheck.com</a>
        </nav>

        <div className={styles.note}>
          BillyCheck © {new Date().getFullYear()} — Billy ne fournit pas de conseil financier ou juridique.
        </div>
      </div>
    </footer>
  );
}
