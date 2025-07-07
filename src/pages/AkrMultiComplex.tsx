import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Star, ShoppingCart, Home, Users, BedDouble, Dumbbell, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const facilities = [
  {
    name: "Shopping Center",
    description: "A modern shopping center with a variety of retail outlets, brands, and services for all your needs.",
    icon: <ShoppingCart className="w-8 h-8 text-blue-500" />, 
    image: "/images/akr-multi-complex.jpg",
    features: ["Wide range of shops", "Food court", "Kids play area", "Parking", "Security"],
    specifications: {
      area: "10,000 sq ft",
      floors: "3",
      shops: "50+",
      parking: "200+ vehicles",
      openHours: "9am - 10pm"
    }
  },
  {
    name: "Party Hall & Restaurant",
    description: "Spacious party hall and a fine restaurant for celebrations, events, and dining experiences.",
    icon: <Users className="w-8 h-8 text-pink-500" />, 
    image: "/images/akr-multi-complex.jpg",
    features: ["Banquet seating", "Stage & AV", "Catering", "Private dining", "Event planning"],
    specifications: {
      capacity: "300+ guests",
      cuisine: "Multi-cuisine",
      parking: "Valet available",
      openHours: "10am - 12am"
    }
  },
  {
    name: "Hotel & Rooms",
    description: "Comfortable hotel rooms and suites for guests, business travelers, and families.",
    icon: <BedDouble className="w-8 h-8 text-green-500" />, 
    image: "/images/akr-multi-complex.jpg",
    features: ["Luxury suites", "Room service", "Wi-Fi", "Conference rooms", "Laundry"],
    specifications: {
      rooms: "80+",
      suites: "10",
      checkIn: "24/7",
      amenities: "Pool, Gym, Spa"
    }
  },
  {
    name: "Gym & Theater",
    description: "State-of-the-art gym and a modern theater for fitness and entertainment.",
    icon: <Dumbbell className="w-8 h-8 text-purple-500" />, 
    image: "/images/akr-multi-complex.jpg",
    features: ["Modern equipment", "Personal trainers", "Group classes", "Cinema screen", "Dolby sound"],
    specifications: {
      gymArea: "2,000 sq ft",
      theaterSeats: "120",
      openHours: "6am - 11pm"
    }
  },
  {
    name: "AKR Service Center",
    description: "Professional service center for vehicle maintenance and repairs.",
    icon: <Wrench className="w-8 h-8 text-yellow-500" />, 
    image: "/images/akr-multi-complex.jpg",
    features: ["Certified mechanics", "Genuine parts", "Quick service", "Customer lounge", "Warranty support"],
    specifications: {
      bays: "10",
      services: "All brands",
      openHours: "8am - 8pm"
    }
  }
];

export default function AkrMultiComplex() {
  const navigate = useNavigate();
  const [selectedFacility, setSelectedFacility] = useState<null | typeof facilities[0]>(null);
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
              <h1 className="text-lg font-old-english text-gray-500 tracking-wide">AKR Multi Complex</h1>
              <p className="text-xs text-gray-400">Premium Commercial & Residential Hub</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <MapPin className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-36 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-old-english text-gray-800 mb-6 drop-shadow-sm bg-white/70 inline-block px-6 py-2 rounded-xl">
            AKR Multi Complex
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover a world of convenience, luxury, and modern amenities at AKR Multi Complex. Our facilities are designed to meet the needs of families, businesses, and guests with professionalism and excellence.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <Card key={facility.name} className="glass-card p-6 cosmic-hover group overflow-hidden relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative z-10 space-y-4">
                  <div className="w-full h-48 rounded-xl overflow-hidden relative flex items-center justify-center bg-gray-100">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 left-2">{facility.icon}</div>
                  </div>
                  <h3 className="text-xl font-old-english text-gray-800 group-hover:gradient-text transition-all duration-300">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{facility.description}</p>
                  <Button className="w-full bg-gradient-primary hover:bg-gradient-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105" onClick={() => setSelectedFacility(facility)}>
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Details Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl sm:max-h-[90vh] p-0 relative animate-fadeIn flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-2xl font-old-english text-gray-800">{selectedFacility.name} Details</h2>
              <button
                className="text-gray-400 hover:text-gray-700 text-2xl font-bold"
                onClick={() => setSelectedFacility(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 p-4 sm:p-6 overflow-y-auto flex-1 min-h-0">
              {/* Image and Icon */}
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
                  <img src={selectedFacility.image} alt={selectedFacility.name} className="w-full h-full object-cover" />
                </div>
                <div className="mb-2">{selectedFacility.icon}</div>
              </div>
              {/* Info */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-old-english text-gray-800 mb-2">{selectedFacility.name}</h3>
                <p className="text-gray-600 mb-4">{selectedFacility.description}</p>
                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                    {selectedFacility.features?.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                {/* Specifications */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Specifications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedFacility.specifications && Object.entries(selectedFacility.specifications).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-3">
                        <span className="block font-semibold text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="block text-gray-600 text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Section */}
            <div className="border-t border-gray-200 p-4 sm:p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact & Location</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-semibold text-gray-800">Visit Us</div>
                  <div className="text-gray-600 text-sm">AKR Multi Complex, Colombo, Sri Lanka</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-semibold text-gray-800">Hotline</div>
                  <div className="text-gray-600 text-sm">+94 11 234 5678</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-semibold text-gray-800">Email</div>
                  <div className="text-gray-600 text-sm">info@akrgroup.lk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 