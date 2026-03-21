export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#0F4C5C] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a
          href="/"
          className="inline-block bg-[#0F4C5C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#16697A] transition-colors"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
