
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    rating: 4.9,
    experience: "12 years"
  },
  {
    name: "Dr. Michael Lee",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    experience: "15 years"
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: 4.9,
    experience: "10 years"
  },
  {
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    rating: 4.7,
    experience: "18 years"
  }
];

const Doctors = () => {
  return (
    <section className="py-16 bg-white">
      <div className="medical-container">
        <div className="text-center mb-12">
          <span className="text-medical-red font-medium">Our Team</span>
          <h2 className="text-3xl font-bold text-medical-black mt-2">Meet Our Specialists</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our team of highly qualified medical professionals is dedicated to providing exceptional healthcare services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="h-full w-full object-cover"
                />
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <div className="bg-medical-red/10 px-2 py-1 rounded text-xs font-medium text-medical-red">
                    {doctor.specialty}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-medical-black">{doctor.name}</h3>
                <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                  <span>⭐ {doctor.rating}</span>
                  <span>{doctor.experience} exp</span>
                </div>
                <Button className="w-full mt-4 bg-medical-red hover:bg-medical-red/90 text-white">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-medical-red text-medical-red hover:bg-medical-red/5">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
