
import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 pb-8 bg-gray-50">
        <div className="medical-container">
          <h1 className="text-4xl font-bold text-medical-black text-center mb-2">Our Services</h1>
          <p className="text-gray-600 text-center mb-8">Comprehensive healthcare services for all your needs</p>
        </div>
      </div>
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;
