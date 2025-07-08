import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react"
import { useNavigate } from "react-router-dom"

const products = [
  {
    name: "Sea Sand",
    description: "High-quality sea sand suitable for construction and landscaping projects. Our sea sand is carefully sourced, washed, and graded to ensure optimal performance for concrete mixes, plastering, and landscaping. It is free from impurities and salt, making it ideal for both residential and commercial projects.",
    image: "/images/sand.jpg",
    price: "LKR 2,500/tonne"
  },
  {
    name: "Red Soil",
    description: "Rich red soil ideal for gardening, agriculture, and building foundations. This soil is nutrient-rich, well-draining, and perfect for landscaping, brick making, and as a base for lawns and gardens. Sourced from the best locations to ensure quality and consistency.",
    image: "/images/soil.jpg",
    price: "LKR 1,800/tonne"
  },
  {
    name: "Metal",
    description: "Durable construction metal for structural and reinforcement needs. Our metal is available in various grades and sizes, suitable for beams, columns, and reinforcements. It is rust-resistant and meets all industry standards for safety and durability.",
    image: "/images/metal.jpg",
    price: "LKR 5,000/tonne"
  },
];

export default function AkrConstruction() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="relative z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="text-center">
              <h1 className="text-lg font-old-english text-gray-500 tracking-wide">AKR Construction</h1>
              <p className="text-xs text-gray-400">Premium Construction Materials & Services</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <div className="py-12 px-2 sm:px-4 md:px-8">
        {/* Attractive header with background image */}
        <section className="pt-16 md:pt-20 pb-10 sm:pb-16 px-2 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-10 flex flex-col items-center">
          <div className="w-full text-center">
            <h1 className="text-5xl md:text-6xl font-old-english text-blue-900 mb-6 drop-shadow-lg inline-block px-8 py-4 rounded-2xl">
              AKR Construction
            </h1>
            <p className="text-2xl text-blue-700 mb-8 max-w-2xl mx-auto font-semibold drop-shadow-sm">
              Premium Construction Materials & Services
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              Supplying high-quality sea sand, red soil, and metal for all your construction and landscaping needs. Our commitment to quality and service ensures your projects are built on a solid foundation. Contact us for bulk orders and special pricing!
            </p>
          </div>
        </section>
        {/* Vertical Product List */}
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {products.map((product, idx) => (
            <Card
              key={idx}
              className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-2xl rounded-3xl p-8 md:p-10 gap-10 hover:shadow-3xl transition-all duration-300 min-h-[220px] w-full max-w-full"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full md:w-56 h-44 object-cover rounded-2xl shadow-lg mb-6 md:mb-0"
                style={{ maxWidth: '220px' }}
              />
              <div className="flex-1 flex flex-col items-center md:items-start w-full">
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center md:text-left drop-shadow-lg tracking-tight">
                  {product.name}
                </h2>
                <p className="text-gray-800 mb-6 text-lg md:text-xl text-center md:text-left font-medium">
                  {product.description}
                </p>
                <div className="flex flex-col md:flex-row items-center md:items-end gap-4 w-full mb-4">
                  <Badge className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-bold shadow border-2 border-white">
                    Available
                  </Badge>
                  <div className="flex flex-row items-center gap-4 ml-0 md:ml-4">
                    <span className="text-2xl font-bold text-green-700 bg-green-100 px-6 py-2 rounded-full shadow border border-green-200">
                      {product.price}
                    </span>
                    <Button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-lg py-3 px-8 shadow rounded-full font-bold uppercase tracking-wide transition-all duration-300">
                      <Phone className="w-5 h-5" />
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 