export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <h1 className="text-4xl font-extrabold text-slate-900">Contact</h1>

        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 sm:p-10 space-y-6">
          <p className="text-slate-700">
            For admissions enquiries, school visits, or general information, please reach out:
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-bold text-slate-900">Telephone</h2>
              <p className="mt-2 text-slate-700">+255 690 154 334</p>
              <p className="text-slate-700">
                +255 690 154 332 <span className="text-sm">(WhatsApp)</span>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-bold text-slate-900">Email</h2>
              <p className="mt-2 text-slate-700">
                General: <span className="font-semibold">info.gpps@katokifoundation.org</span>
              </p>
              <p className="mt-2 text-slate-700">
                Director: <span className="font-semibold">director.gpps@katokifoundation.org</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
