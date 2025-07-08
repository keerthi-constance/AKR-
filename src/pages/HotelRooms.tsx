import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    price: "LKR 18,000/night",
    image: "/images/delux.jpeg",
    images: [
      "/images/delux.jpeg",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80", // bathroom
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" // hall
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
      "/images/standard.jpeg",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", // bathroom
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80" // hall
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
      "/images/twin.jpeg",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", // bathroom
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" // hall
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
  const navigate = useNavigate();
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
            <div className="bg-white rounded-lg shadow-2xl w-[90vw] h-[90vh] max-w-5xl max-h-[90vh] p-0 relative animate-fadeIn flex flex-col overflow-hidden">
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl z-10" onClick={() => setSelectedRoom(null)}>&times;</button>
              {/* Collage Frame at the Top */}
              <div className="flex flex-col items-center justify-center w-full pt-8 pb-4">
                <div className="bg-white border-8 border-gray-700 rounded-xl shadow-lg p-2 w-[700px] max-w-full">
                  <div className="flex gap-2 mb-2">
                    <img src="/images/kitchen.jpeg" alt="Kitchen" className="w-1/2 h-40 object-cover rounded" />
                    <img src="/images/bathroom.png" alt="Bathroom" className="w-1/2 h-40 object-cover rounded" />
                  </div>
                  <img src={selectedRoom.image} alt="Room" className="w-full h-80 object-cover rounded" />
                </div>
              </div>
              {/* Info below collage */}
              <div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-b-lg shadow-inner">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-4xl font-extrabold text-gray-800">{selectedRoom.name}</h2>
                  <span className="flex items-center gap-1 text-yellow-400 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><polygon points="9.9,1.1 7.6,6.6 1.6,7.3 6.1,11.2 4.8,17.1 9.9,14.1 15,17.1 13.7,11.2 18.2,7.3 12.2,6.6 "/></svg>
                    ))}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Badge className="text-lg px-4 py-2 bg-green-500 text-white">{selectedRoom.price}</Badge>
                  <span className="bg-gray-200 px-3 py-1 rounded text-base">Size: {selectedRoom.size}</span>
                  <span className="bg-gray-200 px-3 py-1 rounded text-base">Occupancy: {selectedRoom.occupancy}</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-base font-semibold">Free Cancellation</span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-base font-semibold">Breakfast Included</span>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{selectedRoom.fullDesc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold mb-2 text-lg flex items-center gap-2"><svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z"/></svg> Room Features</h3>
                    <ul className="list-disc list-inside text-gray-600 text-base">
                      {selectedRoom.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V7h2v3z"/></svg> Amenities</h3>
                    <ul className="list-disc list-inside text-gray-600 text-base">
                      {selectedRoom.amenities.map((amenity, i) => (
                        <li key={i}>{amenity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center mt-6 gap-6">
                  <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-xl px-12 py-4 shadow-xl rounded-full font-bold uppercase tracking-wide">Book Now</Button>
                  <Button className="bg-gradient-to-r from-blue-400 to-green-500 hover:from-blue-500 hover:to-green-600 text-xl px-10 py-4 shadow-xl rounded-full font-bold uppercase tracking-wide">Contact</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 