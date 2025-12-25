import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-12">
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
          >
            ← Back to Home
          </Link>
          <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            GPPS · How it works
          </span>
        </div>

        <div className="mt-6 rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            How GPPS Works
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            This page explains how a parent or partner can engage with Glad Pre & Primary School (GPPS),
            from enquiry to admission and ongoing communication.
          </p>

          <div className="mt-8 grid gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">1) Enquiry</h2>
              <p className="mt-2 text-slate-600">
                Contact the school using email or WhatsApp. Share the learner’s age, class level of interest,
                and any relevant needs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">2) School visit</h2>
              <p className="mt-2 text-slate-600">
                If possible, arrange a visit to meet the team, see the learning environment, and ask questions
                about the Montessori approach and Ubuntu values in practice.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">3) Admission guidance</h2>
              <p className="mt-2 text-slate-600">
                The school will guide you on the admission process, the required documents, and the start date.
                (You can update this section later with your exact requirements.)
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">4) Ongoing communication</h2>
              <p className="mt-2 text-slate-600">
                Parents stay informed through official school channels. For best clarity, the school should keep
                one primary email address and one WhatsApp number for enquiries.
              </p>
            </div>
          </div>

          <div className="mt-10 text-sm text-slate-500">
            Tip: Keep this page short and practical. It should reduce repeated questions and guide parents smoothly.
          </div>
        </div>
      </div>
    </main>
  );
}
