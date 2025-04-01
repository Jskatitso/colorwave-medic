
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 pb-8 bg-gray-50">
        <div className="medical-container">
          <h1 className="text-4xl font-bold text-medical-black text-center mb-2">About Us</h1>
          <p className="text-gray-600 text-center mb-8">Learn about our mission and values</p>
        </div>
      </div>
      
      <section className="py-12">
        <div className="medical-container">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-medical-black mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                MediCare is dedicated to providing exceptional healthcare services with compassion and integrity. 
                Our mission is to improve the health and wellbeing of the communities we serve through accessible, 
                high-quality care delivered by our team of dedicated professionals.
              </p>
              <p className="text-gray-600">
                We strive to be at the forefront of medical innovation while maintaining a patient-centered 
                approach that treats each individual with dignity and respect.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-medical-red/10 p-8 rounded-full">
                <Heart className="h-32 w-32 text-medical-red" />
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-medical-black mb-6 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-medical-black mb-3">Excellence</h3>
                <p className="text-gray-600">We are committed to delivering the highest standard of care in everything we do.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-medical-black mb-3">Compassion</h3>
                <p className="text-gray-600">We provide care with kindness, empathy, and respect for all individuals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-medical-black mb-3">Innovation</h3>
                <p className="text-gray-600">We embrace new technologies and approaches to improve patient outcomes.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-medical-black mb-6 text-center">Our History</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2005, MediCare began as a small clinic with a vision to provide affordable healthcare to underserved communities. 
              Over the years, we have grown into a comprehensive healthcare provider with state-of-the-art facilities and a team of 
              expert physicians and healthcare professionals.
            </p>
            <p className="text-gray-600 mb-4">
              Throughout our journey, we have remained true to our core principles of putting patients first and delivering 
              care with excellence and compassion. Today, we serve thousands of patients annually, offering a wide range of 
              specialized medical services.
            </p>
            <p className="text-gray-600">
              As we look to the future, we are committed to expanding our reach and impact, while continuing to raise 
              the standard of healthcare delivery in our community.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
