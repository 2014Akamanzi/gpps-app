import Image from "next/image";
import Link from "next/link";

const previewImages = [
  { src: "/gpps/01.jpg", alt: "Learning time" },
  { src: "/gpps/02.jpg", alt: "Classroom activity" },
  { src: "/gpps/03.jpg", alt: "Outdoor play" },
  { src: "/gpps/04.jpg", alt: "Group learning" },
  { src: "/gpps/06.jpg", alt: "Creative activity" },
  { src: "/gpps/07.jpg", alt: "School community" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-10 pb-8">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 sm:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold text-slate-600">GPPS</p>
              <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Glad Pre and Primary School (GPPS)
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                An English Medium School committed to Montessori learning and Ubuntu values.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  About &amp; Governance
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/gpps/hero.jpg"
                    alt="GPPS logo"
                    fill
                    className="object-contain p-3"
                    priority
                  />
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  Learning today, leading tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* 3 CARDS */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">School</h2>
              <p className="mt-3 text-slate-600">Nursery · Kindergarten · Primary</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Values</h2>
              <p className="mt-3 text-slate-600">
                Montessori practice, Ubuntu culture, safety, and warm community.
              </p>
            </div>

            {/* DIRECTOR WELCOME (NO onError, so it won’t crash) */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
                  <Image
                    src="/gpps/director.jpg"
                    alt="Dr. Judith Namabira"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-600">Director</p>
                  <h3 className="text-lg font-bold text-slate-900">
                    Dr. Judith Namabira
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-slate-700 leading-relaxed">
                “Welcome to GPPS. We nurture confident learners through Montessori learning,
                Ubuntu values, and a caring school culture.”
              </p>

              <Link
                href="/about"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
              >
                Read About &amp; Governance →
              </Link>
            </div>
          </div>

          {/* PREVIEW GALLERY */}
          <div className="mt-12">
            <h2 className="text-2xl font-extrabold text-slate-900">
              A glimpse of school life
            </h2>
            <p className="mt-2 text-slate-600">
              A few moments from learning, play, and community at GPPS.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {previewImages.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50 transition"
              >
                View full gallery →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLUE CONTACT PANEL (same style as your screenshot) */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-14">
        <div className="rounded-[48px] bg-blue-600 text-white p-10 sm:p-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center">
            Contact Glad Pre and Primary School
          </h2>
          <p className="mt-4 text-center text-white/90 text-lg">
            For admissions enquiries, school visits, or general information, please reach out to us using
            the contacts below.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-10">
              <h3 className="text-3xl font-extrabold">Telephone</h3>
              <p className="mt-6 text-2xl font-semibold">+255 690 154 334</p>
              <p className="mt-4 text-2xl font-semibold">+255 690 154 332 (WhatsApp)</p>
            </div>

            <div className="rounded-3xl bg-white/10 p-10">
              <h3 className="text-3xl font-extrabold">Email</h3>
              <p className="mt-6 text-xl text-white/90">General enquiries:</p>
              <p className="mt-2 text-2xl font-semibold">info.gpps@katokifoundation.org</p>

              <p className="mt-6 text-xl text-white/90">Director:</p>
              <p className="mt-2 text-2xl font-semibold">director.gpps@katokifoundation.org</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
