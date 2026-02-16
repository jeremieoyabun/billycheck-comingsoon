import Link from "next/link";
import Footer from "../components/footer";
import styles from "./page.module.css";

export default function QuiSommesNousPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.kicker}>Qui sommes-nous</div>

        <h1 className={styles.h1}>
          Nous rendons les factures d’électricité <span>plus simples.</span>
        </h1>

        <p className={styles.lead}>
          BillyCheck est un outil conçu pour aider le grand public à comprendre sa facture,
          repérer les informations clés, et comparer avec des offres du marché quand c’est possible.
          Notre objectif est clair : vous faire gagner du temps et vous donner de la visibilité, sans jargon.
        </p>

        <div className={styles.ctas}>
          <Link href="/" className={`${styles.btn} ${styles.btnPrimary}`}>
            🔎 Checker ma facture
          </Link>

          <a href="mailto:contact@billycheck.com" className={`${styles.btn} ${styles.btnGhost}`}>
            ✉️ Nous contacter
          </a>
        </div>
      </section>

      {/* SECTION EQUIPE (2 colonnes comme l'app) */}
      <section className={styles.section}>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.h2}>Une équipe orientée produit, simple et utile</h2>
            <p className={styles.p}>
              Nous construisons BillyCheck avec une obsession : une expérience fluide, rassurante,
              et compréhensible en quelques secondes. Pas besoin de compte, pas besoin d’installer quoi que ce soit.
            </p>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>🧠 Clarté</div>
                <div className={styles.cardText}>Nous expliquons, nous simplifions, nous évitons le jargon.</div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>🔒 Confiance</div>
                <div className={styles.cardText}>Vos données ne servent qu’à produire votre résultat.</div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>⚡ Rapidité</div>
                <div className={styles.cardText}>Le but est de vous donner une réponse immédiatement.</div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>🎯 Utilité</div>
                <div className={styles.cardText}>Des recommandations simples, actionnables, et honnêtes.</div>
              </div>
            </div>
          </div>

          <div className={styles.imageWrap}>
            <img
              className={styles.image}
              src="/team.jpg"
              alt="Équipe BillyCheck"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
