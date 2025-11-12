import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex gap-8 items-center overflow-x-auto scrollbar-hide whitespace-nowrap">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/features" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}
