import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <h1 className="text-4xl font-extrabold text-slate-900">About & Governance</h1>

        <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 sm:p-10 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Ownership</h2>
          <p className="text-slate-700 leading-relaxed">
            Glad Pre and Primary School (GPPS) is owned by the Katoki Foundation.
            The school exists to provide high-quality English Medium education,
            anchored in Montessori practice and Ubuntu values.
          </p>
        </section>

        <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 sm:p-10 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Governance structure</h2>
          <p className="text-slate-700 leading-relaxed">
            GPPS is guided by a clear governance model that supports accountability,
            learning quality, and child wellbeing.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">School Board</h3>
              <p className="mt-2 text-sm text-slate-700">
                Provides strategic oversight, policy guidance, and long-term direction for GPPS.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Parents–Teachers Association (PTA)</h3>
              <p className="mt-2 text-sm text-slate-700">
                Strengthens collaboration between parents and educators to support learners and school culture.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Management Team</h3>
              <p className="mt-2 text-sm text-slate-700">
                Runs day-to-day operations through the Manager, Head Teacher, and Administrator.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900">Director</h2>

          <div className="mt-6 grid gap-8 sm:grid-cols-[180px_1fr] items-start">
            <div className="flex justify-center">
              <Image
                src="/gpps/director.jpg"
                alt="Dr. Judith Namabira, Director of GPPS"
                width={180}
                height={180}
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-3">
              <p className="text-lg font-semibold text-slate-900">Dr. Judith Namabira</p>
              <p className="text-slate-700 leading-relaxed">
                Dr. Judith Namabira is the Director of GPPS, bringing extensive academic, leadership,
                and management experience spanning over two decades. She holds a PhD in Management Studies,
                an MBA, a Postgraduate Diploma in Management Studies, and a BA in Ethics and Development Studies.
                She is currently a senior lecturer at the Institute of Rural Development Planning in Dodoma
                and has served in leadership roles including Head of Department and Programme Coordinator.
                Her work includes curriculum design, strategic planning, human resource development,
                and entrepreneurship education. She is an accomplished researcher with peer-reviewed publications
                focusing on management, technology adoption, gender, and development. Fluent in English,
                Swahili, and Luganda, she combines academic rigour with practical leadership.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition"
              >
                Contact GPPS
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
