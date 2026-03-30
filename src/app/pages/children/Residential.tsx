import { Link } from 'react-router';
import { Home, Heart, Shield, Users, Lightbulb, BookOpen, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function ChildrenResidentialPage() {
  const services = [
    {
      icon: Home,
      title: 'Residential Care Homes',
      description: 'High-quality, modern residential care for children aged 7 to 18. We provide safe, nurturing environments where young people feel they truly belong.',
    },
    {
      icon: Heart,
      title: 'Personalised Support Packages',
      description: 'Tailored care plans ranging from standard to enhanced support, working closely with local authorities and families to meet each child\'s unique needs.',
    },
    {
      icon: Shield,
      title: 'Supported Accommodation',
      description: 'Guiding young people towards independence with structured, compassionate support that respects their individual backgrounds.',
    },
    {
      icon: Users,
      title: 'Professional Consultancy',
      description: 'Expert support for children\'s homes including Regulation 44 visits, independent audits, and professional mentoring for managers.',
    },
    {
      icon: BookOpen,
      title: 'Student Practice Education',
      description: 'Investing in the future of social care by offering external practice education and mentoring for student social workers.',
    },
    {
      icon: Lightbulb,
      title: 'Therapeutic Environments',
      description: 'Care built on integrity and emotional safety, helping children heal, grow in confidence, and build brighter futures.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F4C5C] to-[#16697A] py-20 lg:py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#FFBD31] text-[#0F4C5C] px-4 py-2 rounded-full font-semibold mb-4">
                ✨ Children Residential
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Our Residential Care Services
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                We provide a comprehensive range of care solutions designed specifically for children's unique needs, blending structured support with a nurturing home environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/child-care/contact"
                  className="bg-[#FFBD31] text-[#0F4C5C] px-8 py-4 rounded-lg font-semibold hover:bg-[#ffc94d] transition-colors text-center inline-flex items-center justify-center"
                >
                  Make a Referral
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/child-care/about"
                  className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center border-2 border-white"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGhvbWV8ZW58MHx8fHwxNzcxNTE3Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="A nurturing environment for children"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-4">
              Our Children Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive care solutions designed specifically for children's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#FFF9E6] to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-[#FFBD31]"
                >
                  <div className="w-14 h-14 bg-[#FFBD31] rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-[#0F4C5C]" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Homes Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-4">
              A Look Inside Our Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide warm, welcoming, and safe environments designed to feel like a true family home, giving young people the comfort and security they deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 group">
              <ImageWithFallback
                src={import.meta.env.BASE_URL + "images/residential/HomeExterior.png"}
                alt="Beautiful home exterior illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 group mt-8 lg:mt-0">
              <ImageWithFallback
                src={import.meta.env.BASE_URL + "images/residential/HomeInterior.png"}
                alt="Cozy interior giving a welcoming feel illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 group">
              <ImageWithFallback
                src={import.meta.env.BASE_URL + "images/residential/Garden.png"}
                alt="Home with tranquil garden view illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 group">
              <ImageWithFallback
                src={import.meta.env.BASE_URL + "images/residential/LivingArea.png"}
                alt="Bright, spacious living area illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 group mt-8 lg:mt-0">
              <ImageWithFallback
                src={import.meta.env.BASE_URL + "images/residential/Bedroom.png"}
                alt="Warm and modern residential interior illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 group">
              <ImageWithFallback
                src={import.meta.env.BASE_URL + "images/residential/Neigbourhood.png"}
                alt="Architectural exterior of a pleasant neighborhood home illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFBD31] to-[#ffc94d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
            Ready to Meet Our Team?
          </h2>
          <p className="text-xl text-[#0F4C5C] mb-8">
            Schedule a consultation to learn how we can support your family and your child's unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/child-care/contact"
              className="bg-[#0F4C5C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16697A] transition-colors inline-flex items-center justify-center"
            >
              Make a Referral
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/careers"
              className="bg-white text-[#0F4C5C] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors border-2 border-[#0F4C5C]"
            >
              Join Our Care Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
