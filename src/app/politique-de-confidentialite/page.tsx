import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Politique de confidentialité | BillyCheck",
  description: "Politique de confidentialité et informations RGPD du service BillyCheck.",
};

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-bold text-slate-900">{children}</h2>;
}

export default function PolitiqueConfidentialitePage() {
  const COMPANY = "ENNAVA (SAS)";
  const ADDRESS = "3 rue de la Lune, 75002 Paris, France";
  const CONTACT_EMAIL = "contact@billycheck.com";
  const SERVICE = "BillyCheck";

  return (
    <LegalPage title="Politique de confidentialité" updatedAt="17/02/2026">
      <section className="space-y-5">
        <h2 className="text-xl font-bold text-slate-900">Responsable de traitement</h2>
        <p className="text-sm leading-6 text-slate-700">
          Le responsable de traitement est {COMPANY}, {ADDRESS}. Contact :{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-bold text-slate-900">Données traitées</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700 font-semibold">2.1 Données fournies par l’utilisateur</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Lors de l’utilisation du service, l’utilisateur peut téléverser un document (par exemple une facture).
          Ce document peut contenir des données personnelles selon son contenu, notamment : informations contractuelles,
          données de consommation, montants facturés, périodes de facturation, intitulés tarifaires.
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-700 font-semibold">2.2 Données extraites et structurées</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          À partir du document téléversé, {SERVICE} extrait et structure certaines données nécessaires à l’analyse,
          aux estimations et aux comparaisons affichées.
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-700 font-semibold">2.3 Données techniques</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Des données techniques peuvent être collectées, notamment : adresse IP, journaux d’accès, informations relatives
          au navigateur et à l’appareil, données de sécurité et de prévention des abus.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-bold text-slate-900">Finalités du traitement</h2>
        <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-700 space-y-2">
          <li>Fournir le service d’analyse et d’extraction demandé par l’utilisateur.</li>
          <li>Afficher des résultats informatifs, estimations et comparaisons d’offres partenaires.</li>
          <li>Assurer la sécurité du service, prévenir les usages abusifs et la fraude.</li>
          <li>Améliorer le service et assurer le support utilisateur.</li>
          <li>Mesurer l’audience et les performances du service, lorsque cela est activé.</li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-bold text-slate-900">Bases légales</h2>
        <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-700 space-y-2">
          <li>Exécution du service demandé par l’utilisateur (exécution contractuelle).</li>
          <li>Intérêt légitime d’{COMPANY} (sécurité, prévention des abus, amélioration du service).</li>
          <li>Consentement de l’utilisateur lorsque requis (notamment pour les cookies non essentiels).</li>
          <li>Respect d’obligations légales applicables.</li>
        </ul>
      </section>

      {/* Autres sections ici */}
    </LegalPage>
  );
}
