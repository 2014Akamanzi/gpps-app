import Link from "next/link";
import Image from "next/image";

const images = [
  "/gpps/01.jpg",
  "/gpps/02.jpg",
  "/gpps/03.jpg",
  "/gpps/04.jpg",
  "/gpps/06.jpg",
  "/gpps/07.jpg",
  "/gpps/08.jpg",
  "/gpps/09.jpg",
  "/gpps/10.jpg",
  "/gpps/11.jpg",
  "/gpps/12.jpg",
  "/gpps/13.jpg",
  "/gpps/14.jpg",
  "/gpps/hero.jpg",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
            aria-label="Back to home"
          >
            <span aria-hidden>←</span> Back to Home
          </Link>

          <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            GPPS · Gallery
          </span>
        </div>

        {/* Header */}
        <div className="mt-6 rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-xl p-6 sm:p-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Glad Pre and Primary School
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            A glimpse of school life, learning spaces, and our community.
          </p>

          {/* Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {images.map((src) => (
              <div
                key={src}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={src}
                    alt="GPPS photo"
                    fill
                    className="object-cover group-hover:scale-[1.02] transition"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={src.endsWith("hero.jpg")}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-slate-500">
            Total photos: <span className="font-semibold text-slate-700">{images.length}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
