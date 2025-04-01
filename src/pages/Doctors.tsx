
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Search, PlusCircle, BrainCircuit } from 'lucide-react';
import DoctorsList from '@/components/DoctorsList';
import AISymptomChecker from '@/components/AISymptomChecker';

const DoctorsPage = () => {
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gray-800 h-[400px] flex items-center">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-medical-red/80 to-black/30 z-[1]"></div>
        <img 
          src="/lovable-uploads/64bf635a-6818-4700-ae0f-3121f3249daa.png" 
          alt="Medical team" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay z-0"
        />
        <div className="medical-container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CARE WITHOUT COMPROMISE</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            MediCare provides a range of healthcare services delivered by Our Highly Experienced Doctors. Access Appointments and Quality Care Management.
          </p>
          <Button className="bg-medical-red hover:bg-medical-red/90 text-white">
            Book Online
          </Button>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="py-16 bg-gray-100">
        <div className="medical-container text-center">
          <h2 className="text-3xl font-bold mb-2">WELCOME TO <span className="text-medical-red">MEDICARE</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            MediCare is dedicated to improving the quality of life for patients by ensuring they receive the very best care possible.
            That's why we aim to partner with our clients throughout the therapeutic journey, providing specialized
            healthcare solutions and research-backed technology with a focus on cardiology, ultrasound, vascular access and
            pain management to address the most complex medical challenges.
          </p>

          {/* AI Feature Button */}
          <div className="mb-12">
            <Button 
              className="bg-medical-red hover:bg-medical-red/90 text-white flex items-center gap-2 mx-auto px-6 py-6 text-lg"
              onClick={() => setIsAIOpen(true)}
            >
              <BrainCircuit className="w-6 h-6" />
              Try Our AI Symptom Checker
            </Button>
            <p className="text-sm text-gray-500 mt-2">Get preliminary health insights powered by advanced AI</p>
          </div>

          {/* Search Doctors */}
          <div className="max-w-md mx-auto mb-12">
            <div className="flex gap-2">
              <Input 
                className="bg-white" 
                placeholder="Search for doctors by name or specialty" 
              />
              <Button className="bg-medical-red hover:bg-medical-red/90 text-white">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors List */}
      <div className="py-12 bg-white">
        <div className="medical-container">
          <h2 className="text-3xl font-bold text-center mb-12">OUR SPECIALISTS</h2>
          <DoctorsList />
        </div>
      </div>

      {/* AI Modal */}
      {isAIOpen && (
        <AISymptomChecker onClose={() => setIsAIOpen(false)} />
      )}

      <Footer />
    </div>
  );
};

export default DoctorsPage;
