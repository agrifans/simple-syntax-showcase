
import React from "react";
import { Link } from "react-router-dom";
import { Frame, ImageIcon, Bed, Coffee, Cat, Dog } from "lucide-react";

const CollectionItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
  return (
    <Link to={`/collections/${label.toLowerCase()}`} className="flex flex-col items-center group">
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-all">
        {icon}
      </div>
      <span className="text-sm font-medium text-[#445566]">{label}</span>
    </Link>
  );
};

const CollectionsSection = () => {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-[#0a1a2a] mb-12">
          <span className="inline-block align-middle mr-2">❤</span> Our Collections
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          <CollectionItem 
            icon={<Frame size={28} className="text-[#445566]" />} 
            label="Portraits" 
          />
          <CollectionItem 
            icon={<ImageIcon size={28} className="text-[#445566]" />} 
            label="Posters" 
          />
          <CollectionItem 
            icon={<Bed size={28} className="text-[#445566]" />} 
            label="Blankets" 
          />
          <CollectionItem 
            icon={<Coffee size={28} className="text-[#445566]" />} 
            label="Mugs" 
          />
          <CollectionItem 
            icon={<Cat size={28} className="text-[#445566]" />} 
            label="Design your own" 
          />
          <CollectionItem 
            icon={<Dog size={28} className="text-[#445566]" />} 
            label="Live typm" 
          />
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
