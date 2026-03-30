import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, Users, Home, Heart, Clock } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function ShortBreaksPage() {
  const summaryCards = [
    {
      icon: Users,
      title: 'Ages 0 – 18',
      description: 'Support for babies, children and young people up to 18 years.',
    },
    {
      icon: Home,
      title: 'Community based',
      description: 'Support delivered at home and in local community settings.',
    },
    {
      icon: Heart,
      title: 'Person-centred',
      description: 'Every support plan is tailored to the child\'s individual needs and interests.',
    },
    {
      icon: Clock,
      title: 'Flexible hours',
      description: 'Daytime, after school, evenings and weekend support available.',
    },
  ];

  const whoWeSupport = [
    'Children with physical disabilities',
    'Children with learning disabilities',
    'Autistic children and young people',
    'Children with complex health needs',
    'Children with sensory impairments',
    'Young people with challenging behaviour',
  ];

  const activities = [
    { icon: '🏊', name: 'Swimming & leisure' },
    { icon: '🌳', name: 'Parks & outdoor play' },
    { icon: '🎨', name: 'Arts & crafts' },
    { icon: '🎭', name: 'Social & cultural trips' },
    { icon: '🍽', name: 'Cafes & restaurants' },
    { icon: '🎮', name: 'Sensory activities' },
    { icon: '🏪', name: 'Shopping & life skills' },
    { icon: '🤝', name: 'Peer socialisation' },
  ];

  const howItWorks = [
    {
      title: 'Referral',
      description: 'Referrals are accepted from Local Authority Children\'s Services, health professionals, or directly from families.',
    },
    {
      title: 'Assessment & planning',
      description: 'We carry out an initial meeting with the child and family to understand their needs, preferences, and goals for the short break.',
    },
    {
      title: 'Matching',
      description: 'We carefully match the child with a trained support worker who suits their personality and interests.',
    },
    {
      title: 'Short breaks begin',
      description: 'Support begins at agreed times. We review progress regularly and adapt the plan as the child grows and their needs change.',
    },
  ];

  const fundingOptions = [
    'Local Authority direct funding',
    'Personal budgets / direct payments',
    'NHS continuing care',
    'Self-funded',
  ];

  return (
    <div className="min-h-screen">
      {/* Section 1 — Hero / Banner */}
      {/* Adapting to About.tsx colors: using the yellow gradient with teal text */}
      <section className="relative bg-gradient-to-br from-[#FFBD31] via-[#ffc94d] to-[#FFD700] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white text-[#FFBD31] px-4 py-2 rounded-full font-semibold mb-4 border-l-4 border-[#0F4C5C]">
                ✨ Children's Services
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F4C5C] mb-6 leading-tight">
                Short Breaks for Children & Young People
              </h1>
              <p className="text-xl text-[#0F4C5C] mb-8 leading-relaxed font-medium">
                Angel and Star Care Services provides community-based short break support for children and young people aged 0–18 with disabilities and additional needs, giving families a meaningful break while ensuring every child enjoys enriching, safe, and personalised experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/child-care/contact"
                  className="bg-[#0F4C5C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16697A] transition-colors text-center inline-flex items-center justify-center"
                >
                  Make a Referral
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-[#0F4C5C] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center border-2 border-[#0F4C5C]"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <ImageWithFallback
                  src={import.meta.env.BASE_URL + "images/Short-Breaks/Short-Break.png"}
                  alt="A support worker and child interacting positively in the community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0F4C5C] text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-[#FFBD31]" size={24} />
                  <div>
                    <p className="font-bold">CQC Registered</p>
                    <p className="text-sm">Trusted Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Summary Feature Cards */}
      <section className="py-16 bg-white shrink-0 -mt-8 relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {summaryCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-[#0F4C5C] hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 bg-[#FFBD31]/20 rounded-full flex justify-center items-center mb-4">
                    <Icon className="text-[#0F4C5C]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F4C5C] mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3 — Who We Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
              Who we support
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whoWeSupport.map((item, index) => (
              <div key={index} className="bg-white rounded-full py-4 px-6 flex items-center shadow-sm border border-gray-100 overflow-hidden group hover:border-[#FFBD31] hover:shadow-md transition-all">
                <div className="w-3 h-3 bg-[#0F4C5C] rounded-full mr-4 group-hover:scale-125 transition-transform" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — What Our Short Breaks Include */}
      <section className="py-20 bg-gradient-to-br from-[#0F4C5C] to-[#16697A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white text-center">
              What our short breaks include:
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Our skilled support workers accompany children in the community, enabling them to enjoy meaningful activities and social experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="font-semibold text-white">{activity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C]">
              How it works
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-1 bg-gray-200 -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-gray-200 -translate-x-1/2 md:hidden"></div>

            <div className="space-y-12">
              {howItWorks.map((step, index) => (
                <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Circle Marker */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-[#FFBD31] border-4 border-white rounded-full flex items-center justify-center -translate-x-1/2 text-[#0F4C5C] font-bold text-xl z-10 shadow-md">
                    {index + 1}
                  </div>

                  {/* Content Box */}
                  <div className="ml-16 md:ml-0 md:w-[45%] w-full">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
                      {/* Triangle Pointer for Desktop (pointing center) */}
                      <div className={`hidden md:block absolute top-[22px] w-4 h-4 bg-gray-50 border-t border-r border-gray-100 rotate-45 ${index % 2 === 0 ? '-left-2 border-b-0 border-l-0' : '-right-2'}`}></div>

                      <h3 className="text-xl font-bold text-[#0F4C5C] mb-2">Step {index + 1} — {step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Funding & Eligibility */}
      <section className="py-20 bg-gray-50 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
            Funding & eligibility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Short breaks can be funded through a number of routes. Our team is happy to advise families on the most appropriate pathway.
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {fundingOptions.map((option, index) => (
              <div key={index} className="bg-white border-2 border-[#0F4C5C] text-[#0F4C5C] px-6 py-3 rounded-full font-semibold shadow-sm hover:bg-[#0F4C5C] hover:text-white transition-colors">
                {option}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General CTA */}
      <section className="py-16 bg-gradient-to-r from-[#FFBD31] to-[#ffc94d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0F4C5C] mb-6">Learn more about our support</h2>
          <Link
            to="/child-care/contact"
            className="bg-[#0F4C5C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16697A] transition-colors inline-flex items-center justify-center shadow-lg"
          >
            Contact us today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
