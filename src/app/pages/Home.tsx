import { Link } from 'react-router';
import { Heart, Clock, Shield, Users, Home, Stethoscope, ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  const services = [
    {
      icon: Home,
      title: 'Home Care Services',
      description: 'Assistance with activities of daily living while staying in the comfort of your own home.',
      link: '/services#domiciliary-care'
    },
    {
      icon: Star,
      title: 'Specialised Care',
      description: 'Additional support for individuals with special needs due to illness or injury, including dementia care.',
      link: '/services#domiciliary-care'
    },
    {
      icon: Clock,
      title: 'In-Home & Sleeping in Care',
      description: 'Flexible options from sleep-in care to full 24/7 continuous professional support.',
      link: '/services#domiciliary-care'
    },
    {
      icon: Shield,
      title: 'Live-In Care',
      description: 'Crucial full-time companionship and dedicated support allowing clients to remain in their own homes.',
      link: '/services#domiciliary-care'
    },
    {
      icon: Users,
      title: 'Supported Living',
      description: 'Empowering adults to live as independently as possible in secure, welcoming, and bespoke environments.',
      link: '/services#supported-living'
    },
    {
      icon: Heart,
      title: 'Personalised Care Plans',
      description: 'Person-centred support prioritising your voice and preferences with highly qualified professional staff.',
      link: '/services'
    },
  ];

  const stats = [
    { number: '15+', label: 'Years of Service' },
    { number: '5000+', label: 'Clients Served' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Available Support' },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Daughter of Client',
      text: 'The care my mother receives is exceptional. The team is professional, compassionate, and truly cares about her well-being.',
    },
    {
      name: 'John Patterson',
      role: 'Family Member',
      text: 'Finding HomeCare was a blessing. They provided my father with the dignity and respect he deserves while giving our family peace of mind.',
    },
    {
      name: 'Emily Roberts',
      role: 'Spouse of Client',
      text: 'The staff goes above and beyond. They\'re not just caregivers, they\'ve become part of our family.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F4C5C] to-[#16697A] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Supported Living Services
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Lets Book a free Assessment. We will love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#FFBD31] text-[#0F4C5C] px-8 py-4 rounded-lg font-semibold hover:bg-[#ffc94d] transition-colors text-center inline-flex items-center justify-center"
                >
                  Book Free Assessment
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/services"
                  className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0F4C5C] transition-colors text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={import.meta.env.BASE_URL + "hero-image.jpeg"}
                  alt="Compassionate elderly care"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-[#0F4C5C] p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-[#0F4C5C] mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive care solutions tailored to meet the unique needs of each individual and family
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="block bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
                >
                  <div className="w-14 h-14 bg-[#0F4C5C] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-[#FFBD31]" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3 group-hover:text-[#16697A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwcGF0aWVudHxlbnwxfHx8fDE3NzE1MDQ3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare professional with patient"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                Our Model
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#FFBD31] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#0F4C5C] font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0F4C5C] mb-2">Experienced Professionals</h3>
                    <p className="text-gray-600">All caregivers are extensively trained, background-checked, and certified professionals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#FFBD31] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#0F4C5C] font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0F4C5C] mb-2">Personalized Care Plans</h3>
                    <p className="text-gray-600">Every client receives a customized care plan designed around their specific needs and preferences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#FFBD31] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#0F4C5C] font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0F4C5C] mb-2">24/7 Support & Monitoring</h3>
                    <p className="text-gray-600">Round-the-clock support ensures help is always available when you need it most.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#FFBD31] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#0F4C5C] font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0F4C5C] mb-2">Compassionate Approach</h3>
                    <p className="text-gray-600">We treat every client with the dignity, respect, and compassion they deserve.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Child Care Services CTA */}
      <section className="py-16 bg-gradient-to-r from-[#FFBD31] to-[#ffc94d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-[#0F4C5C] mb-8 max-w-2xl mx-auto">
            At Angel & Star Care Services, we have a clear mission of uplifting high standards and being the best at what we do, with a committed team to provide peace of mind to our clients and their families.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center bg-[#0F4C5C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16697A] transition-colors"
          >
            Learn More About Us
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-4">
              What Families Say About Us
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real families we've had the privilege to serve
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="text-[#FFBD31] text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div>
                  <p className="font-semibold text-[#0F4C5C]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0F4C5C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today for a free consultation and learn how we can help your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#FFBD31] text-[#0F4C5C] px-8 py-4 rounded-lg font-semibold hover:bg-[#ffc94d] transition-colors inline-flex items-center justify-center"
            >
              Contact Us Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href="tel:02475263024"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0F4C5C] transition-colors"
            >
              Call 02475263024
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
