
import React from 'react';
import { Heart, Microscope, Activity, Thermometer, Stethoscope, Tablets } from 'lucide-react';

const servicesList = [
  {
    icon: <Heart className="h-8 w-8 text-medical-red" />,
    title: "Cardiology",
    description: "Comprehensive care for all heart conditions with state-of-the-art diagnostics.",
  },
  {
    icon: <Microscope className="h-8 w-8 text-medical-red" />,
    title: "Laboratory",
    description: "Advanced testing and diagnostics with quick and reliable results.",
  },
  {
    icon: <Activity className="h-8 w-8 text-medical-red" />,
    title: "Emergency Care",
    description: "24/7 emergency services with rapid response times by expert medical staff.",
  },
  {
    icon: <Thermometer className="h-8 w-8 text-medical-red" />,
    title: "Pediatrics",
    description: "Specialized care for children in a comfortable and friendly environment.",
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-medical-red" />,
    title: "General Medicine",
    description: "Primary healthcare services for routine check-ups and general health issues.",
  },
  {
    icon: <Tablets className="h-8 w-8 text-medical-red" />,
    title: "Pharmacy",
    description: "In-house pharmacy with a wide range of prescribed medications.",
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="medical-container">
        <div className="text-center mb-12">
          <span className="text-medical-red font-medium">Our Services</span>
          <h2 className="text-3xl font-bold text-medical-black mt-2">Quality Healthcare Solutions</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We offer a wide range of medical services to meet your healthcare needs, all delivered by our experienced team of medical professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="bg-medical-red/10 p-3 rounded-lg inline-flex mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-medical-black mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
