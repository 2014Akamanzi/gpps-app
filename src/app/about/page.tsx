import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            About GPPS
          </h1>
          <Link
            href="/"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Content */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
          <p className="text-slate-700 leading-relaxed">
            Glad Pre and Primary School (GPPS) is an English-medium school committed to
            strong foundations in literacy, numeracy, character, and confidence. We are
            guided by Montessori-inspired learning approaches and Ubuntu values that
            emphasise respect, responsibility, kindness, and community.
          </p>

          {/* Director section */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-full sm:w-1/3">
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <Image
                  src="/gpps/director.jpg"
                  alt="Director of Glad Pre and Primary School"
                  width={400}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                Director
              </h2>
              <p className="text-slate-700 leading-relaxed">
                The Director of Glad Pre and Primary School provides leadership grounded
                in educational excellence, care for children, and strong ethical values.
                Under this leadership, GPPS focuses on nurturing disciplined, curious,
                and confident learners prepared for lifelong learning.
              </p>

              <p className="text-sm text-slate-500">
                (Director’s name and full profile can be added once finalised.)
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
            <h2 className="text-lg font-bold text-slate-900">
              Our educational values
            </h2>
            <div className="mt-3 space-y-2 text-slate-700">
              <p>
                <span className="font-semibold">Montessori-inspired learning:</span>{" "}
                child-centred, structured, and practical.
              </p>
              <p>
                <span className="font-semibold">Ubuntu philosophy:</span>{" "}
                nurturing humanity, empathy, and responsibility.
              </p>
              <p>
                <span className="font-semibold">Safe learning environment:</span>{" "}
                disciplined, caring, and growth-oriented.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
