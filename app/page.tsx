import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to My New Project
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl animate-slide-up">
          Build amazing applications with modern tools and technologies. Our platform helps you create, deploy, and scale your projects with ease.
        </p>
      </section>
      <section className="flex items-center justify-center px-6 py-20 w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
            <div className="text-5xl mb-4 animate-bounce-slow">🚀</div>
            <h3 className="text-xl font-semibold mb-3">Fast Performance</h3>
            <p className="text-gray-600">
              Lightning-fast load times and optimized performance for the best user experience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
            <div className="text-5xl mb-4 animate-bounce-slow animation-delay-100">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Easy to Use</h3>
            <p className="text-gray-600">
              Intuitive interface and simple workflows that get you up and running quickly.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
            <div className="text-5xl mb-4 animate-bounce-slow animation-delay-200">💡</div>
            <h3 className="text-xl font-semibold mb-3">Innovative Solutions</h3>
            <p className="text-gray-600">
              Cutting-edge features and tools designed to help you build better products.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
