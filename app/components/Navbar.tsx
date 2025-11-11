export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          MyProject
        </div>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="#features" className="hover:text-gray-300 transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-gray-300 transition-colors">
            Pricing
          </a>
        </div>
      </nav>
    </header>
  )
}
