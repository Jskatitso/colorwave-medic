
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ years of experience",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    experience: "12+ years of experience",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    experience: "10+ years of experience",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 4,
    name: "Dr. David Williams",
    specialty: "Orthopedic Surgeon",
    experience: "18+ years of experience",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialty: "Dermatologist",
    experience: "14+ years of experience",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "Gastroenterologist",
    experience: "16+ years of experience",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  }
];

const DoctorsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {doctors.map((doctor) => (
        <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-200">
          <div className="h-64 overflow-hidden">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
            />
          </div>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-medical-black">{doctor.name}</h3>
            <p className="text-medical-red font-medium">{doctor.specialty}</p>
            <p className="text-gray-600 text-sm mt-1">{doctor.experience}</p>
          </CardContent>
          <CardFooter className="flex justify-between border-t border-gray-100 pt-4 pb-6">
            <Button variant="outline" className="border-medical-red text-medical-red hover:bg-medical-red/5 flex gap-2">
              <Phone className="h-4 w-4" />
              Contact
            </Button>
            <Button className="bg-medical-red hover:bg-medical-red/90 text-white flex gap-2">
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default DoctorsList;
