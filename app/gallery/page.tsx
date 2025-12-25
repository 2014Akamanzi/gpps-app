import Image from "next/image";
import Link from "next/link";

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
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-slate-900">
            GPPS Gallery
          </h1>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            ← Back to home
          </Link>
        </div>

        {/* Image grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100"
            >
              <Image
                src={src}
                alt={`GPPS image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
