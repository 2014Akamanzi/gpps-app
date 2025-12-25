import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto w-full max-w-6xl px-4 pt-10 pb-8">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 sm:p-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            About &amp; Governance
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            GPPS is an English Medium School committed to Montessori learning and Ubuntu values,
            owned by the Katoki Foundation.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900">Governance structure</h2>

              <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  GPPS is owned by the Katoki Foundation and is guided by a School Board, which provides
                  strategic oversight and ensures that the school remains faithful to its educational mission,
                  Montessori practice, and Ubuntu culture.
                </p>
                <p>
                  The school also has a Parents-Teachers-Association (PTA) which supports collaboration between
                  families and the school community, and strengthens shared responsibility for learners’ growth.
                </p>
                <p>
                  Day-to-day activities are managed by the Management Team composed of the Manager, Head Teacher,
                  and Administrator, responsible for operations, academic coordination, safeguarding, and
                  communication with parents and stakeholders.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  ← Back to Home
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
                >
                  Contact GPPS
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
                  <Image
                    src="/gpps/director.jpg"
                    alt="Dr. Judith Namabira"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600">Director</p>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Dr. Judith Namabira
                  </h3>
                </div>
              </div>

              <div className="mt-4 text-slate-700 leading-relaxed space-y-3">
                <p>
                  Dr. Judith Namabira is the Director of GPPS, bringing extensive academic, leadership,
                  and management experience spanning over two decades.
                </p>
                <p>
                  She holds a PhD in Management Studies, an MBA, a Postgraduate Diploma in Management Studies,
                  and a BA in Ethics and Development Studies. She is currently a senior lecturer at the
                  Institute of Rural Development Planning in Dodoma.
                </p>
                <p>
                  Her work includes curriculum design, strategic planning, human resource development, and
                  entrepreneurship education. She is an accomplished researcher with peer-reviewed publications
                  focusing on management, technology adoption, gender, and development.
                </p>
                <p>
                  Fluent in English, Swahili, and Luganda, she combines academic rigour with practical leadership,
                  providing strategic direction and visionary leadership to GPPS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUE CONTACT PANEL */}
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
