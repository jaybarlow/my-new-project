import Card from '../components/Card';
import Container from '../components/Container';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

// Extract repeated SVG pattern to avoid duplication
const GRID_PATTERN_BG = "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]";

export default function Features() {
  const features = [
    {
      id: 'lightning-fast',
      icon: '🚀',
      title: 'Lightning Fast',
      description:
        'Optimized performance ensures your applications load instantly and respond smoothly to every interaction.',
      category: 'Performance',
      glowColor: 'blue' as const,
    },
    {
      id: 'secure-by-default',
      icon: '🔒',
      title: 'Secure by Default',
      description:
        'Enterprise-grade security built in from the ground up to protect your data and users.',
      category: 'Security',
      glowColor: 'purple' as const,
    },
    {
      id: 'mobile-ready',
      icon: '📱',
      title: 'Mobile Ready',
      description:
        'Fully responsive design that works perfectly on all devices, from phones to desktops.',
      category: 'Design',
      glowColor: 'pink' as const,
    },
    {
      id: 'easy-integration',
      icon: '⚙️',
      title: 'Easy Integration',
      description:
        'Connect with your favorite tools and services using our comprehensive API and integrations.',
      category: 'Developer',
      glowColor: 'blue' as const,
    },
    {
      id: 'analytics-builtin',
      icon: '📊',
      title: 'Analytics Built-in',
      description:
        'Track performance and user behavior with powerful analytics and insights out of the box.',
      category: 'Analytics',
      glowColor: 'green' as const,
    },
    {
      id: 'customizable',
      icon: '🎨',
      title: 'Customizable',
      description:
        'Tailor every aspect to match your brand with flexible theming and styling options.',
      category: 'Design',
      glowColor: 'pink' as const,
    },
    {
      id: 'global-cdn',
      icon: '🌐',
      title: 'Global CDN',
      description:
        'Content delivered from edge locations worldwide for the fastest possible load times.',
      category: 'Performance',
      glowColor: 'blue' as const,
    },
    {
      id: 'auto-updates',
      icon: '🔄',
      title: 'Auto Updates',
      description:
        'Stay up to date automatically with seamless updates that require zero downtime.',
      category: 'Maintenance',
      glowColor: 'purple' as const,
    },
    {
      id: 'support-24-7',
      icon: '💬',
      title: '24/7 Support',
      description:
        'Our dedicated team is always available to help you succeed with expert assistance.',
      category: 'Support',
      glowColor: 'green' as const,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 md:py-40 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden mt-16">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-300"></div>

        <Container>
          <div className="relative z-10">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-sm font-semibold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🎯 Powerful Features
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Everything You Need
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-slide-up leading-relaxed">
              Discover all the powerful features that make our platform the
              <span className="font-semibold text-gray-900"> best choice</span> for your projects.
            </p>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.id}
                gradient
                glowColor={feature.glowColor}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl animate-float" style={{ animationDelay: `${index * 100}ms` }}>
                    {feature.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200">
                    {feature.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Built for Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">100%</div>
              <div className="text-gray-600 font-medium">Reliable</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10x</div>
              <div className="text-gray-600 font-medium">Faster</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">50+</div>
              <div className="text-gray-600 font-medium">Integrations</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">∞</div>
              <div className="text-gray-600 font-medium">Possibilities</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className={`absolute inset-0 ${GRID_PATTERN_BG} opacity-20`}></div>

        <Container>
          <div className="relative z-10 text-center max-w-3xl mx-auto text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Start building today and see how our platform can transform your
              development workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/pricing" className="bg-white text-gray-900 hover:shadow-2xl">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" href="/" className="border-white text-white hover:bg-white hover:text-gray-900">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
