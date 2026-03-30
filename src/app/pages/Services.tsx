import { useState } from 'react';
import { Heart, Home, Users, Clock, Shield, Star, Crown, CheckCircle2, Navigation, ArrowRight, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export function ServicesPage() {
  const domiciliaryServices = [
    {
      id: 'home-care',
      icon: Home,
      title: 'Home Care Services',
      description: 'We serve those who need assistance with activities of daily living while staying in the comfort of their own homes. Featuring personalised care plans and highly qualified, compassionate professionals.',
      subcategories: [
        { title: 'Personal Care Services', desc: 'Provides daily visits or round-the-clock care, allowing those we care for to live independently and safely between our visits.' },
        { title: 'Respite Care', desc: 'Our carers are available temporarily to serve as your primary carer. We gladly take on any services or assistance duties normally supplied by your main carer.' },
        { title: 'Household Services', desc: 'Expert help cleaning and organising your home. Our professionals are dedicated to keeping your living space comfortable, safe, and pleasant.' },
      ],
    },
    {
      id: 'specialised-care',
      icon: Star,
      title: 'Specialised Care',
      description: 'We recognise that individuals with special needs may require additional support due to illness or injury. This includes reablement services, palliative care, and empathetic dementia care.',
      subcategories: [
        { title: 'Reablement Services', desc: 'After a hospitalisation or illness, this is an excellent choice to help you heal safely and effectively re-learn your vital motor abilities.' },
        { title: 'Palliative Care', desc: 'Offering comfort and peace of mind to those with incurable diseases. This encompasses physical, mental, and social assistance that may last days or years.' },
        { title: 'Dementia Care', desc: 'Everything we do for dementia care clients and their families is based deeply on empathy. This empathy is a critical component of our premium dementia home care service.' },
      ],
    },
    {
      id: 'in-home',
      icon: Clock,
      title: 'In-Home & Sleeping in Care',
      description: 'Flexible options from sleep-in care anticipating morning requirements, to part-time companionship, to full 24/7 continuous professional support letting you live and pursue your passions.',
      subcategories: [
        { title: 'In Home Care', desc: 'Providing in-home care 24/7. 24-hour care is provided by a professionally selected carer. This lets you live and pursue your passions while families relax knowing their loved one is receiving continual support.' },
        { title: 'Companionship Support', desc: 'Usually part-time and can be paired with other home care services. Providing emotional support and interaction to lonely or isolated people significantly improves their quality of life.' },
        { title: 'Sleeping in Care', desc: 'Designed for clients who need help with bedtime and morning tasks like dressing, eating, and taking medicine. Our sleep-in care consistently anticipates requirements.' },
      ],
    },
    {
      id: 'live-in',
      icon: Shield,
      title: 'Live-In Care',
      description: 'Provides crucial full-time companionship and dedicated support to those in need, allowing them to confidently and comfortably remain in their own homes.',
      subcategories: [
        { title: 'Continual Support', desc: 'Full-time presence offering immediate assistance with mobility, personal care, and maintaining your daily routine without interruption.' },
        { title: 'Personalised Care Plans', desc: 'Care plans uniquely and perfectly tailored to match the client\'s lifestyle, preferences, and complex medical needs.' },
        { title: 'Qualified Professionals', desc: 'Highly trained professionals who are compassionate and dedicated to deeply promoting independence and dignity.' },
      ],
    },
  ];

  const [activeServiceId, setActiveServiceId] = useState<string>(domiciliaryServices[0].id);
  const activeService = domiciliaryServices.find((s) => s.id === activeServiceId) || domiciliaryServices[0];

  const supportedLivingFeatures = [
    {
      title: 'Personal Care & Support',
      description: 'Assisting with daily living activities such as personal hygiene, meal preparation, medication management, and household tasks.',
    },
    {
      title: 'Skill Development',
      description: 'Encouraging and supporting individuals to gain practical skills like budgeting, cooking, and household management to build confidence.',
    },
    {
      title: 'Community Access',
      description: 'Encouraging individuals to participate in community activities, employment, education, or volunteer opportunities to enrich their lives.',
    },
    {
      title: '24/7 Support',
      description: 'Providing flexible care and support, ranging from a few hours a week to full-time, 24/7 assistance, depending on individual needs.',
    },
    {
      title: 'Bespoke Living',
      description: 'Creating tailored living arrangements in comfortable and secure environments. We collaborate with social landlords providing tenancy agreements.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F4C5C] to-[#16697A] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#FFBD31] text-[#0F4C5C] px-4 py-2 rounded-full font-bold mb-6">
                Our Services
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Empowering Independence Through Care
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                We are dedicated to providing specialised Supported Living and Home care Services. For clients aged 18 and over, we offer a variety of services to ensure they are able to maintain as much autonomy as possible in their daily lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#supported-living"
                  className="bg-[#FFBD31] text-[#0F4C5C] px-8 py-4 rounded-lg font-bold hover:bg-[#ffc94d] transition-colors text-center inline-flex items-center justify-center transform hover:-translate-y-1"
                >
                  Supported Living
                  <Navigation className="ml-2" size={20} />
                </a>
                <a
                  href="#domiciliary-care"
                  className="bg-white/10 text-white backdrop-blur-sm border-2 border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all text-center transform hover:-translate-y-1"
                >
                  Domiciliary Care
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <ImageWithFallback
                  src={import.meta.env.BASE_URL + "images/services/service-hero.jpeg"}
                  alt="Care professional supporting a client"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Living Services Section */}
      <section id="supported-living" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8 border-4 border-gray-50">
                <ImageWithFallback
                  src={import.meta.env.BASE_URL + "images/services/supported-living.jpeg"}
                  alt="Empowering independent living"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="bg-[#0F4C5C] text-white p-8 rounded-2xl shadow-lg relative -mt-20 ml-8 mr-[-20px] z-10">
                <Crown className="text-[#FFBD31] mb-4" size={36} />
                <h3 className="text-2xl font-bold mb-2">Our Approach</h3>
                <p className="text-gray-200">
                  Respect, independence, and choice form the core of our approach to care. We pledge to provide person-centred support, prioritising their voices and preferences. We employ the REACH Standards for assisted living to equip our clients with the necessary tools for optimal outcomes.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                Supported Living Services
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We provide exceptional supported living services designed to empower adults (18+) with a range of needs to live as independently as possible. Our aim is to create a safe, welcoming, and supportive environment where individuals can develop life skills, pursue their goals, and achieve a high quality of life.
              </p>

              <div className="space-y-6">
                {supportedLivingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#FFBD31] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="text-[#0F4C5C]" size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#0F4C5C] mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domiciliary Care Section */}
      <section id="domiciliary-care" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100 pt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-4">
              Our Domiciliary Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting your lifestyle with dignity in the comfort of your own home, from intermittent visits to round-the-clock live-in care.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
            {/* Sidebar / Navigation */}
            <div className="lg:col-span-4 flex flex-col space-y-3">
              {domiciliaryServices.map((service) => {
                const Icon = service.icon;
                const isActive = activeServiceId === service.id;

                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={`w-full text-left p-4 lg:p-6 rounded-2xl transition-all duration-300 flex items-center space-x-4 border-l-4 ${isActive
                      ? 'bg-white shadow-xl border-[#FFBD31]'
                      : 'bg-transparent border-transparent text-gray-600 hover:bg-white/60 hover:shadow-md'
                      }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? 'bg-[#FFBD31] text-[#0F4C5C]' : 'bg-gray-100 text-gray-400'
                      }`}>
                      <Icon size={24} />
                    </div>
                    <span className={`font-bold text-lg hidden sm:block ${isActive ? 'text-[#0F4C5C]' : ''}`}>
                      {service.title}
                    </span>
                    <span className={`font-bold text-base sm:hidden ${isActive ? 'text-[#0F4C5C]' : ''}`}>
                      {service.title.replace(' & ', ' & \n')}
                    </span>
                    <ChevronRight
                      className={`ml-auto flex-shrink-0 transition-transform ${isActive ? 'text-[#FFBD31] rotate-90 lg:rotate-0' : 'text-gray-300'
                        }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Content Detail Area */}
            <div className="lg:col-span-8">
              <div
                key={activeService.id}
                className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100 animate-in fade-in slide-in-from-right-4 duration-500"
              >
                <div className="flex items-center space-x-5 mb-6">
                  <div className="w-16 h-16 bg-[#0F4C5C] text-[#FFBD31] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
                    <activeService.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0F4C5C]">{activeService.title}</h3>
                </div>

                <p className="text-xl text-gray-600 mb-10 leading-relaxed border-b border-gray-100 pb-8">
                  {activeService.description}
                </p>

                <div className="space-y-8">
                  <h4 className="font-bold text-[#0F4C5C] uppercase tracking-wider text-sm">Services Include:</h4>
                  <div className="grid sm:grid-cols-1 gap-8">
                    {activeService.subcategories.map((sub, idx) => (
                      <div key={idx} className="flex space-x-5 group">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle2 className="text-[#FFBD31] group-hover:scale-110 transition-transform duration-300" size={28} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-[#0F4C5C] mb-2">{sub.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{sub.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#0F4C5C] to-[#16697A] text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Discuss Your Care Needs?</h2>
          <p className="text-xl text-gray-200 mb-10">
            Contact us today to book a free assessment and discover how our Supported Living and Domiciliary Care services can provide peace of mind to you and your family.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-[#FFBD31] text-[#0F4C5C] px-8 py-4 rounded-lg font-bold hover:bg-[#ffc94d] transition-all transform hover:scale-105 shadow-xl"
          >
            Book a Free Assessment
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
