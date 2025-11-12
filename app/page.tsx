import Button from './components/Button';
import Card from './components/Card';
import Container from './components/Container';

export default function Home() {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Performance',
      description:
        'Lightning-fast load times and optimized performance for the best user experience.',
    },
    {
      icon: '⚡',
      title: 'Easy to Use',
      description:
        'Intuitive interface and simple workflows that get you up and running quickly.',
    },
    {
      icon: '💡',
      title: 'Innovative Solutions',
      description:
        'Cutting-edge features and tools designed to help you build better products.',
    },
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime' },
    { value: '< 100ms', label: 'Response Time' },
    { value: '10K+', label: 'Active Users' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 md:py-40 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-gray-100 opacity-40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-sm font-semibold text-gray-700 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New features available now
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Build the Future
            <br />
            <span className="text-gray-900">With Confidence</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 animate-slide-up leading-relaxed">
            Build amazing applications with modern tools and technologies. Our
            platform helps you create, deploy, and scale your projects with
            ease and reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button href="/features" size="lg">
              Get Started Free
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              View Pricing
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to build and scale your applications with
              confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                gradient
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              >
                <div className="text-5xl mb-4 animate-bounce-slow">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 text-blue-100">
              Join thousands of developers building amazing applications with
              our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/features">
                Start Building Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/pricing"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                Compare Plans
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
