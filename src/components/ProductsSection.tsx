
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Filter, ShoppingCart, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

type ProductCategory = 'all' | 'diagnostic' | 'monitoring' | 'surgical' | 'ppe';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Digital Stethoscope Pro",
    description: "Advanced digital stethoscope with noise cancellation and recording capabilities",
    price: 299.99,
    image: "/placeholder.svg",
    category: "diagnostic",
    rating: 4.8
  },
  {
    id: 2,
    name: "Vital Signs Monitor",
    description: "All-in-one monitor for blood pressure, ECG, SpO2, and temperature",
    price: 1299.99,
    image: "/placeholder.svg",
    category: "monitoring",
    rating: 4.9
  },
  {
    id: 3,
    name: "Surgical Instrument Set",
    description: "Complete set of premium stainless steel surgical instruments",
    price: 899.99,
    image: "/placeholder.svg",
    category: "surgical",
    rating: 4.7
  },
  {
    id: 4,
    name: "Medical-Grade N95 Masks",
    description: "Box of 50 N95 respirator masks with fluid resistance",
    price: 79.99,
    image: "/placeholder.svg",
    category: "ppe",
    rating: 4.6
  },
  {
    id: 5,
    name: "Portable Ultrasound Scanner",
    description: "Wireless ultrasound device compatible with smartphones and tablets",
    price: 2499.99,
    image: "/placeholder.svg",
    category: "diagnostic",
    rating: 4.9
  },
  {
    id: 6,
    name: "Smart Blood Pressure Monitor",
    description: "Bluetooth-enabled blood pressure monitor with app integration",
    price: 129.99,
    image: "/placeholder.svg",
    category: "monitoring",
    rating: 4.5
  },
  {
    id: 7,
    name: "Digital Thermometer",
    description: "Non-contact infrared thermometer with LCD display",
    price: 49.99,
    image: "/placeholder.svg",
    category: "diagnostic",
    rating: 4.4
  },
  {
    id: 8,
    name: "Surgical Headlight",
    description: "LED surgical headlight with rechargeable battery",
    price: 349.99,
    image: "/placeholder.svg",
    category: "surgical",
    rating: 4.7
  }
];

const ProductsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [cart, setCart] = useState<{id: number, quantity: number}[]>([]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: number) => {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { id: productId, quantity: 1 }]);
    }
    
    const product = products.find(p => p.id === productId);
    toast({
      title: "Product added to cart",
      description: `${product?.name} has been added to your cart`
    });
  };

  const categories: {value: ProductCategory, label: string}[] = [
    { value: 'all', label: 'All Products' },
    { value: 'diagnostic', label: 'Diagnostic' },
    { value: 'monitoring', label: 'Monitoring' },
    { value: 'surgical', label: 'Surgical' },
    { value: 'ppe', label: 'PPE' },
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <section className="py-12">
      <div className="medical-container">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-6">
          {/* Search and filters */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="h-4 w-4 text-gray-500" />
              {categories.map(category => (
                <Button
                  key={category.value}
                  variant={activeCategory === category.value ? "default" : "outline"}
                  className={`whitespace-nowrap ${activeCategory === category.value ? 'bg-medical-red' : ''}`}
                  onClick={() => setActiveCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Cart indicator */}
          <div className="relative">
            <Button variant="outline" className="flex gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span>Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-medical-red text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Products grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No products found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 aspect-square flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full object-contain"
                  />
                </div>
                <CardContent className="flex-grow pt-6">
                  <div className="flex items-center gap-1 mb-2">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-500 ml-1">{product.rating}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <p className="font-bold text-xl text-medical-black">${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button 
                    className="w-full bg-medical-red hover:bg-medical-red/90" 
                    onClick={() => addToCart(product.id)}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
