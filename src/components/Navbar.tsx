
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X, Calendar, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="medical-container">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-medical-red" />
            <span className="font-bold text-xl text-medical-black">MediCare</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-medical-black hover:text-medical-red font-medium">Home</Link>
            <Link to="/services" className="text-medical-black hover:text-medical-red font-medium">Services</Link>
            <Link to="/doctors" className="text-medical-black hover:text-medical-red font-medium">Doctors</Link>
            <Link to="/products" className="text-medical-black hover:text-medical-red font-medium">Products</Link>
            <Link to="/about" className="text-medical-black hover:text-medical-red font-medium">About</Link>
            <Link to="/contact" className="text-medical-black hover:text-medical-red font-medium">Contact</Link>
            <Link to="/appointment">
              <Button className="bg-medical-red hover:bg-medical-red/90 text-white flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
            </Link>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-medical-black">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-medical-black hover:text-medical-red font-medium px-2 py-1">Home</Link>
              <Link to="/services" className="text-medical-black hover:text-medical-red font-medium px-2 py-1">Services</Link>
              <Link to="/doctors" className="text-medical-black hover:text-medical-red font-medium px-2 py-1">Doctors</Link>
              <Link to="/products" className="text-medical-black hover:text-medical-red font-medium px-2 py-1">Products</Link>
              <Link to="/about" className="text-medical-black hover:text-medical-red font-medium px-2 py-1">About</Link>
              <Link to="/contact" className="text-medical-black hover:text-medical-red font-medium px-2 py-1">Contact</Link>
              <Link to="/appointment" className="w-full mt-2">
                <Button className="bg-medical-red hover:bg-medical-red/90 text-white w-full flex items-center justify-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
