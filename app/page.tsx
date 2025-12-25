import Image from "next/image";
import Link from "next/link";
import ContactPanel from "./components/ContactPanel";

const homeImages = [
  { src: "/gpps/01.jpg", alt: "Learning time" },
  { src: "/gpps/02.jpg", alt: "Classroom activity" },
  { src: "/gpps/03.jpg", alt: "Outdoor play" },
  { src: "/gpps/04.jpg", alt: "Montessori work" },
  { src: "/gpps/06.jpg", alt: "Teamwork and sharing" },
  { src: "/gpps/07.jpg", alt: "School community" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Top Nav */}
      <header className="mx-auto w-full max-w-6xl px-4 py-6">
        <nav className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center overflow-hidden">
              <span className="text-slate-800 font-black">G</span>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">GPPS</p>
              <p className="text-sm font-bold text-slate-900">Glad Pre and Primary School</p>
            </div>
          </Link>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/about"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-50"
            >
              About & Governance
            </Link>
            <Link
              href="/gallery"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-50"
            >
              Gallery
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

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10">
        <div className="rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-xl overflow-hidden">
          {/* Logo */}
          <div className="px-6 pt-6 sm:px-10 sm:pt-10">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="max-w-3xl">
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                  Glad Pre and Primary School (GPPS)
                </h1>
                <p className="mt-3 text-base sm:text-lg text-slate-600">
                  An English Medium School committed to Montessori learning and Ubuntu values.
                </p>
              </div>

              <div className="w-full sm:w-[240px]">
                <div className="rounded-3xl bg-slate-50 border border-slate-200 p-3 shadow-sm">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
                    <Image
                      src="/gpps/hero.jpg"
                      alt="GPPS Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick cards */}
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900">School</h2>
                <p className="mt-2 text-slate-600">
                  Nursery · Kindergarten · Primary
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900">Values</h2>
                <p className="mt-2 text-slate-600">
                  Montessori practice, Ubuntu culture, safety, and warm community.
                </p>
              </div>

              {/* Director mini-card */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                    <Image
                      src="/gpps/director.jpg"
                      alt="Dr. Judith Namabira"
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Director</h2>
                    <p className="text-slate-700 font-semibold">Dr. Judith Namabira</p>
                    <p className="mt-1 text-slate-600 text-sm">
                      “Welcome to GPPS. We nurture confident learners through Montessori learning, Ubuntu values,
                      and a caring school culture.”
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition"
                  >
                    Read About & Governance →
                  </Link>
                </div>
              </div>
            </div>

            {/* Home images */}
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">A glimpse of school life</h2>
              <p className="mt-2 text-slate-600">
                A few moments from learning, play, and community at GPPS.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {homeImages.map((img) => (
                  <div
                    key={img.src}
                    className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-slate-800 font-semibold hover:bg-slate-50 transition"
                >
                  View full gallery →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact panel at bottom */}
      <ContactPanel />
    </main>
  );
}
