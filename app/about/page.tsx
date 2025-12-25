import Image from "next/image";
import Link from "next/link";
import ContactPanel from "../components/ContactPanel";

export default function AboutGovernancePage() {
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

      <section className="mx-auto w-full max-w-6xl px-4 pb-10">
        <div className="rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-xl p-6 sm:p-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            About & Governance
          </h1>

          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-4xl">
            Glad Pre and Primary School (GPPS) is an English Medium School committed to Montessori practice and Ubuntu
            values. GPPS is owned by the Katoki Foundation and operates with clear governance structures that support
            quality learning, accountability, and a strong school community.
          </p>

          {/* Governance block */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-slate-900">Governance structure</h2>

              <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <span className="font-semibold">Ownership:</span> GPPS is owned by the <span className="font-semibold">Katoki Foundation</span>.
                </p>
                <p>
                  <span className="font-semibold">School Board:</span> The School Board provides the highest level of oversight,
                  ensuring strategic direction, accountability, and policy guidance.
                </p>
                <p>
                  <span className="font-semibold">Parents–Teachers Association (PTA):</span> The PTA strengthens partnership between
                  families and the school community and supports school improvement activities.
                </p>
                <p>
                  <span className="font-semibold">Management Team:</span> Day-to-day activities are run by the Management Team composed of the
                  <span className="font-semibold"> Manager</span>, <span className="font-semibold">Head Teacher</span>, and <span className="font-semibold">Administrator</span>.
                </p>
              </div>
            </div>

            {/* Director */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-slate-900">Director</h2>

              <div className="mt-5 flex flex-col sm:flex-row gap-5">
                <div className="h-28 w-28 rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                  <Image
                    src="/gpps/director.jpg"
                    alt="Dr. Judith Namabira"
                    width={224}
                    height={224}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="text-slate-700 leading-relaxed">
                  <p className="text-lg font-bold text-slate-900">Dr. Judith Namabira</p>
                  <p className="mt-2">
                    Dr. Judith Namabira is the Director of GPPS, bringing extensive academic, leadership, and management
                    experience spanning over two decades. She holds a PhD in Management Studies, an MBA, a Postgraduate
                    Diploma in Management Studies, and a BA in Ethics and Development Studies.
                  </p>
                  <p className="mt-3">
                    Currently a senior lecturer at the Institute of Rural Development Planning in Dodoma, she has served in
                    various leadership roles including Head of Department and Programme Coordinator, and has been deeply
                    involved in curriculum design, strategic planning, human resource development, and entrepreneurship education.
                  </p>
                  <p className="mt-3">
                    Dr. Namabira is an accomplished researcher with numerous peer-reviewed publications focusing on management,
                    technology adoption, gender, and development. Fluent in English, Swahili, and Luganda, she combines academic
                    rigour with practical leadership, making her well placed to provide strategic direction and visionary leadership to GPPS.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition"
                >
                  Enquire about GPPS →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactPanel />
    </main>
  );
}
