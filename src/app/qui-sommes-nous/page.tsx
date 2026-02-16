import Footer from "../components/footer";
import styles from "./page.module.css";

export default function QuiSommesNousPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.kicker}>Qui sommes-nous</div>
        <h1 className={styles.h1}>
          Nous rendons les factures d’électricité <span>plus simples.</span>
        </h1>
        <p className={styles.lead}>
          BillyCheck est un outil conçu pour aider le grand public à comprendre sa facture,
          repérer les informations clés, et comparer avec des offres du marché quand c’est possible.
          Notre objectif est clair : vous faire gagner du temps et vous donner de la visibilité, sans jargon.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>Une équipe orientée produit, simple et utile</h2>
        <p className={styles.p}>
          Nous construisons BillyCheck avec une obsession : une expérience fluide, rassurante, et compréhensible en quelques secondes.
          Pas besoin de compte, pas besoin d’installer quoi que ce soit.
        </p>
      </section>

      <Footer />
    </main>
  );
}
