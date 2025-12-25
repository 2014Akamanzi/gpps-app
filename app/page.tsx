import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto w-full max-w-6xl space-y-16">

        {/* =========================
            HEADER / LOGO
        ========================== */}
        <section className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-3xl bg-white border border-slate-200 shadow-sm p-4">
              <Image
                src="/gpps/hero.jpg"
                alt="Glad Pre and Primary School (GPPS) logo"
                width={900}
                height={900}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Glad Pre and Primary School (GPPS)
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            An English Medium School committed to Montessori excellence and
            Ubuntu values — nurturing confident, curious, and caring learners.
          </p>
        </section>

        {/* =========================
            DIRECTOR WELCOME
        ========================== */}
        <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 sm:p-10">
          <div className="grid gap-8 sm:grid-cols-[180px_1fr] items-start">
            <div className="flex justify-center">
              <Image
                src="/gpps/director.jpg"
                alt="Dr. Judith Namabira, Director of GPPS"
                width={180}
                height={180}
                className="rounded-2xl object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                A welcome from the Director
              </h2>

              <p className="mt-1 text-sm font-semibold text-slate-500">
                Dr. Judith Namabira · Director, GPPS
              </p>

              <p className="mt-4 text-slate-700 leading-relaxed">
                Welcome to Glad Pre and Primary School. At GPPS, we believe that
                education is not only about academic excellence, but also about
                nurturing character, curiosity, and compassion. Guided by
                Montessori principles and grounded in Ubuntu values, our school
                provides a warm, safe, and stimulating environment where every
                child is encouraged to grow, explore, and thrive.
              </p>

              <p className="mt-4 text-slate-700 leading-relaxed">
                We are committed to working closely with parents and the wider
                community to support each learner’s holistic development and
                lifelong love for learning.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            GALLERY PREVIEW (6 IMAGES)
        ========================== */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Life at GPPS
            </h2>

            <Link
              href="/gallery"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              View full gallery →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "01.jpg",
              "02.jpg",
              "03.jpg",
              "04.jpg",
              "06.jpg",
              "07.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-slate-200 bg-white"
              >
                <Image
                  src={`/gpps/${img}`}
                  alt="GPPS school activity"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            CONTACT INFORMATION
        ========================== */}
        <section className="rounded-3xl bg-blue-600 text-white p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Contact Glad Pre and Primary School
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-center text-blue-100">
            For admissions enquiries, school visits, or general information,
            please reach out to us using the contacts below.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="font-semibold text-lg">Telephone</h3>
              <p className="mt-2 text-blue-100">
                +255 690 154 334
              </p>
              <p className="text-blue-100">
                +255 690 154 332 <span className="text-sm">(WhatsApp)</span>
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="mt-2 text-blue-100">
                General enquiries: <br />
                <span className="font-medium">info.gpps@katokifoundation.org</span>
              </p>
              <p className="mt-2 text-blue-100">
                Director: <br />
                <span className="font-medium">
                  director.gpps@katokifoundation.org
                </span>
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
