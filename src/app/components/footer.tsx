"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="footerRoot border-t border-slate-200/60 bg-background">
      <div className="footerInner mx-auto max-w-6xl px-4 sm:px-5 py-8 text-center">

        <div className="footerLinks flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
          <Link href="/qui-sommes-nous" className="footerLink hover:text-slate-900 transition">
            Qui sommes-nous
          </Link>
          <Link href="/politique-de-confidentialite" className="footerLink hover:text-slate-900 transition">
            Politique de confidentialité
          </Link>
          <Link href="/cgu" className="footerLink hover:text-slate-900 transition">
            CGU
          </Link>
          <Link href="/mentions-legales" className="footerLink hover:text-slate-900 transition">
            Mentions légales
          </Link>
          <a href="mailto:contact@billycheck.com" className="footerLink hover:text-slate-900 transition">
            contact@billycheck.com
          </a>
        </div>

        <div className="footerNote mt-4 text-xs text-slate-400">
          BillyCheck © {new Date().getFullYear()} — Billy ne fournit pas de conseil financier ou juridique.
        </div>

      </div>
    </footer>
  );
}
