import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, ChevronLeft, ChevronRight, Wifi, ParkingSquare, Tv, Coffee, Snowflake, ConciergeBell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

const defaultImages = [
  "/images/Hotel & Rooms.jpg",
  "/images/kitchen.jpeg",
  "/images/bathroom.png"
];

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    price: "LKR 18,000/night",
    image: "/images/delux.jpeg",
    images: [
      "/images/Hotel & Rooms.jpg",
      "/images/kitchen.jpeg",
      "/images/bathroom.png"
    ],
    shortDesc: "Spacious suite with king bed, city view, and luxury amenities.",
    fullDesc: "Our Deluxe Suite offers a king-size bed, a private balcony with city views, a luxury bathroom, and a comfortable lounge area. Enjoy complimentary breakfast, Wi-Fi, and 24/7 room service.",
    features: ["King Bed", "City View", "Balcony", "Luxury Bathroom", "Breakfast Included"],
    size: "45 sqm",
    occupancy: "2 Adults",
    amenities: ["Wi-Fi", "TV", "Mini Bar", "Safe", "Air Conditioning"]
  },
  {
    id: 2,
    name: "Executive Room",
    price: "LKR 14,000/night",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    images: defaultImages,
    shortDesc: "Modern executive room with workspace and premium comfort.",
    fullDesc: "The Executive Room is designed for business travelers, featuring a queen bed, ergonomic workspace, and high-speed internet. Includes access to the executive lounge and complimentary refreshments.",
    features: ["Queen Bed", "Workspace", "Executive Lounge Access", "Complimentary Refreshments"],
    size: "32 sqm",
    occupancy: "2 Adults",
    amenities: ["Wi-Fi", "TV", "Coffee Maker", "Safe", "Air Conditioning"]
  },
  {
    id: 3,
    name: "Family Suite",
    price: "LKR 22,000/night",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
    images: defaultImages,
    shortDesc: "Large suite for families with two bedrooms and living area.",
    fullDesc: "Perfect for families, this suite features two bedrooms, a spacious living area, and a kitchenette. Enjoy privacy and comfort with all modern amenities and a beautiful garden view.",
    features: ["2 Bedrooms", "Living Area", "Kitchenette", "Garden View"],
    size: "60 sqm",
    occupancy: "4 Guests",
    amenities: ["Wi-Fi", "TV", "Mini Bar", "Safe", "Air Conditioning", "Kitchenette"]
  },
  {
    id: 4,
    name: "Standard Room",
    price: "LKR 10,000/night",
    image: "/images/standard.jpeg",
    images: [
      "/images/Hotel & Rooms.jpg",
      "/images/kitchen.jpeg",
      "/images/bathroom.png"
    ],
    shortDesc: "Comfortable standard room with all essentials for a pleasant stay.",
    fullDesc: "Our Standard Room offers a cozy double bed, modern bathroom, and all the essentials for a comfortable stay. Ideal for solo travelers or couples.",
    features: ["Double Bed", "Modern Bathroom", "Essential Amenities"],
    size: "25 sqm",
    occupancy: "2 Guests",
    amenities: ["Wi-Fi", "TV", "Safe", "Air Conditioning"]
  },
  {
    id: 5,
    name: "Premium Suite",
    price: "LKR 25,000/night",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
    images: defaultImages,
    shortDesc: "Elegant suite with premium furnishings and exclusive services.",
    fullDesc: "The Premium Suite features elegant décor, a king-size bed, a private lounge, and exclusive butler service. Enjoy panoramic views and top-tier amenities.",
    features: ["King Bed", "Private Lounge", "Butler Service", "Panoramic View"],
    size: "55 sqm",
    occupancy: "2 Adults",
    amenities: ["Wi-Fi", "TV", "Mini Bar", "Safe", "Air Conditioning", "Butler Service"]
  },
  {
    id: 6,
    name: "Twin Room",
    price: "LKR 12,000/night",
    image: "/images/twin.jpeg",
    images: [
      "/images/Hotel & Rooms.jpg",
      "/images/kitchen.jpeg",
      "/images/bathroom.png"
    ],
    shortDesc: "Twin beds, ideal for friends or colleagues sharing a room.",
    fullDesc: "The Twin Room offers two comfortable single beds, a modern bathroom, and a workspace. Perfect for friends or colleagues traveling together.",
    features: ["2 Single Beds", "Workspace", "Modern Bathroom"],
    size: "28 sqm",
    occupancy: "2 Guests",
    amenities: ["Wi-Fi", "TV", "Safe", "Air Conditioning"]
  }
];

