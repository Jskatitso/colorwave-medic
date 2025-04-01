
import React from 'react';
import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="medical-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-medical-red" />
              <span className="font-bold text-xl text-medical-black">MediCare</span>
            </div>
            <p className="text-gray-600 mb-6">
              Providing quality healthcare services to our community for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white p-2 rounded-full border border-gray-200 text-medical-red hover:bg-medical-red hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full border border-gray-200 text-medical-red hover:bg-medical-red hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full border border-gray-200 text-medical-red hover:bg-medical-red hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full border border-gray-200 text-medical-red hover:bg-medical-red hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-medical-black mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-medical-red">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-medical-red">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-medical-red">Services</Link></li>
              <li><Link to="/doctors" className="text-gray-600 hover:text-medical-red">Doctors</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-medical-red">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-medical-black mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/cardiology" className="text-gray-600 hover:text-medical-red">Cardiology</Link></li>
              <li><Link to="/services/pediatrics" className="text-gray-600 hover:text-medical-red">Pediatrics</Link></li>
              <li><Link to="/services/laboratory" className="text-gray-600 hover:text-medical-red">Laboratory</Link></li>
              <li><Link to="/services/emergency" className="text-gray-600 hover:text-medical-red">Emergency Care</Link></li>
              <li><Link to="/services/pharmacy" className="text-gray-600 hover:text-medical-red">Pharmacy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-medical-black mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-medical-red mr-3" />
                <span className="text-gray-600">123 Healthcare Blvd, Medical City, MC 12345</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-medical-red mr-3" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-medical-red mr-3" />
                <span className="text-gray-600">info@medicare.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MediCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
