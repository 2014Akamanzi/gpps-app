import Link from "next/link";

type Props = {
  showBackToHome?: boolean;
};

export default function ContactPanel({ showBackToHome = false }: Props) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="rounded-[48px] bg-blue-600 px-6 py-12 sm:px-12 sm:py-16 shadow-xl">
        {showBackToHome ? (
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm hover:bg-slate-50"
            >
              ← Back to Home
            </Link>
          </div>
        ) : null}

        <h2 className="text-center text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Contact Glad Pre and Primary School
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-base sm:text-xl text-white/90">
          For admissions enquiries, school visits, or general information, please reach out to us using
          the contacts below.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Telephone */}
          <div className="rounded-[36px] bg-white/15 px-8 py-10 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Telephone</h3>

            <div className="mt-6 space-y-3 text-lg sm:text-2xl text-white/95">
              <a className="block hover:underline" href="tel:+255690154334">
                +255 690 154 334
              </a>
              <a className="block hover:underline" href="tel:+255690154332">
                +255 690 154 332 <span className="text-white/85 text-base sm:text-xl">(WhatsApp)</span>
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="rounded-[36px] bg-white/15 px-8 py-10 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Email</h3>

            <div className="mt-6 space-y-5 text-white/95">
              <div>
                <p className="text-base sm:text-lg font-semibold text-white/90">General enquiries:</p>
                <a
                  className="mt-1 block text-lg sm:text-2xl hover:underline"
                  href="mailto:info.gpps@katokifoundation.org"
                >
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
          </div>
        </div>
      </div>
    </section>
  );
}
