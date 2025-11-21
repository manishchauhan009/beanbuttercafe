export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
        <span>© {new Date().getFullYear()} Bean &amp; Butter Café. All rights reserved.</span>
        <span>Demo landing page made by Manish for portfolio.</span>
      </div>
    </footer>
  )
}
