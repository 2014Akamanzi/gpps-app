import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Blue contact block */}
      <section className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="rounded-[48px] bg-blue-600 px-6 py-12 sm:px-12 sm:py-16 shadow-xl">
          <h1 className="text-center text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Contact Glad Pre and Primary School
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-center text-base sm:text-xl text-white/90">
            For admissions enquiries, school visits, or general information, please reach out to us using
            the contacts below.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Telephone */}
            <div className="rounded-[36px] bg-white/15 px-8 py-10 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Telephone</h2>

              <div className="mt-6 space-y-3 text-lg sm:text-2xl text-white/95">
                <a className="block hover:underline" href="tel:+255690154334">
                  +255 690 154 334
                </a>
                <a className="block hover:underline" href="tel:+255690154332">
                  +255 690 154 332 <span className="text-white/85 text-base sm:text-xl">(WhatsApp)</span>
                </a>
              </div>

              <p className="mt-6 text-sm sm:text-base text-white/85">
                If calling from outside Tanzania, ensure your phone plan supports international calling.
              </p>
            </div>

            {/* Email */}
            <div className="rounded-[36px] bg-white/15 px-8 py-10 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Email</h2>

              <div className="mt-6 space-y-5 text-white/95">
                <div>
                  <p className="text-base sm:text-lg font-semibold text-white/90">General enquiries:</p>
                  <a className="mt-1 block text-lg sm:text-2xl hover:underline" href="mailto:info.gpps@katokifoundation.org">
                    info.gpps@katokifoundation.org
                  </a>
                </div>

                <div>
                  <p className="text-base sm:text-lg font-semibold text-white/90">Director:</p>
                  <a
                    className="mt-1 block text-lg sm:text-2xl hover:underline"
                    href="mailto:director.gpps@katokifoundation.org"
                  >
                    director.gpps@katokifoundation.org
                  </a>
                </div>
              </div>

              <p className="mt-6 text-sm sm:text-base text-white/85">
                We typically respond within 1–2 working days.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-bold text-blue-700 shadow-md hover:bg-slate-50"
            >
              About & Governance →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
