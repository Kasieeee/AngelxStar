import { useState } from 'react';
import { Link } from 'react-router';
import {
  Heart,
  Users,
  TrendingUp,
  Award,
  Calendar,
  DollarSign,
  GraduationCap,
  ArrowRight,
  Briefcase,
  Upload,
  FileText,
} from 'lucide-react';
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

export function CareersPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    availability: '',
    experience: '',
    message: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data and CV to a backend
    alert('Thank you for your interest! We will review your application and contact you soon.');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      availability: '',
      experience: '',
      message: '',
    });
    setCvFile(null);
    // Reset file input
    const fileInput = document.getElementById('cv-upload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading pay rates with performance bonuses and regular reviews',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Choose shifts that work with your lifestyle and commitments',
    },
    {
      icon: GraduationCap,
      title: 'Training & Development',
      description: 'Ongoing professional development and certification opportunities',
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Comprehensive health, dental, and vision insurance coverage',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear pathways for advancement and leadership opportunities',
    },
    {
      icon: Award,
      title: 'Recognition Program',
      description: 'Regular recognition and rewards for outstanding performance',
    },
  ];

  const values = [
    {
      title: 'Compassion',
      description: 'We treat every client with empathy, dignity, and respect',
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do',
    },
    {
      title: 'Integrity',
      description: 'We act with honesty and maintain the highest ethical standards',
    },
    {
      title: 'Teamwork',
      description: 'We support each other and work together toward common goals',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F4C5C] to-[#16697A] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#FFBD31] text-[#0F4C5C] px-4 py-2 rounded-full font-semibold mb-4">
                Join Our Team
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Make a Difference Every Day
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Join a team of passionate healthcare professionals dedicated to providing exceptional care and improving lives. Build a rewarding career while making a meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#open-positions"
                  className="bg-[#FFBD31] text-[#0F4C5C] px-8 py-4 rounded-lg font-semibold hover:bg-[#ffc94d] transition-colors text-center inline-flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0F4C5C] transition-colors text-center"
                >
                  Submit Your Resume
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1592392821486-71f028a00581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGRpdmVyc2V8ZW58MXx8fHwxNzcxNTE3Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Diverse healthcare team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-4">
              Why Work at Angel and Star?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in our team members because we know that great care starts with great caregivers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-14 h-14 bg-[#FFBD31] rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-[#0F4C5C]" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-12 h-12 bg-[#0F4C5C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-[#FFBD31]" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-[#0F4C5C] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691463384-771db2f192b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3RhZmYlMjBzbWlsaW5nfGVufDF8fHx8MTc3MTUxNzc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Smiling medical staff"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-[#FFBD31] text-6xl mb-4">"</div>
              <blockquote className="text-2xl text-gray-700 mb-6 leading-relaxed">
                Working at Angel and Star Care Services has been incredibly rewarding. Every day I get to make a real difference in people's lives, and the support from my team makes it all worthwhile.
              </blockquote>
              <div>
                <p className="font-semibold text-lg text-[#0F4C5C]">Maria Rodriguez, RN</p>
                <p className="text-gray-600">Senior Care Nurse • 5 years with Angel and Star</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-4">
              Register Your Interest
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete the form below to express your interest in joining our team. We'll review your information and contact you about suitable opportunities.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
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
                    placeholder="(555) 123-4567"
                    className="border-gray-300"
                  />
                </div>
              </div>

              {/* Position and Availability */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="position">Position of Interest *</Label>
                  <Select
                    value={formData.position}
                    onValueChange={(value) =>
                      setFormData({ ...formData, position: value })
                    }
                    required
                  >
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="registered-nurse">Registered Nurse (RN)</SelectItem>
                      <SelectItem value="pediatric-nurse">Pediatric Nurse</SelectItem>
                      <SelectItem value="personal-care-assistant">Personal Care Assistant</SelectItem>
                      <SelectItem value="dementia-specialist">Dementia Care Specialist</SelectItem>
                      <SelectItem value="child-care-provider">Child Care Provider</SelectItem>
                      <SelectItem value="care-coordinator">Care Coordinator</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability *</Label>
                  <Select
                    value={formData.availability}
                    onValueChange={(value) =>
                      setFormData({ ...formData, availability: value })
                    }
                    required
                  >
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-Time</SelectItem>
                      <SelectItem value="part-time">Part-Time</SelectItem>
                      <SelectItem value="per-diem">Per Diem</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Years of Experience */}
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Input
                  id="experience"
                  name="experience"
                  type="number"
                  min="0"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 5"
                  className="border-gray-300"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Tell Us About Yourself *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Share your experience, qualifications, and why you're interested in working with Angel and Star Care Services..."
                  rows={5}
                  className="border-gray-300 resize-none"
                />
              </div>

              {/* CV Upload */}
              <div className="space-y-2">
                <Label htmlFor="cv-upload">
                  Upload CV/Resume <span className="text-gray-500">(Optional)</span>
                </Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0F4C5C] transition-colors">
                  <input
                    type="file"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    <Upload className="mx-auto mb-3 text-[#0F4C5C]" size={40} />
                    {cvFile ? (
                      <div className="flex items-center justify-center gap-2 text-[#0F4C5C]">
                        <FileText size={20} />
                        <span className="font-semibold">{cvFile.name}</span>
                      </div>
                    ) : (
                      <>
                        <p className="text-gray-600 mb-1">
                          <span className="text-[#0F4C5C] font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-sm text-gray-500">
                          PDF, DOC, or DOCX (Max 10MB)
                        </p>
                      </>
                    )}
                  </label>
                </div>
                {cvFile && (
                  <button
                    type="button"
                    onClick={() => {
                      setCvFile(null);
                      const fileInput = document.getElementById('cv-upload') as HTMLInputElement;
                      if (fileInput) fileInput.value = '';
                    }}
                    className="text-sm text-red-600 hover:text-red-700 mt-2"
                  >
                    Remove file
                  </button>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-[#0F4C5C] hover:bg-[#16697A] text-white py-6 text-lg font-semibold"
                >
                  <Briefcase className="mr-2" size={20} />
                  Submit Application
                </Button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  By submitting this form, you agree to our privacy policy and consent to be contacted by Angel and Star Care Services
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0F4C5C] to-[#16697A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="mx-auto mb-6 text-[#FFBD31]" size={48} />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Questions About Working With Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Our recruitment team is here to help answer any questions you have about careers at Angel and Star
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:office@angelandstarcareservices.com"
              className="bg-[#FFBD31] text-[#0F4C5C] px-8 py-4 rounded-lg font-semibold hover:bg-[#ffc94d] transition-colors inline-flex items-center justify-center"
            >
              Email Careers Team
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="tel:+447495324648"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0F4C5C] transition-colors"
            >
              Call 07495 324648
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}