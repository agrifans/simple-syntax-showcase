
import React from "react";
import { Link } from "react-router-dom";
import { Upload, ArrowLeft } from "lucide-react";

const Create = () => {
  return (
    <div className="min-h-screen bg-[#faf8f6]">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <Link to="/" className="inline-flex items-center text-[#445566] hover:text-[#0a1a2a] mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to home
        </Link>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <h1 className="text-3xl font-bold text-[#0a1a2a] mb-6">Create Your Pet Portrait</h1>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center bg-gray-50">
            <Upload size={48} className="text-gray-400 mb-4" />
            <p className="text-center text-[#445566] mb-4">
              Drag and drop your pet's photo here, or click to browse
            </p>
            <button className="bg-[#e76a6a] hover:bg-[#d45a5a] text-white font-medium px-6 py-2 rounded-md transition-colors">
              Upload Photo
            </button>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-medium text-[#0a1a2a] mb-4">Tips for the best results:</h2>
            <ul className="list-disc list-inside text-[#445566] space-y-2">
              <li>Use a clear, well-lit photo of your pet</li>
              <li>Make sure your pet's face is clearly visible</li>
              <li>Photos where your pet is looking at the camera work best</li>
              <li>Higher resolution photos produce better quality portraits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
