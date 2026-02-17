import LegalPage from "../components/LegalPage";
import Link from "next/link";

export const metadata = {
  title: "Conditions Générales d’Utilisation | BillyCheck",
  description: "Conditions Générales d’Utilisation (CGU) du service BillyCheck.",
};

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-bold text-slate-900">{children}</h2>;
}

export default function CGUPage() {
  const SERVICE = "BillyCheck";
  const COMPANY = "ENNAVA";
  const CONTACT_EMAIL = "contact@billycheck.com";

  return (
    <LegalPage title="Conditions Générales d’Utilisation" updatedAt="17/02/2026">
      <section className="space-y-5">
        <h2 className="text-xl font-bold text-slate-900">Objet</h2>
        <p className="text-sm leading-6 text-slate-700">
          Les présentes CGU encadrent l’accès et l’utilisation du service {SERVICE} édité par {COMPANY}.
          En utilisant {SERVICE}, l’utilisateur accepte les présentes CGU.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-bold text-slate-900">Description du service</h2>
        <p className="text-sm leading-6 text-slate-700">
          {SERVICE} permet à l’utilisateur de téléverser un document (ex: facture) afin d’en extraire certaines données
          et d’afficher des estimations, comparaisons ou résultats informatifs, incluant des offres de partenaires.
        </p>
        <p className="text-sm leading-6 text-slate-700">
          Le service repose en partie sur des traitements automatisés. Les résultats peuvent contenir des erreurs,
          approximations ou omissions.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-bold text-slate-900">Conditions d’accès</h2>
        <ul className="list-disc pl-5 text-sm leading-6 text-slate-700 space-y-2">
          <li>
            L’utilisateur s’engage à fournir des informations exactes et à utiliser des documents qu’il est autorisé à partager.
          </li>
          <li>
            L’utilisateur garantit être titulaire des droits sur les documents téléversés ou disposer de l’autorisation nécessaire.
            La société ne saurait être tenue responsable du contenu des documents transmis.
          </li>
          <li>
            L’utilisateur s’engage à ne pas perturber le service (tests abusifs, contournement, surcharge, extraction automatisée non autorisée).
          </li>
          <li>
            La société se réserve le droit de suspendre l’accès au service en cas d’usage abusif, détourné ou frauduleux.
          </li>
          <li>
            La société se réserve le droit de rendre tout ou partie du service payant à l’avenir.
          </li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-bold text-slate-900">Aucune prestation de conseil, aucune promesse</h2>
        <ul className="list-disc pl-5 text-sm leading-6 text-slate-700 space-y-2">
          <li>
            {SERVICE} ne fournit aucun conseil financier, juridique, fiscal, énergétique ou de courtage. Les informations affichées
            sont générales et indicatives.
          </li>
          <li>
            {SERVICE} ne fait aucune promesse d’économie, de gain, de réduction de facture ou d’amélioration de contrat.
          </li>
          <li>
            {SERVICE} n’a aucune obligation de résultat. Les résultats peuvent varier selon la qualité du document, les formats,
            les règles tarifaires, les données disponibles, et les mises à jour des partenaires.
          </li>
          <li>
            Les informations fournies ne doivent pas être interprétées comme une incitation, une recommandation personnalisée
            ou un élément déterminant de décision, et l’utilisateur demeure seul responsable de ses choix.
          </li>
        </ul>
      </section>

      {/* Autres sections ici, suivant le même modèle */}
    </LegalPage>
  );
}
