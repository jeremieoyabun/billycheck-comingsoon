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
    <LegalPage title="Politique de confidentialité" updatedAt="16/02/2026">
      <H>1. Responsable de traitement</H>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        Le responsable de traitement est {COMPANY}, {ADDRESS}. Contact:{" "}
        <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <H>2. Données traitées</H>
      <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-700 space-y-2">
        <li>
          Données fournies via document téléversé (ex: facture): informations utiles à l’analyse (montants, consommation,
          période, intitulés tarifaires). Le document peut contenir des données personnelles selon son contenu.
        </li>
        <li>Données extraites et structurées: chiffres et champs nécessaires aux estimations et comparaisons.</li>
        <li>
          Données techniques: adresse IP, journaux d’accès, informations de navigateur et d’appareil, données de sécurité
          et anti-fraude.
        </li>
      </ul>

      <H>3. Finalités</H>
      <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-700 space-y-2">
        <li>Fournir le service d’analyse et d’extraction.</li>
        <li>Afficher des estimations et comparaisons d’offres partenaires.</li>
        <li>Sécurité, prévention des abus, amélioration du service et support.</li>
        <li>Mesure d’audience et performance (si activé).</li>
      </ul>

      <H>4. Bases légales</H>
      <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-700 space-y-2">
        <li>Exécution du service demandé par l’utilisateur (exécution contractuelle).</li>
        <li>Intérêt légitime (sécurité, prévention des abus, amélioration).</li>
        <li>Consentement lorsque requis (ex: cookies non essentiels, selon configuration).</li>
        <li>Obligations légales (ex: gestion des demandes, conservation ciblée de logs si requis).</li>
      </ul>

      <H>5. Durées de conservation</H>
      <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-700 space-y-2">
        <li>
          Documents téléversés: suppression dès la fin de l’analyse ou dans un délai court nécessaire au traitement technique
          (principe de minimisation).
        </li>
        <li>
          Données extraites: conservées le temps nécessaire à l’affichage du résultat, à la gestion du support et à la lutte
          anti-fraude, puis supprimées ou anonymisées. Par défaut: durée courte recommandée (ex: 30 jours) à ajuster selon votre fonctionnement réel.
        </li>
        <li>
          Logs techniques: durée limitée (ex: 6 à 12 mois) pour sécurité et diagnostic, à ajuster selon votre stack et vos obligations.
        </li>
      </ul>

      <H>6. Destinataires et sous-traitants</H>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        Les données peuvent être traitées par des prestataires techniques agissant en tant que sous-traitants (hébergement,
        infrastructure, email, analytics, IA). Exemples possibles selon configuration:
      </p>
      <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-700 space-y-2">
        <li>Hébergement: Vercel Inc. (États-Unis).</li>
        <li>Traitement IA/extraction: fournisseur d’IA utilisé par le service (à compléter selon votre implémentation).</li>
        <li>Base de données et stockage: fournisseur cloud utilisé (à compléter).</li>
      </ul>

      <H>7. Transferts hors UE</H>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        Certains prestataires peuvent être situés hors de l’Union Européenne (ex: hébergement ou prestataire IA).
        Dans ce cas, des garanties appropriées peuvent être utilisées (ex: clauses contractuelles types, selon les prestataires).
      </p>

      <H>8. Sécurité</H>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        {SERVICE} met en place des mesures techniques et organisationnelles raisonnables pour protéger les données
        (contrôles d’accès, chiffrement en transit, journalisation, limitation des accès, etc.).
      </p>

      <H>9. Vos droits</H>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        Conformément au RGPD, vous disposez de droits (accès, rectification, effacement, limitation, opposition, portabilité
        lorsque applicable). Pour exercer vos droits, contactez:{" "}
        <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        Vous pouvez également introduire une réclamation auprès de la CNIL.
      </p>

      <H>10. Cookies</H>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        Le site peut utiliser des cookies strictement nécessaires au fonctionnement. Les cookies de mesure d’audience
        ou marketing, lorsqu’ils sont utilisés, peuvent nécessiter votre consentement selon la configuration mise en place.
      </p>
    </LegalPage>
  );
}
