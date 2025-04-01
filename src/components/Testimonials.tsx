
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Patient",
    testimonial: "The care I received at MediCare was exceptional. The doctors were knowledgeable and took the time to listen to my concerns.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    name: "Robert Adams",
    role: "Patient",
    testimonial: "I've been coming to MediCare for years. The staff is always friendly and professional, and I never have to wait long for an appointment.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
    name: "Jennifer Martinez",
    role: "Patient",
    testimonial: "After my surgery at MediCare, the follow-up care was outstanding. The entire team made sure I had everything I needed for a smooth recovery.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-medical-red/5">
      <div className="medical-container">
        <div className="text-center mb-12">
          <span className="text-medical-red font-medium">Testimonials</span>
          <h2 className="text-3xl font-bold text-medical-black mt-2">What Our Patients Say</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Read about the experiences of our patients and how our services have helped them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Card key={index} className="border-0 shadow-md h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="h-8 w-8 text-medical-red mb-4" />
                <p className="text-gray-600 flex-grow mb-4">{item.testimonial}</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-black">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
