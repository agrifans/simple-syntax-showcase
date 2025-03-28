
import React from "react";
import { Upload, Check, Package } from "lucide-react";

interface StepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
}

const Step = ({ icon, number, title, description }: StepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-md">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-1">
        {number} {title}
      </h3>
      <p className="text-sm text-gray-600 max-w-xs">
        {description}
      </p>
    </div>
  );
};

const Arrow = () => (
  <div className="hidden md:flex items-center justify-center">
    <div className="text-4xl text-gray-400">→</div>
  </div>
);

const HowItWorksSection = () => {
  return (
    <section className="w-full px-4 py-16 bg-[#f0f6ff]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-[#0a1a2a] mb-14">
          How it works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <Step 
            icon={<Upload size={32} className="text-[#445566]" />}
            number={1}
            title="Upload photo"
            description="Get Uresproase uson your phone to"
          />
          
          <Arrow />
          
          <Step 
            icon={<Check size={32} className="text-[#445566]" />}
            number={2}
            title="Approve preview"
            description="Approval avalt-dert and approve and receive"
          />
          
          <Arrow />
          
          <Step 
            icon={<Package size={32} className="text-[#445566]" />}
            number={2}
            title="Receive your artwork"
            description="Get protective from every order"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
