import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glad Pre and Primary School (GPPS)",
  description:
    "GPPS is an English Medium School committed to Montessori excellence and Ubuntu values.",
};

function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition"
    >
      {label}
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        {/* Top Navigation */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 overflow-hidden rounded-xl border border-slate-200 bg-white">
                {/* simple logo image (optional) */}
                {/* If you ever want to remove this small logo, delete this Image and keep the title */}
                {/* We keep it lightweight (no next/image needed here) */}
                <img
                  src="/gpps/hero.jpg"
                  alt="GPPS"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-extrabold">GPPS</div>
                <div className="text-xs text-slate-500">Glad Pre & Primary School</div>
              </div>
            </Link>

            <nav className="hidden sm:flex items-center gap-1">
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About & Governance" />
              <NavLink href="/gallery" label="Gallery" />
              <NavLink href="/contact" label="Contact" />
            </nav>

            {/* Mobile quick menu */}
            <div className="sm:hidden flex items-center gap-2">
              <Link
                href="/about"
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
              >
                Menu
              </Link>
            </div>
          </div>
        </header>

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-slate-500">
            © {new Date().getFullYear()} Glad Pre and Primary School (GPPS) · Owned by Katoki Foundation
          </div>
        </footer>
      </body>
    </html>
  );
}
