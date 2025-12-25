import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "GPPS | Glad Pre & Primary School",
  description: "Glad Pre and Primary School – English Medium, Montessori & Ubuntu values",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            {/* Logo + Name */}
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/gpps/hero.jpg"
                alt="Glad Pre and Primary School logo"
                className="h-12 w-12 rounded-full object-contain border border-slate-200"
              />
              <div>
                <p className="font-bold text-lg leading-tight">GPPS</p>
                <p className="text-sm text-slate-500">
                  Glad Pre & Primary School
                </p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex gap-6 text-sm font-semibold">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/about" className="hover:text-blue-600">About & Governance</Link>
              <Link href="/gallery" className="hover:text-blue-600">Gallery</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
