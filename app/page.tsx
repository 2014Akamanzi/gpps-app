import Link from "next/link";

const previewImages = [
  { src: "/gpps/01.jpg", alt: "Learning time" },
  { src: "/gpps/02.jpg", alt: "Classroom activity" },
  { src: "/gpps/03.jpg", alt: "Outdoor play" },
  { src: "/gpps/04.jpg", alt: "Creative learning" },
  { src: "/gpps/06.jpg", alt: "Group work" },
  { src: "/gpps/07.jpg", alt: "School moments" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Top bounded hero panel */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-2 items-start">
              {/* Left: Title */}
              <div>
                <p className="text-sm font-semibold text-slate-500">GPPS</p>
                <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                  Glad Pre and Primary School (GPPS)
                </h1>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                  An English Medium School committed to Montessori learning and Ubuntu values.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 shadow-sm hover:bg-slate-50 transition"
                  >
                    About & Governance
                  </Link>

                  <Link
                    href="/gallery"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 shadow-sm hover:bg-slate-50 transition"
                  >
                    Gallery
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 transition"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Right: Logo panel */}
              <div className="md:flex md:justify-end">
                <div className="w-full md:w-[360px] rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="rounded-2xl bg-white border border-slate-200 p-4 flex items-center justify-center">
                    <img
                      src="/gpps/hero.jpg"
                      alt="GPPS Logo"
                      className="w-full max-w-[260px] h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Three bounded cards */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
                <h2 className="text-xl font-bold text-slate-900">School</h2>
                <p className="mt-3 text-slate-600">
                  Nursery · Kindergarten · Primary
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
                <h2 className="text-xl font-bold text-slate-900">Values</h2>
                <p className="mt-3 text-slate-600">
                  Montessori practice, Ubuntu culture, safety, and a warm community.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/gpps/director.jpg"
                    alt="Dr. Judith Namabira"
                    className="h-14 w-14 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Director</p>
                    <p className="text-lg font-bold text-slate-900">
                      Dr. Judith Namabira
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-slate-600">
                  “Welcome to GPPS. We nurture confident learners through Montessori learning,
                  Ubuntu values, and a caring school culture.”
                </p>

                <Link
                  href="/about"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 transition"
                >
                  Read About & Governance →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glimpse section with boundaries */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 md:p-10">
          <h2 className="text-3xl font-extrabold text-slate-900">
            A glimpse of school life
          </h2>
          <p className="mt-3 text-slate-600">
            A few moments from learning, play, and community at GPPS.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {previewImages.map((img) => (
              <div
                key={img.src}
                className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-56 w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 shadow-sm hover:bg-slate-50 transition"
            >
              View full gallery →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
