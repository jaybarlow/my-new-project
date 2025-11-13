import Navbar from './components/Navbar'
import Link from 'next/link'

// Extract repeated SVG pattern to avoid duplication
const GRID_PATTERN_BG = "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />

      {/* Hero Section with Animated Background */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-40 md:py-52 w-full overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient mt-16">
        {/* Floating Decorative Elements - Optimized blur for better performance */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply blur-decorative opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply blur-decorative opacity-30 animate-float animation-delay-200"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply blur-decorative opacity-30 animate-float animation-delay-400"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="inline-block px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 animate-fade-in">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🎉 Introducing the Future of Development
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Build. Ship. Scale.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 animate-slide-up leading-relaxed">
            Transform your ideas into reality with our cutting-edge platform.
            <span className="font-semibold text-gray-900"> Fast, powerful, and beautifully designed.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-200">
            <Link href="#" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/features" className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-300 hover:border-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300">
              Explore Features →
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-600 animate-fade-in animation-delay-400">
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Gradient Cards */}
      <section className="flex items-center justify-center px-6 py-24 w-full bg-white">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build exceptional products, all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative flex flex-col items-center text-center p-10 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-blue-50 border-2 border-transparent hover:border-blue-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative text-6xl mb-6 animate-float">🚀</div>
              <h3 className="relative text-2xl font-bold mb-4 text-gray-900">Lightning Fast</h3>
              <p className="relative text-gray-600 leading-relaxed">
                Experience blazing-fast load times and optimized performance that keeps your users engaged.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group relative flex flex-col items-center text-center p-10 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-purple-50 border-2 border-transparent hover:border-purple-200 overflow-hidden animation-delay-100">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative text-6xl mb-6 animate-float animation-delay-200">⚡</div>
              <h3 className="relative text-2xl font-bold mb-4 text-gray-900">Simple & Intuitive</h3>
              <p className="relative text-gray-600 leading-relaxed">
                Clean interface and powerful workflows that get you up and running in minutes, not hours.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group relative flex flex-col items-center text-center p-10 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-pink-50 border-2 border-transparent hover:border-pink-200 overflow-hidden animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative text-6xl mb-6 animate-float animation-delay-400">💡</div>
              <h3 className="relative text-2xl font-bold mb-4 text-gray-900">Innovation First</h3>
              <p className="relative text-gray-600 leading-relaxed">
                Cutting-edge features and tools designed to help you build products that stand out.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">10k+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">50ms</div>
              <div className="text-gray-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className={`absolute inset-0 ${GRID_PATTERN_BG} opacity-20`}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            Join thousands of developers building amazing products with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="px-10 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Free Trial
            </Link>
            <Link href="/features" className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
