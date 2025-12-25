import Image from "next/image";
import Link from "next/link";
import ContactPanel from "../components/ContactPanel";

const galleryImages = [
  "/gpps/01.jpg",
  "/gpps/02.jpg",
  "/gpps/03.jpg",
  "/gpps/04.jpg",
  "/gpps/06.jpg",
  "/gpps/07.jpg",
  "/gpps/08.jpg",
  "/gpps/09.jpg",
  "/gpps/10.jpg",
  "/gpps/11.jpg",
  "/gpps/12.jpg",
  "/gpps/13.jpg",
  "/gpps/14.jpg",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Top Nav */}
      <header className="mx-auto w-full max-w-6xl px-4 py-6">
        <nav className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="text-sm font-semibold text-slate-700 hover:underline">
            ← Back to Home
          </Link>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/about"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-50"
            >
              About & Governance
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto w-full max-w-6xl px-4 pb-10">
        <div className="rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-xl p-6 sm:p-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Gallery
          </h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Moments from learning, play, and community at GPPS.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src) => (
              <div
                key={src}
                className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={src} alt="GPPS gallery image" fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactPanel />
    </main>
  );
}
