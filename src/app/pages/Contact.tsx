import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
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

export function ContactPage() {
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
    // In a real application, this would send the form data to a backend
    alert('Thank you for your enquiry! We will contact you within 24 hours.');
    // Reset form
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#0F4C5C] to-[#16697A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We're here to answer your questions and help you find the right care solution for your loved ones
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-[#FFBD31] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-[#0F4C5C]" size={24} />
              </div>
              <h3 className="font-semibold text-lg text-[#0F4C5C] mb-1">Phone Number</h3>
              <p className="text-gray-600">02475263024</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri: 09:00  - 18:00 </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-[#FFBD31] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-[#0F4C5C]" size={24} />
              </div>
              <h3 className="font-semibold text-[#0F4C5C] mb-2">Email</h3>
              <p className="text-gray-600">office@angelandstarcareservices.com</p>
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
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#0F4C5C] mb-3">
                Lets Book a free Assessment
              </h2>
              <p className="text-gray-600">
                Leave A Message For Us below and we'll get back to you within 24 hours
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
                    placeholder="(555) 123-4567"
                    className="border-gray-300"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label htmlFor="serviceType">Type of Service Needed *</Label>
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
                    <SelectItem value="in-home-care">In-Home Care</SelectItem>
                    <SelectItem value="companionship">Companionship Support</SelectItem>
                    <SelectItem value="live-in">Live-In Care</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Care Frequency */}
              <div className="space-y-2">
                <Label htmlFor="careNeeded">When Do You Need Care? *</Label>
                <Select
                  value={formData.careNeeded}
                  onValueChange={(value) =>
                    setFormData({ ...formData, careNeeded: value })
                  }
                  required
                >
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediately (Within 1 week)</SelectItem>
                    <SelectItem value="soon">Soon (1-4 weeks)</SelectItem>
                    <SelectItem value="planning">Planning Ahead (1-3 months)</SelectItem>
                    <SelectItem value="future">Future Reference (3+ months)</SelectItem>
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
                  placeholder="Tell us more about your care needs, schedule preferences, or any specific questions you have..."
                  rows={5}
                  className="border-gray-300 resize-none"
                />
                <p className="text-sm text-gray-500">
                  Optional: Share any specific needs, concerns, or questions
                </p>
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
                <p className="text-center text-sm text-gray-500 mt-3">
                  By submitting this form, you agree to be contacted by Angel & Star Care Services
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F4C5C] mb-4">
              What Happens Next?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFBD31] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#0F4C5C]">1</span>
              </div>
              <h3 className="font-semibold text-lg text-[#0F4C5C] mb-2">
                We'll Contact You
              </h3>
              <p className="text-gray-600">
                A member of our team will reach out to you within 24 hours to discuss your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFBD31] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#0F4C5C]">2</span>
              </div>
              <h3 className="font-semibold text-lg text-[#0F4C5C] mb-2">
                Free Consultation
              </h3>
              <p className="text-gray-600">
                We'll arrange a free consultation to assess needs and create a personalised care plan.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFBD31] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#0F4C5C]">3</span>
              </div>
              <h3 className="font-semibold text-lg text-[#0F4C5C] mb-2">
                Start Care
              </h3>
              <p className="text-gray-600">
                Once you're ready, we'll match you with the perfect caregiver and begin services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12 bg-gradient-to-r from-[#0F4C5C] to-[#16697A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="text-[#FFBD31] mr-2" size={28} />
            <h3 className="text-2xl font-bold">Need Immediate Assistance?</h3>
          </div>
          <p className="text-xl mb-6">
            Our support line is available 24/7 for urgent care needs
          </p>
          <a
            href="tel:02475263024"
            className="bg-[#FFBD31] text-[#0F4C5C] px-8 py-4 rounded-lg font-semibold hover:bg-[#ffc94d] transition-colors inline-block"
          >
            Call Now: 02475263024
          </a>
        </div>
      </section>
    </div>
  );
}
