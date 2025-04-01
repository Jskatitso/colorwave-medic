
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contact form submission logic would go here
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 pb-8 bg-gray-50">
        <div className="medical-container">
          <h1 className="text-4xl font-bold text-medical-black text-center mb-2">Contact Us</h1>
          <p className="text-gray-600 text-center mb-8">We're here to help with any questions you may have</p>
        </div>
      </div>
      
      <section className="py-12">
        <div className="medical-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-medical-black mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" id="firstName" className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-red focus:ring-medical-red" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-red focus:ring-medical-red" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-red focus:ring-medical-red" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-red focus:ring-medical-red" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={5} className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-red focus:ring-medical-red" required></textarea>
                </div>
                <Button type="submit" className="bg-medical-red hover:bg-medical-red/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-medical-black mb-6">Contact Information</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-medical-red mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg text-medical-black">Address</h3>
                      <p className="text-gray-600">123 Healthcare Blvd, Medical City, MC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-medical-red mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg text-medical-black">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-medical-red mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg text-medical-black">Email</h3>
                      <p className="text-gray-600">info@medicare.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-medical-red mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg text-medical-black">Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 8:00 PM<br />
                        Saturday: 9:00 AM - 5:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-lg text-medical-black mb-4">Location Map</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Map placeholder - would integrate Google Maps here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
