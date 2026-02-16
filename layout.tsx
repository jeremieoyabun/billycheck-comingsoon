import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BillyCheck — Scanne ta facture. Billy trouve mieux.",
  description:
    "BillyCheck analyse automatiquement ta facture d’énergie et compare les meilleures offres pour te faire économiser chaque année.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
