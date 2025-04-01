
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { toast } from 'sonner';

const AppointmentPage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 4,
      name: "Dr. David Williams",
      specialty: "Orthopedic Surgeon",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
    }
  ];

  const availableDates = [
    "2024-09-01",
    "2024-09-02",
    "2024-09-03",
    "2024-09-04",
    "2024-09-05"
  ];

  const availableTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM"
  ];

  const handleDateSelection = (date: string) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  const handleDoctorSelection = (doctorId: number) => {
    setSelectedDoctor(doctorId.toString());
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !selectedDoctor) {
      toast.error("Please select a doctor to continue");
      return;
    }
    if (currentStep === 2 && (!selectedDate || !selectedTime)) {
      toast.error("Please select both date and time to continue");
      return;
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      if (!name || !email || !phone) {
        toast.error("Please fill in all required fields");
        return;
      }
      handleBookAppointment();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBookAppointment = () => {
    setIsDialogOpen(true);
    // In a real app, you would send the data to your backend here
    console.log({
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
      name,
      email,
      phone,
      reason
    });
  };

  const handleConfirmBooking = () => {
    toast.success("Appointment booked successfully!");
    setIsDialogOpen(false);
    // Reset form
    setSelectedDate("");
    setSelectedTime("");
    setSelectedDoctor("");
    setName("");
    setEmail("");
    setPhone("");
    setReason("");
    setCurrentStep(1);
    
    // In a real app, navigate to a confirmation page
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gray-800 h-[300px] flex items-center">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-medical-red/80 to-black/30 z-[1]"></div>
        <img 
          src="/lovable-uploads/ce65ca3a-5ee3-42b4-89e8-1f66ee822651.png" 
          alt="Appointment booking" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay z-0"
        />
        <div className="medical-container relative z-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-lg max-w-2xl mb-8">
            Schedule an appointment with our specialists and take the first step towards better health.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-12 bg-gray-50">
        <div className="medical-container">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-medical-red text-white p-6 rounded-t-lg">
              <CardTitle className="text-2xl">Book an Appointment</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${currentStep >= 1 ? 'bg-medical-red text-white' : 'bg-gray-200'}`}>1</div>
                  <div className={`h-1 flex-1 ${currentStep >= 2 ? 'bg-medical-red' : 'bg-gray-200'}`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-4 ${currentStep >= 2 ? 'bg-medical-red text-white' : 'bg-gray-200'}`}>2</div>
                  <div className={`h-1 flex-1 ${currentStep >= 3 ? 'bg-medical-red' : 'bg-gray-200'}`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ml-4 ${currentStep >= 3 ? 'bg-medical-red text-white' : 'bg-gray-200'}`}>3</div>
                </div>
                
                <div className="text-center flex justify-between px-4">
                  <div className="w-20">
                    <p className={`text-sm font-medium ${currentStep === 1 ? 'text-medical-red' : 'text-gray-500'}`}>Select Doctor</p>
                  </div>
                  <div className="w-20">
                    <p className={`text-sm font-medium ${currentStep === 2 ? 'text-medical-red' : 'text-gray-500'}`}>Select Time</p>
                  </div>
                  <div className="w-20">
                    <p className={`text-sm font-medium ${currentStep === 3 ? 'text-medical-red' : 'text-gray-500'}`}>Your Details</p>
                  </div>
                </div>
              </div>
              
              {/* Step 1: Select Doctor */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-medical-black">Choose a Specialist</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {doctors.map((doctor) => (
                      <Card 
                        key={doctor.id}
                        className={`cursor-pointer overflow-hidden transition-all ${selectedDoctor === doctor.id.toString() ? 'ring-2 ring-medical-red' : 'hover:shadow-md'}`}
                        onClick={() => handleDoctorSelection(doctor.id)}
                      >
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={doctor.image} 
                            alt={doctor.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-bold text-medical-black">{doctor.name}</h3>
                          <p className="text-medical-red text-sm">{doctor.specialty}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Step 2: Select Date and Time */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-medical-black">Select Appointment Date & Time</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-medium mb-4 flex items-center">
                        <Calendar className="mr-2 text-medical-red" size={20} />
                        Select Date
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {availableDates.map((date) => (
                          <div
                            key={date}
                            className={`p-3 border rounded-md cursor-pointer transition-all ${selectedDate === date ? 'bg-medical-red text-white border-medical-red' : 'hover:border-medical-red'}`}
                            onClick={() => handleDateSelection(date)}
                          >
                            <p className="font-medium">{formatDate(date)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-4 flex items-center">
                        <Clock className="mr-2 text-medical-red" size={20} />
                        Select Time
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {availableTimes.map((time) => (
                          <div
                            key={time}
                            className={`p-3 border rounded-md cursor-pointer text-center transition-all ${selectedTime === time ? 'bg-medical-red text-white border-medical-red' : 'hover:border-medical-red'}`}
                            onClick={() => handleTimeSelection(time)}
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 3: Patient Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-medical-black">Your Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-medical-red">*</span></label>
                        <Input 
                          id="name" 
                          placeholder="Enter your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-medical-red">*</span></label>
                        <Input 
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-medical-red">*</span></label>
                        <Input 
                          id="phone"
                          placeholder="Enter your phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
                      <Textarea 
                        id="reason"
                        placeholder="Please describe your symptoms or reason for the appointment"
                        className="min-h-[160px]"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="text-md font-medium text-medical-black mb-2">Appointment Summary</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Doctor</p>
                        <p className="font-medium">{doctors.find(d => d.id.toString() === selectedDoctor)?.name || "No doctor selected"}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Date</p>
                        <p className="font-medium">{selectedDate ? formatDate(selectedDate) : "No date selected"}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Time</p>
                        <p className="font-medium">{selectedTime || "No time selected"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-8 flex justify-between">
                {currentStep > 1 && (
                  <Button 
                    variant="outline"
                    onClick={handlePrevStep}
                    className="border-medical-red text-medical-red hover:bg-medical-red/5"
                  >
                    Back
                  </Button>
                )}
                {currentStep === 1 && <div></div>}
                
                <Button 
                  onClick={handleNextStep}
                  className="bg-medical-red hover:bg-medical-red/90 text-white flex items-center"
                >
                  {currentStep < 3 ? 'Continue' : 'Book Appointment'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Confirmation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl">Confirm Appointment</DialogTitle>
            <DialogDescription>
              Please review your appointment details below.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 my-4">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-500">Doctor</p>
                <p className="font-medium">{doctors.find(d => d.id.toString() === selectedDoctor)?.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Specialty</p>
                <p className="font-medium">{doctors.find(d => d.id.toString() === selectedDoctor)?.specialty}</p>
              </div>
              <div>
                <p className="text-gray-500">Date</p>
                <p className="font-medium">{selectedDate ? formatDate(selectedDate) : ""}</p>
              </div>
              <div>
                <p className="text-gray-500">Time</p>
                <p className="font-medium">{selectedTime}</p>
              </div>
              <div>
                <p className="text-gray-500">Name</p>
                <p className="font-medium">{name}</p>
              </div>
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-medium">{phone}</p>
              </div>
            </div>
            <div className="text-sm">
              <p className="text-gray-500">Email</p>
              <p className="font-medium">{email}</p>
            </div>
            {reason && (
              <div className="text-sm">
                <p className="text-gray-500">Reason for Visit</p>
                <p className="font-medium">{reason}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              className="border-gray-300"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmBooking}
              className="bg-medical-red hover:bg-medical-red/90 text-white"
            >
              Confirm Booking
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default AppointmentPage;
