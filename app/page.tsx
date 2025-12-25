import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Page container */}
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        {/* Hero */}
        <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold text-slate-600">GPPS</p>
              <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Glad Pre and Primary School (GPPS)
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                An English Medium School committed to Montessori learning and Ubuntu values.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  About &amp; Governance
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  Gallery
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-blue-700 transition"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              {/* Use the logo file you already have: public/gpps/hero.jpg */}
              <img
                src="/gpps/hero.jpg"
                alt="GPPS logo"
                className="w-full h-auto rounded-2xl bg-white object-contain"
              />
            </div>
          </div>

          {/* Quick cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">School</h2>
              <p className="mt-2 text-slate-600">Nursery · Kindergarten · Primary</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Values</h2>
              <p className="mt-2 text-slate-600">
                Montessori practice, Ubuntu culture, safety, and warm community.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                {/* IMPORTANT: no onError handler (avoids the Next runtime error you saw) */}
                <img
                  src="/gpps/director.jpg"
                  alt="Dr. Judith Namabira"
                  className="h-14 w-14 rounded-2xl border border-slate-200 object-cover bg-slate-100"
                />
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Director</h2>
                  <p className="mt-1 font-semibold text-slate-800">Dr. Judith Namabira</p>
                  <p className="mt-2 text-slate-600">
                    “Welcome to GPPS. We nurture confident learners through Montessori learning,
                    Ubuntu values, and a caring school culture.”
                  </p>

                  <Link
                    href="/about"
                    className="mt-4 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition"
                  >
                    Read About &amp; Governance →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Glimpse images (keep 6 on home) */}
          <div className="mt-12">
            <h2 className="text-2xl font-extrabold text-slate-900">A glimpse of school life</h2>
            <p className="mt-2 text-slate-600">
              A few moments from learning, play, and community at GPPS.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {["01.jpg", "02.jpg", "03.jpg", "04.jpg", "06.jpg", "07.jpg"].map((f) => (
                <div key={f} className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
                  <img
                    src={`/gpps/${f}`}
                    alt="GPPS photo"
                    className="w-full h-56 rounded-2xl object-cover bg-slate-100"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50 transition"
              >
                View full gallery →
              </Link>
            </div>
          </div>
        </section>

        {/* ✅ Blue Contact Frame (same style as your Contact page) */}
        <section className="mt-10">
          <div className="rounded-[40px] bg-blue-600 px-6 py-10 sm:px-10 sm:py-12 shadow-md">
            <h2 className="text-center text-3xl sm:text-5xl font-extrabold text-white">
              Contact Glad Pre and Primary School
            </h2>
            <p className="mt-4 text-center text-lg sm:text-2xl text-white/90">
              For admissions enquiries, school visits, or general information, please reach out to us using
              the contacts below.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-white/10 border border-white/10 p-8">
                <h3 className="text-3xl font-extrabold text-white">Telephone</h3>
                <p className="mt-6 text-2xl text-white font-semibold">+255 690 154 334</p>
                <p className="mt-3 text-2xl text-white font-semibold">
                  +255 690 154 332 <span className="text-white/80 font-normal">(WhatsApp)</span>
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 border border-white/10 p-8">
                <h3 className="text-3xl font-extrabold text-white">Email</h3>

                <p className="mt-6 text-2xl text-white/90">
                  <span className="font-semibold text-white">General enquiries:</span>
                  <br />
                  info.gpps@katokifoundation.org
                </p>

                <p className="mt-6 text-2xl text-white/90">
                  <span className="font-semibold text-white">Director:</span>
                  <br />
                  director.gpps@katokifoundation.org
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-blue-700 font-extrabold shadow-sm hover:bg-white/90 transition"
              >
                Open Contact Page →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
