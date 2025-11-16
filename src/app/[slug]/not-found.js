import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Pagina niet gevonden
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, de pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1795FF] text-white font-semibold rounded-full hover:bg-blue-600 transition-colors"
          >
            Terug naar home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
