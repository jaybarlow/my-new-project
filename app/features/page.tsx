import Navbar from '../components/Navbar'

export default function Features() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Features
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl animate-slide-up">
          Discover all the powerful features that make our platform the best choice for your projects.
        </p>
      </section>
      
      <section className="flex items-center justify-center px-6 py-20 w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          <div className="flex flex-col p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-gray-600">
              Optimized performance ensures your applications load instantly and respond smoothly to every interaction.
            </p>
          </div>
          
          <div className="flex flex-col p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-semibold mb-3">Secure by Default</h3>
            <p className="text-gray-600">
              Enterprise-grade security built in from the ground up to protect your data and users.
            </p>
          </div>
          
          <div className="flex flex-col p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-semibold mb-3">Mobile Ready</h3>
            <p className="text-gray-600">
              Fully responsive design that works perfectly on all devices, from phones to desktops.
            </p>
          </div>
          
          <div className="flex flex-col p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-2xl font-semibold mb-3">Easy Integration</h3>
            <p className="text-gray-600">
              Connect with your favorite tools and services using our comprehensive API and integrations.
            </p>
          </div>
          
          <div className="flex flex-col p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-semibold mb-3">Analytics Built-in</h3>
            <p className="text-gray-600">
              Track performance and user behavior with powerful analytics and insights out of the box.
            </p>
          </div>
          
          <div className="flex flex-col p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-2xl font-semibold mb-3">Customizable</h3>
            <p className="text-gray-600">
              Tailor every aspect to match your brand with flexible theming and styling options.
            </p>
          </div>
          
          <div className="flex flex-col p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-2xl font-semibold mb-3">Global CDN</h3>
            <p className="text-gray-600">
              Content delivered from edge locations worldwide for the fastest possible load times.
            </p>
          </div>
          
          <div className="flex flex-col p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
            <div className="text-5xl mb-4">🔄</div>
            <h3 className="text-2xl font-semibold mb-3">Auto Updates</h3>
            <p className="text-gray-600">
              Stay up to date automatically with seamless updates that require zero downtime.
            </p>
          </div>
          
          <div className="flex flex-col p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-semibold mb-3">24/7 Support</h3>
            <p className="text-gray-600">
              Our dedicated team is always available to help you succeed with expert assistance.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
