import { Target, Heart, ShieldCheck, Users, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export function AboutPage() {
  const goals = [
    {
      icon: Heart,
      title: 'Personalised Care',
      description: 'Provide high-quality, personalised home care services tailored to individual needs.',
    },
    {
      icon: ShieldCheck,
      title: 'Maintain Independence',
      description: 'Assist clients in maintaining independence and remaining in their own homes comfortably.',
    },
    {
      icon: Activity,
      title: 'Improve Quality of Life',
      description: 'Enhance daily living by providing compassionate, responsive, and supportive care.',
    },
    {
      icon: Users,
      title: 'Comprehensive Support',
      description: 'Collaborate closely with healthcare providers and families for holistic support.',
    },
  ];

  const objectives = [
    'Create and promote a lifestyle that enhances independence, personal choice, and wellbeing.',
    'Deliver high quality of care in service users\' residence.',
    'Involve service users in all aspects of service delivery.',
    'Support informed choices and value all individuals.',
    'Provide suitably trained staff and promote best care values.',
    'Constantly review policies and service delivery for improvement.',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F4C5C] to-[#16697A] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            We are committed to providing support and care determined by individual needs, with dignity and respect, and to provide a service that meets the unique needs of individuals within our care.
          </p>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-4">Our Goals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We strive every day to make a meaningful difference in the lives of those we care for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#0F4C5C] rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-[#FFBD31]" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">{goal.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                Our Core Objectives
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                To achieve our goals, we are guided by a strict set of objectives that define our approach to care and service delivery.
              </p>
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                    <CheckCircle className="text-[#FFBD31] flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-700 font-medium">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160550-2173eff8e895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYXNzaW9uJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzE1NDQ3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Compassionate healthcare"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFBD31]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0F4C5C] mb-6">
            Experience Our Mission In Action
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-[#0F4C5C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16697A] transition-colors"
          >
            Get In Touch Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
