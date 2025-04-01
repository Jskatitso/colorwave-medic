
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductsSection from '@/components/ProductsSection';
import CTA from '@/components/CTA';

const ProductsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-medical-red/5 py-20">
          <div className="medical-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl md:text-5xl font-bold text-medical-black mb-4">Medical Products</h1>
              <p className="text-gray-600 text-lg">
                High-quality medical equipment and supplies for healthcare professionals
              </p>
            </div>
          </div>
        </div>
        <ProductsSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
