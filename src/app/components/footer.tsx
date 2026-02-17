"use client";

import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Ligne 1 — Liens principaux */}
        <nav className={styles.mainLinks}>
          <Link href="/qui-sommes-nous" className={styles.mainLink}>Qui sommes-nous</Link>
          <Link href="/faq" className={styles.mainLink}>FAQ</Link>
          <a className={styles.mainLink} href="mailto:contact@billycheck.com">contact@billycheck.com</a>
        </nav>

        {/* Séparateur */}
        <div className={styles.separator} />

        {/* Ligne 2 — Liens légaux */}
        <nav className={styles.legalLinks}>
          <Link href="/politique-de-confidentialite" className={styles.legalLink}>Politique de confidentialité</Link>
          <span className={styles.dot}>·</span>
          <Link href="/cgu" className={styles.legalLink}>CGU</Link>
          <span className={styles.dot}>·</span>
          <Link href="/mentions-legales" className={styles.legalLink}>Mentions légales</Link>
        </nav>

        {/* Ligne 3 — Copyright */}
        <div className={styles.note}>
          BillyCheck © {new Date().getFullYear()} — Billy ne fournit pas de conseil financier ou juridique.
        </div>
      </div>
    </footer>
  );
}
