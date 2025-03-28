
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf8f6] p-4">
      <h1 className="text-4xl font-bold text-[#0a1a2a] mb-4">Page Not Found</h1>
      <p className="text-lg text-[#445566] mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="inline-block bg-[#e76a6a] hover:bg-[#d45a5a] text-white font-medium px-6 py-3 rounded-md transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
