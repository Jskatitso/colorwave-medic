
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="medical-container">
        <div className="bg-gradient-to-r from-medical-red to-red-600 rounded-2xl p-10 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Need Emergency Medical Care?</h2>
              <p className="text-white/90 mb-6">
                Our emergency services are available 24/7. Don't hesitate to contact us for immediate medical assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-medical-red hover:bg-white/90 text-base py-6">
                  Book an Appointment
                </Button>
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Emergency Hotline</p>
                    <p className="font-bold text-lg">1-800-MEDICARE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt="Emergency services" 
                className="rounded-lg max-h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
