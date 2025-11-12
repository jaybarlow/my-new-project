import Card from '../components/Card';
import Container from '../components/Container';
import Button from '../components/Button';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out our platform',
      features: [
        '1 project',
        '5GB storage',
        'Basic analytics',
        'Community support',
        'SSL certificate',
        '99.9% uptime',
      ],
      cta: 'Get Started',
      href: '#',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      description: 'Best for professional developers',
      features: [
        'Unlimited projects',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'Custom domain',
        'Team collaboration',
        'API access',
        '99.99% uptime',
      ],
      cta: 'Start Free Trial',
      href: '#',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large-scale applications',
      features: [
        'Everything in Pro',
        'Unlimited storage',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'Advanced security',
        'Training & onboarding',
        'Priority features',
      ],
      cta: 'Contact Sales',
      href: '#',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I change my plan later?',
      answer:
        'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'Yes, all paid plans come with a 14-day free trial. No credit card required to start.',
    },
    {
      question: 'What is your refund policy?',
      answer:
        'We offer a 30-day money-back guarantee. If you\'re not satisfied, we\'ll refund your payment, no questions asked.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 md:py-40 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20">
        <Container>
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 animate-fade-in">
            Simple, Transparent Pricing
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up">
            Start free and scale as you grow. All plans include a 14-day free
            trial.
          </p>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative animate-fade-in ${
                  plan.popular ? 'md:-mt-8' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`h-full ${
                    plan.popular
                      ? 'border-2 border-blue-500 shadow-2xl scale-105'
                      : ''
                  }`}
                  hover={!plan.popular}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{plan.period}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-green-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={plan.href}
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Card>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-12">
            All plans include SSL, CDN, and automatic backups.{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
              Compare plans in detail →
            </a>
          </p>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <Container size="md">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Have a question? We're here to help.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="outline" size="lg" href="#">
              Contact Support
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Building Today
            </h2>
            <p className="text-xl mb-10 text-blue-100">
              Join thousands of developers who trust our platform to build and
              scale their applications.
            </p>
            <Button variant="secondary" size="lg" href="#">
              Get Started Free
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
