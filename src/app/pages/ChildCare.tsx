import { useState } from 'react';
import { Link } from 'react-router';
import { Home, Heart, Shield, Users, Lightbulb, BookOpen, ArrowRight, CheckCircle2, Phone, Mail, MapPin, Send } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

interface ValueItem {
  title: string;
  description: string;
}

export function ChildCarePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    careNeeded: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry! Our children services team will contact you within 24 hours.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      serviceType: '',
      careNeeded: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const values: ValueItem[] = [
    {
      title: 'Emotional Safety',
      description: 'Providing secure environments through structured, consistent care.',
    },
    {
      title: 'Professionalism',
      description: 'Ensuring high standards through continuous training, supervision, and Ofsted compliance.',
    },
    {
      title: 'Respect',
      description: 'Honouring the unique needs, voices, and backgrounds of every individual in our care.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Bright and Child-Friendly */}
      <section className="relative bg-gradient-to-br from-[#FFBD31] via-[#ffc94d] to-[#FFD700] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white text-[#FFBD31] px-4 py-2 rounded-full font-semibold mb-4">
                ✨ Children Services
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F4C5C] mb-6 leading-tight">
                Safe, Nurturing Spaces for Young People
              </h1>
              <p className="text-xl text-[#0F4C5C] mb-8 leading-relaxed">
                We are more than a care provider, we are a home. We offer high-quality residential care and supported accommodation where children and young people feel valued, supported, and empowered to thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-[#0F4C5C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16697A] transition-colors text-center inline-flex items-center justify-center"
                >
                  Make a Referral
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <a
                  href="tel:+447404911446"
                  className="bg-white text-[#0F4C5C] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center border-2 border-[#0F4C5C]"
                >
                  Contact Our Consultants
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGdyb3VwfGVufDF8fHx8MTc3MTQwMzI2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Young people supported in a caring environment"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#0F4C5C] text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-[#FFBD31]" size={24} />
                  <div>
                    <p className="font-bold">Ofsted Registered</p>
                    <p className="text-sm">High-Quality Care</p>
                  </div>
                </div>
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

      {/* Vision and Values */}
      <section className="py-20 bg-gradient-to-br from-[#0F4C5C] to-[#16697A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Vision & Values
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              To create homes where every child and young person feels safe, heard, and valued—empowering them to heal, grow, and bring bright futures. We strive to be a trusted partner to families and professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((value: ValueItem, index: number) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-[#FFBD31] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-[#0F4C5C]" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#FFBD31]">{value.title}</h3>
                <p className="text-gray-200 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Children Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                Why Parents Choose Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#FFBD31] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#0F4C5C] font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0F4C5C] mb-2">Dedicated Teams</h3>
                    <p className="text-gray-600">We invest in our team through fully paid training, ensuring they are dedicated mentors shaping the next generation of care leaders.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#FFBD31] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#0F4C5C] font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0F4C5C] mb-2">Therapeutic Relationships</h3>
                    <p className="text-gray-600">Our culture is built on care and integrity, forming strong bonds that support young people to truly thrive.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#FFBD31] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#0F4C5C] font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0F4C5C] mb-2">Trusted Partnerships</h3>
                    <p className="text-gray-600">We work closely with local authorities, families, and professionals to shape personalised care experiences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#FFBD31] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#0F4C5C] font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0F4C5C] mb-2">Expert Consultancy</h3>
                    <p className="text-gray-600">Our registered social workers and managers bring decades of experience to help other homes build compliance and excellence.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFkdWx0c3xlbnwwfHx8fDE3NzE0NDEwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Support workers in a home environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Certification */}
      <section className="py-20 bg-gradient-to-br from-[#0F4C5C] to-[#16697A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Commitment to Excellence
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We operate under the highest standards of safety, compliance, and compassionate care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Ofsted Compliance',
              'Quality Assurance',
              'Safeguarding Training',
              'Regulation 44 Support',
              'Registered Managers',
              'Therapeutic Training',
              'Supervision & Mentoring',
              'Multi-Agency Working',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center"
              >
                <CheckCircle2 className="mx-auto mb-3 text-[#FFBD31]" size={32} />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Children Services Contact Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-4">
              Get in Touch with our Children Services Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to answer your questions and discuss personalized support for your loved ones.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-[#FFBD31] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-[#0F4C5C]" size={24} />
              </div>
              <h3 className="font-semibold text-[#0F4C5C] mb-2">Phone</h3>
              <p className="text-gray-600">+447404911446</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri: 09:00 AM - 06:00 PM</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-[#FFBD31] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-[#0F4C5C]" size={24} />
              </div>
              <h3 className="font-semibold text-[#0F4C5C] mb-2">Email</h3>
              <p className="text-gray-600">children@angelandstarcareservices.com</p>
              <p className="text-sm text-gray-500 mt-1">24-hour response</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-[#FFBD31] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[#0F4C5C]" size={24} />
              </div>
              <h3 className="font-semibold text-[#0F4C5C] mb-2">Office</h3>
              <p className="text-gray-600">Unit 1, The Courtyard, 17 Bond Street,</p>
              <p className="text-sm text-gray-500 mt-1">Nuneaton, Warwickshire, England, CV11 4BX</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#0F4C5C] mb-3">
                  Make a Referral or Enquiry
                </h3>
                <p className="text-gray-600">
                  Leave a message for our specialist team below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className="border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Smith"
                      className="border-gray-300"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john.smith@example.com"
                      className="border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="07123 456789"
                      className="border-gray-300"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Type of Support Needed *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, serviceType: value })
                    }
                    required
                  >
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select a service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Care Homes</SelectItem>
                      <SelectItem value="supported-accommodation">Supported Accommodation</SelectItem>
                      <SelectItem value="consultancy">Professional Consultancy</SelectItem>
                      <SelectItem value="other">Other / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your support needs or any specific questions you have..."
                    rows={5}
                    className="border-gray-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-[#0F4C5C] hover:bg-[#16697A] text-white py-6 text-lg font-semibold"
                  >
                    <Send className="mr-2" size={20} />
                    Submit Enquiry
                  </Button>
                </div>
              </form>
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
            <a
              href="#contact"
              className="bg-[#0F4C5C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16697A] transition-colors inline-flex items-center justify-center"
            >
              Make a Referral
              <ArrowRight className="ml-2" size={20} />
            </a>
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
