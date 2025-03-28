
import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  rating: number;
  popular?: boolean;
}

const ProductCard = ({ id, image, title, price, rating, popular = false }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        {popular && (
          <div className="absolute top-3 left-3 bg-[#e76a6a] text-white text-xs font-medium px-3 py-1 rounded-sm">
            Popular Pick
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex mb-2">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={`${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} mr-1`} 
            />
          ))}
        </div>
        <h3 className="font-medium text-[#0a1a2a]">{title}</h3>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-sm">
            From <span className="text-[#e76a6a] font-medium">{price}</span>
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-1">Est. delivery by May 1</p>
      </div>
    </div>
  );
};

const BestSellersSection = () => {
  const products = [
    {
      id: "general",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      title: "The General",
      price: "$49",
      rating: 5,
      popular: false
    },
    {
      id: "aristocrats",
      image: "/lovable-uploads/a24c35ab-9efa-4d13-94d8-64477b0c5c18.png",
      title: "The Aristocrats",
      price: "$49",
      rating: 5,
      popular: true
    },
    {
      id: "ambassador",
      image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      title: "The Ambassador",
      price: "$49",
      rating: 5,
      popular: true
    },
    {
      id: "commandur",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      title: "The Commandur",
      price: "$45",
      rating: 5,
      popular: false
    }
  ];

  return (
    <section className="w-full px-4 py-12 bg-[#faf8f6]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-[#0a1a2a] mb-12">
          Best Sellers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
