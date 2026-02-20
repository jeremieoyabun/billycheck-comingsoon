"use client";

import { useState } from "react";
import Footer from "./components/footer";

export default function Page() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("bad_response");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Tout le contenu dans un container centré */}
      <main className="container flex-1">
        <header className="header">
          <img src="/logo.png" alt="BillyCheck" style={{ height: 28 }} />

          <div className="navRight">
            <div className="pill">BÊTA BIENTÔT DISPONIBLE</div>
          </div>
        </header>

        <section className="hero">
          <img className="heroBilly" src="/billy_hero_animated.webp" alt="Billy" />

          <h1 className="h1">
            Scanne ta facture.
            <br />
            <span className="accent">Billy trouve mieux.</span>
          </h1>

          <p className="sub">
            Nous analysons automatiquement ta facture d’énergie et comparons des offres disponibles,
            selon ton profil de consommation. Simple, rapide, transparent.
          </p>

          {/* ✅ AJOUT : Télécom teaser (petit, clair, non intrusif) */}
          <p className="sub" style={{ marginTop: 10, opacity: 0.9 }}>
            <strong>Nouveau :</strong> bientôt aussi sur les <strong>factures télécom</strong> (mobile, internet, TV),
            pour repérer les options inutiles et trouver un forfait plus adapté.
          </p>

          <div className="waitlist">
            <form className="form" onSubmit={onSubmit}>
              <input
                className="input"
                type="email"
                placeholder="ton@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
              />
              <button className="btn" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Envoi..." : "Rejoindre la liste"}
              </button>
            </form>
          </div>

          {status === "ok" && <div className="note">Merci. Nous te prévenons au lancement.</div>}
          {status === "error" && <div className="note">Oups. Réessaie dans un instant.</div>}

          <div className="note">Un seul email au lancement. Jamais de spam.</div>
        </section>

        <section className="section">
          <div className="sectionTitle">Comment ça marche ?</div>
          <div className="sectionSub">Trois étapes. 30 secondes. C’est tout.</div>

          <div className="cards">
            <div className="card">
              <div className="cardTitle">📄 Envoie ta facture</div>
              <div className="cardText">Photo, PDF ou capture d’écran. Tout marche.</div>
            </div>

            <div className="card">
              <div className="cardTitle">🤖 Billy analyse</div>
              <div className="cardText">Nous extrayons les infos utiles pour comparer correctement.</div>
            </div>

            <div className="card">
              <div className="cardTitle">💸 Tu vois le meilleur choix</div>
              <div className="cardText">Comparaison claire et estimation annuelle en quelques secondes.</div>
            </div>
          </div>
        </section>

        {/* ✅ AJOUT : section Télécom dédiée */}
        <section className="section">
          <div className="sectionTitle">Et pour les télécoms ?</div>
          <div className="sectionSub">Même logique, même simplicité. Bientôt.</div>

          <div className="cards">
            <div className="card">
              <div className="cardTitle">📶 Mobile</div>
              <div className="cardText">Data, appels, options… on repère ce que tu paies sans l’utiliser.</div>
            </div>

            <div className="card">
              <div className="cardTitle">🌐 Internet</div>
              <div className="cardText">Vitesse, promo, durée, frais cachés… on compare à profil équivalent.</div>
            </div>

            <div className="card">
              <div className="cardTitle">📺 TV / Packs</div>
              <div className="cardText">On détecte les bundles “trop larges” et les alternatives plus rentables.</div>
            </div>
          </div>

          <div className="note" style={{ marginTop: 10 }}>
            Objectif : te montrer rapidement une option plus adaptée, avec une comparaison lisible.
          </div>
        </section>
      </main>

      {/* ✅ Footer en full width */}
      <Footer />
    </div>
  );
}