
import React from "react";
import { MapPin, CreditCard, Clock, TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-8 bg-[#faf8f6] border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center space-x-6 mb-8">
          <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">K</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">D</span>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p>© 2023 Pet Portraits. All rights reserved.</p>
          <p className="mt-2">Created with 💖 for pet lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
