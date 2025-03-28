
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full px-4 py-12 md:py-16 bg-[#faf8f6] relative">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a1a2a] leading-tight mb-4">
            Turn Your Pet<br />Into Royalty
          </h1>
          <p className="text-lg text-[#445566] mb-8 max-w-md">
            Delight your pet with a one of a kind portrait
            that captures their unique personality.
          </p>
          <Link 
            to="/create" 
            className="inline-block bg-[#e76a6a] hover:bg-[#d45a5a] text-white font-medium px-8 py-3 rounded-md transition-colors"
          >
            Create Yours Now
          </Link>
        </div>
        <div className="md:w-1/2 md:pl-12 relative">
          <div className="relative inline-block">
            <img 
              src="/lovable-uploads/a24c35ab-9efa-4d13-94d8-64477b0c5c18.png" 
              alt="Pet portrait of a dog and cat dressed as royalty" 
              className="w-full max-w-lg mx-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
