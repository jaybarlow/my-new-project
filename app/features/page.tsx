import Card from '../components/Card';
import Container from '../components/Container';
import Button from '../components/Button';

export default function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description:
        'Optimized performance ensures your applications load instantly and respond smoothly to every interaction.',
      category: 'Performance',
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description:
        'Enterprise-grade security built in from the ground up to protect your data and users.',
      category: 'Security',
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description:
        'Fully responsive design that works perfectly on all devices, from phones to desktops.',
      category: 'Design',
    },
    {
      icon: '⚙️',
      title: 'Easy Integration',
      description:
        'Connect with your favorite tools and services using our comprehensive API and integrations.',
      category: 'Developer',
    },
    {
      icon: '📊',
      title: 'Analytics Built-in',
      description:
        'Track performance and user behavior with powerful analytics and insights out of the box.',
      category: 'Analytics',
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description:
        'Tailor every aspect to match your brand with flexible theming and styling options.',
      category: 'Design',
    },
    {
      icon: '🌐',
      title: 'Global CDN',
      description:
        'Content delivered from edge locations worldwide for the fastest possible load times.',
      category: 'Performance',
    },
    {
      icon: '🔄',
      title: 'Auto Updates',
      description:
        'Stay up to date automatically with seamless updates that require zero downtime.',
      category: 'Maintenance',
    },
    {
      icon: '💬',
      title: '24/7 Support',
      description:
        'Our dedicated team is always available to help you succeed with expert assistance.',
      category: 'Support',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 md:py-40 bg-gradient-to-br from-white via-purple-50/20 to-blue-50/20">
        <Container>
          <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6 animate-fade-in">
            Powerful Features
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Everything You Need
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up">
            Discover all the powerful features that make our platform the best
            choice for your projects.
          </p>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                gradient
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{feature.icon}</div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                    {feature.category}
                  </span>
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
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl mb-10 text-gray-600">
              Start building today and see how our platform can transform your
              development workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/pricing">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" href="/">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
