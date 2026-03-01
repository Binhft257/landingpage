import Link from "next/link";

export default function RootPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-extrabold text-black">
          Choose your language
        </h1>

        <p className="mt-3 text-sm text-neutral-600">
          Chọn ngôn ngữ để tiếp tục vào landing page.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            href="/vi"
            className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Tiếng Việt
          </Link>

          <Link
            href="/en"
            className="inline-flex items-center justify-center rounded-xl border border-black bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-neutral-50"
          >
            English
          </Link>
        </div>
      </div>
    </main>
  );
}