import Link from "next/link";

export default function GladSchoolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-12">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
          >
            ← Back to Home
          </Link>
          <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Katoki Foundation · Glad Schools
          </span>
        </div>

        <div className="mt-6 rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Glad Schools
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Glad Schools covers our education pathway from early learning to primary, with plans for secondary
            education in the near future.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">Glad Nursery</h2>
              <p className="mt-2 text-slate-600">
                Early childhood development with a warm, structured environment.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">Glad Pre & Primary School (GPPS)</h2>
              <p className="mt-2 text-slate-600">
                English Medium School committed to Montessori learning and Ubuntu values.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">Secondary School (coming soon)</h2>
              <p className="mt-2 text-slate-600">
                Vocational and entrepreneurial focus is planned as the next step.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">Admissions & enquiries</h2>
              <p className="mt-2 text-slate-600">
                Add your official contact details here (email, phone, WhatsApp) once confirmed.
              </p>
            </div>
          </div>

          <div className="mt-10 text-sm text-slate-500">
            Next step: link GPPS to its own dedicated app at <span className="font-semibold">gpps.katokifoundation.org</span>.
          </div>
        </div>
      </div>
    </main>
  );
}
