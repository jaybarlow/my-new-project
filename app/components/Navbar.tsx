import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full bg-gray-900 text-white">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          MyProject
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/features" className="hover:text-gray-300 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-gray-300 transition-colors">
            Pricing
          </Link>
        </div>
      </nav>
    </header>
  )
}