export default function HotelRooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const navigate = useNavigate();

  // Reset image index when room changes
  React.useEffect(() => {
    setCurrentImageIdx(0);
  }, [selectedRoom]);

  // Helper for amenities icons
  const amenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case "wi-fi":
      case "wifi":
        return <Wifi className="w-6 h-6 text-purple-700" />;
      case "free parking":
      case "parking":
        return <ParkingSquare className="w-6 h-6 text-purple-700" />;
      case "flat screen tv":
      case "tv":
        return <Tv className="w-6 h-6 text-purple-700" />;
      case "coffee maker":
      case "coffee":
        return <Coffee className="w-6 h-6 text-purple-700" />;
      case "air conditioning":
      case "ac":
        return <Snowflake className="w-6 h-6 text-purple-700" />;
      case "room service":
        return <ConciergeBell className="w-6 h-6 text-purple-700" />;
      default:
        return <span className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="relative z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 shadow-md">
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
              <h1 className="text-lg font-old-english text-gray-500 tracking-wide">Hotel & Rooms</h1>
              <p className="text-xs text-gray-400">Premium Hotel Accommodation</p>
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
      <div className="py-12 px-4 sm:px-8">
        <section className="pt-16 md:pt-20 pb-10 sm:pb-16 px-2 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-old-english text-gray-800 mb-6 drop-shadow-sm bg-white/70 inline-block px-6 py-2 rounded-xl">
              Hotel & Rooms
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Premium Hotel Accommodation
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our collection of comfortable, modern rooms and suites, perfect for business travelers, families, and guests seeking luxury and convenience.
            </p>
          </div>
        </section>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map(room => (
            <Card
              key={room.id}
              className="p-0 flex flex-col shadow-xl rounded-2xl border border-gray-200 bg-white hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedRoom(room)}
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">{room.name.includes('Deluxe') ? 'Deluxe' : room.name.includes('Premium') ? 'Premium' : room.name.includes('Suite') ? 'Suite' : 'Room'}</span>
                <span className="absolute top-3 right-3 flex items-center gap-1 text-yellow-400 bg-white/80 px-2 py-1 rounded-full shadow">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><polygon points="9.9,1.1 7.6,6.6 1.6,7.3 6.1,11.2 4.8,17.1 9.9,14.1 15,17.1 13.7,11.2 18.2,7.3 12.2,6.6 "/></svg>
                  ))}
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center px-6 py-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">{room.name}</h2>
                <div className="flex flex-wrap gap-2 mb-2 justify-center">
                  <Badge className="text-base px-4 py-1 bg-green-500 text-white">{room.price}</Badge>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-semibold">Free Cancellation</span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-xs font-semibold">Breakfast Included</span>
                </div>
                <p className="text-gray-600 text-base mb-6 text-center leading-relaxed">{room.shortDesc}</p>
                <div className="flex gap-4 w-full mt-auto">
                  <Button className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-base py-3 shadow-lg rounded-full font-bold uppercase tracking-wide">Book Now</Button>
                  <Button className="flex-1 bg-gradient-to-r from-blue-400 to-green-500 hover:from-blue-500 hover:to-green-600 text-base py-3 shadow-lg rounded-full font-bold uppercase tracking-wide">Contact</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* Room Details Modal */}
        {selectedRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-lg shadow-2xl w-[95vw] sm:w-[90vw] h-[98vh] sm:h-[90vh] max-w-5xl max-h-[98vh] p-0 relative animate-fadeIn flex flex-col overflow-hidden">
              <button className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-800 text-2xl z-10" onClick={() => setSelectedRoom(null)}>&times;</button>
              {/* Modal Content: image + text scroll together */}
              <div className="overflow-y-auto h-full px-2 sm:px-8 py-4 sm:py-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-b-lg shadow-inner">
                {/* Image Slider */}
                <div className="flex flex-col items-center justify-center w-full pt-4 sm:pt-8 pb-2 sm:pb-4 mb-2">
                  <div className="relative w-full sm:w-[700px] max-w-full h-52 sm:h-80 flex items-center justify-center">
                    {selectedRoom.images && selectedRoom.images.length > 0 ? (
                      <>
                        <button
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 shadow hover:bg-white z-10"
                          onClick={() => setCurrentImageIdx((prev) => (prev === 0 ? selectedRoom.images.length - 1 : prev - 1))}
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
                        </button>
                        <img
                          src={selectedRoom.images[currentImageIdx]}
                          alt="Room"
                          className="w-full h-52 sm:h-80 object-cover rounded-xl border-4 border-gray-200"
                        />
                        <button
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 shadow hover:bg-white z-10"
                          onClick={() => setCurrentImageIdx((prev) => (prev === selectedRoom.images.length - 1 ? 0 : prev + 1))}
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
                          {selectedRoom.images.map((_, idx) => (
                            <span key={idx} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${idx === currentImageIdx ? 'bg-purple-700' : 'bg-gray-300'}`}></span>
                          ))}
                        </div>
                      </>
                    ) : (
                      <img src={selectedRoom.image} alt="Room" className="w-full h-52 sm:h-80 object-cover rounded-xl border-4 border-gray-200" />
                    )}
                  </div>
                </div>
                {/* Info below slider */}
                <div className="mb-2 sm:mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800">{selectedRoom.name}</h2>
                  <span className="flex items-center gap-1 text-yellow-400 text-lg sm:text-xl mt-2 sm:mt-0">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20"><polygon points="9.9,1.1 7.6,6.6 1.6,7.3 6.1,11.2 4.8,17.1 9.9,14.1 15,17.1 13.7,11.2 18.2,7.3 12.2,6.6 "/></svg>
                    ))}
                  </span>
                </div>
                {/* Features Section */}
                <div className="mb-4 sm:mb-8">
                  <h3 className="text-lg sm:text-2xl font-serif text-[#b85c5c] mb-1 sm:mb-2 tracking-wider">FEATURES:</h3>
                  <ul className="list-disc ml-4 sm:ml-6 text-base sm:text-lg text-gray-700">
                    <li>Beds: {selectedRoom.features.find(f => f.toLowerCase().includes('bed')) || 'N/A'}</li>
                    <li>Occupancy: {selectedRoom.occupancy}</li>
                    <li>View: {selectedRoom.features.find(f => f.toLowerCase().includes('view')) || 'N/A'}</li>
                  </ul>
                </div>
                {/* Amenities Section */}
                <div className="mb-4 sm:mb-8">
                  <h3 className="text-lg sm:text-2xl font-serif text-[#b85c5c] mb-2 sm:mb-4 tracking-wider">AMENITIES:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                    {selectedRoom.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-gray-700">
                        {amenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Description */}
                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">{selectedRoom.fullDesc}</p>
                <div className="flex flex-col sm:flex-row justify-center mt-4 sm:mt-6 gap-3 sm:gap-6">
                  <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-base sm:text-xl px-6 sm:px-12 py-3 sm:py-4 shadow-xl rounded-full font-bold uppercase tracking-wide">Book Now</Button>
                  <Button className="bg-gradient-to-r from-blue-400 to-green-500 hover:from-blue-500 hover:to-green-600 text-base sm:text-xl px-5 sm:px-10 py-3 sm:py-4 shadow-xl rounded-full font-bold uppercase tracking-wide">Contact</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 