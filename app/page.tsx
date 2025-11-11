import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to My New Project
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </section>
      <section className="px-6 py-20 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Feature Title</h3>
            <p className="text-gray-600">
              Short description of this amazing feature and what it can do for you.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Feature Title</h3>
            <p className="text-gray-600">
              Short description of this amazing feature and what it can do for you.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Feature Title</h3>
            <p className="text-gray-600">
              Short description of this amazing feature and what it can do for you.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
