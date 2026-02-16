import Footer from "./footer";
import styles from "./legalPage.module.css";

export default function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.h1}>{title}</h1>
          {updatedAt && <div className={styles.meta}>Dernière mise à jour: {updatedAt}</div>}
        </header>

        <article className={styles.article}>{children}</article>
      </main>

      <Footer />
    </div>
  );
}
