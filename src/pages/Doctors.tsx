
import React from 'react';
import Navbar from '@/components/Navbar';
import Doctors from '@/components/Doctors';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

const DoctorsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 pb-8 bg-gray-50">
        <div className="medical-container">
          <h1 className="text-4xl font-bold text-medical-black text-center mb-2">Our Doctors</h1>
          <p className="text-gray-600 text-center mb-8">Meet our team of experienced healthcare professionals</p>
        </div>
      </div>
      <Doctors />
      <CTA />
      <Footer />
    </div>
  );
};

export default DoctorsPage;
