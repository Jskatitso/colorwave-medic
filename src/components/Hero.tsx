
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="medical-container">
        <div className="grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
          <div className="space-y-6">
            <div className="inline-block bg-medical-red/10 px-4 py-1 rounded-full">
              <span className="text-medical-red font-medium text-sm">Your Health, Our Priority</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-black leading-tight">
              Quality <span className="text-medical-red">Healthcare</span> For You & Your Family
            </h1>
            <p className="text-gray-600 text-lg md:pr-12">
              We provide comprehensive medical services to help you stay healthy and recover quickly. Our team of experts is dedicated to your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-medical-red hover:bg-medical-red/90 text-white text-base py-6 px-8">
                Find a Doctor
              </Button>
              <Button variant="outline" className="border-medical-red text-medical-red hover:bg-medical-red/5 text-base py-6 px-8">
                Upload Image
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-6">
              <div>
                <p className="font-bold text-3xl text-medical-black">50+</p>
                <p className="text-gray-500">Medical Specialists</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="font-bold text-3xl text-medical-black">10k+</p>
                <p className="text-gray-500">Satisfied Patients</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="font-bold text-3xl text-medical-black">15+</p>
                <p className="text-gray-500">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto rounded-full overflow-hidden bg-accent relative">
              <div className="absolute inset-0 bg-gradient-to-br from-medical-red/30 to-transparent rounded-full"></div>
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-medical-red/20 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Doctor with patient" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl p-4 flex items-center gap-3 w-4/5 max-w-xs">
              <div className="bg-green-100 p-2 rounded-full">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-slow"></div>
              </div>
              <div>
                <p className="font-medium text-medical-black">Open Now</p>
                <p className="text-xs text-gray-500">24/7 Emergency Care Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
