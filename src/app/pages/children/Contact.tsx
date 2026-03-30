import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

export function ChildrenContactPage() {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0F4C5C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We're here to answer your questions and discuss personalized support for your loved ones.
          </p>
        </div>
      </section>

      {/* Children Services Contact Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-8 border-[#FFBD31]">
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
    </div>
  );
}
