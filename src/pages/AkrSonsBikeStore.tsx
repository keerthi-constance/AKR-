import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ShoppingCart, Star, MapPin, Phone, Mail, Eye, Calendar } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { BikeSlideshow } from "@/components/BikeSlideshow"
import { BookingForm } from "@/components/BookingForm"
import { ColorSelector } from "@/components/ColorSelector"
import { Dialog } from "@/components/ui/dialog"

const bikes = [
  // Pulsar Category
  {
    id: 3,
    name: "Pulsar NS400Z",
    price: "LKR 2,239,950.00",
    image: "/images/bikes/pulsar-ns400z.png",
    category: "Pulsar",
    rating: 4.8,
    features: ["Top Performance", "Advanced Tech"],
    description: "PULSAR NS400 Z\nEngine 373.27 cc\nMax. Power 40 PS\nMax. Torque 35 NM\nExplore",
    specifications: {
      engine: "373.27 cc",
      power: "40 PS",
      torque: "35 NM",
      mileage: "35 km/l",
      fuelCapacity: "13 liters",
      transmission: "6-speed manual",
      weight: "170 kg"
    },
    colors: ["#E53935", "#231F20", "#F4F4F4", "#BDBDBD"],
    colorOptions: [
      { name: "Red", value: "red", hex: "#E53935", image: "/images/bikes/sample-pulsor-ns400-red.jpg", available: true },
      { name: "Black", value: "black", hex: "#231F20", image: "/images/bikes/sample-pulsor-ns400-black.jpg", available: true },
      { name: "White", value: "white", hex: "#F4F4F4", image: "/images/bikes/sample-pulsor-ns400-white.jpg", available: true },
      { name: "Grey", value: "grey", hex: "#BDBDBD", image: "/images/bikes/sample-pulsor-ns400-grey.jpg", available: true }
    ]
  },
  {
    id: 4,
    name: "Pulsar NS200",
    price: "LKR 1,139,950.00",
    image: "/images/bikes/brand-new-pulsar-ns200.png",
    category: "Pulsar",
    rating: 4.7,
    features: ["Aggressive Design", "High Power"],
    description: "Pulsar ns 200 in cocktail wine red color\nPULSAR NS200\nEngine 199.5 cc\nMax. Power 23.50 PS\nMax. Torque 18.3 NM\nExplore",
    specifications: {
      engine: "199.5 cc",
      power: "23.50 PS",
      torque: "18.3 NM",
      mileage: "40 km/l",
      fuelCapacity: "12 liters",
      transmission: "6-speed manual",
      weight: "156 kg"
    },
    colors: ["#8B0000", "#000000", "#1976D2", "#F4F4F4"],
    colorOptions: [
      { name: "Maroon", value: "maroon", hex: "#8B0000", image: "/images/bikes/sample-pulsor-ns200-maroon.jpg", available: true },
      { name: "Black", value: "black", hex: "#000000", image: "/images/bikes/sample-pulsor-ns200-black.jpg", available: true },
      { name: "Blue", value: "blue", hex: "#1976D2", image: "/images/bikes/sample-pulsor-ns200-blue.jpg", available: true },
      { name: "White", value: "white", hex: "#F4F4F4", image: "/images/bikes/sample-pulsor-ns200-white.jpg", available: true }
    ]
  },
  {
    id: 5,
    name: "Pulsar N160 Premium",
    price: "LKR 995,950.00",
    image: "/images/bikes/brand-new-pulsar-n160-premium1.png",
    category: "Pulsar",
    rating: 4.6,
    features: ["Premium Features", "High Performance"],
    description: "Premium version of Pulsar N160 with advanced features.",
    specifications: {
      engine: "164.82 cc",
      power: "15.7 PS",
      torque: "14.65 Nm",
      mileage: "54 km/l",
      fuelCapacity: "12 liters",
      transmission: "5-speed manual",
      weight: "154 kg"
    },
    colors: ["#F4F4F4", "#E53935", "#1976D2", "#231F20"],
    colorOptions: [
      { name: "White", value: "white", hex: "#F4F4F4", image: "/images/bikes/sample-pulsor-n160-premium-white.jpg", available: true },
      { name: "Red", value: "red", hex: "#E53935", image: "/images/bikes/sample-pulsor-n160-premium-red.jpg", available: true },
      { name: "Blue", value: "blue", hex: "#1976D2", image: "/images/bikes/sample-pulsor-n160-premium-blue.jpg", available: true },
      { name: "Black", value: "black", hex: "#231F20", image: "/images/bikes/sample-pulsor-n160-premium-black.jpg", available: true }
    ]
  },
  {
    id: 6,
    name: "Pulsar N160",
    price: "LKR 934,950.00",
    image: "/images/bikes/brand-new-pulsar-n1601.png",
    category: "Pulsar",
    rating: 4.5,
    features: ["Powerful", "Modern"],
    description: "Pulsar n 160 in pearl metallic white color\nPULSAR N160\nEngine 164.82 cc\nMax. Power 15.7 PS\nMax. Torque 14.65 Nm\nExplore",
    specifications: {
      engine: "164.82 cc",
      power: "15.7 PS",
      torque: "14.65 Nm",
      mileage: "55 km/l",
      fuelCapacity: "12 liters",
      transmission: "5-speed manual",
      weight: "152 kg"
    },
    colors: ["#000000"],
    colorOptions: [
      { name: "Black", value: "black", hex: "#000000", image: "/images/bikes/sample-pulsor-n160-black.jpg", available: true }
    ]
  },
  {
    id: 7,
    name: "Pulsar N125",
    price: "LKR 844,950.00",
    image: "/images/bikes/brand-new-pulsar-n125.png",
    category: "Pulsar",
    rating: 4.4,
    features: ["Sporty", "Efficient"],
    description: "Pulsar n125 in citrus rush color\nPULSAR N125\nEngine 164.82 cc\nMax. Power 15.7 PS\nMax. Torque 14.65 Nm\nExplore",
    specifications: {
      engine: "164.82 cc",
      power: "15.7 PS",
      torque: "14.65 Nm",
      mileage: "60 km/l",
      fuelCapacity: "11.5 liters",
      transmission: "5-speed manual",
      weight: "140 kg"
    },
    colors: ["#F7F48B", "#8B0000", "#F4F4F4", "#6C63FF"],
    colorOptions: [
      { name: "Yellow", value: "yellow", hex: "#F7F48B", image: "/images/bikes/sample-pulsor-n125-yellow.jpg", available: true },
      { name: "Maroon", value: "maroon", hex: "#8B0000", image: "/images/bikes/sample-pulsor-n125-maroon.jpg", available: true },
      { name: "White", value: "white", hex: "#F4F4F4", image: "/images/bikes/sample-pulsor-n125-white.jpg", available: true },
      { name: "Purple", value: "purple", hex: "#6C63FF", image: "/images/bikes/sample-pulsor-n125-purple.jpg", available: true }
    ]
  },
  // CT 100 & Discover Category
  {
    id: 1,
    name: "CT 100 ES",
    price: "LKR 637,950.00",
    image: "/images/bikes/ct-100-es.png",
    category: "CT 100 & Discover",
    rating: 4.2,
    features: ["Fuel Efficient", "Reliable"],
    description: "Bajaj CT 100 is known for its mileage and reliability.",
    specifications: {
      engine: "102 cc",
      power: "7.7 Ps",
      torque: "8.24 Nm",
      mileage: "75 km/l",
      fuelCapacity: "10.5 liters",
      transmission: "4-speed manual",
      weight: "115 kg"
    },
    colors: ["#FF0000", "#8B0000", "#393D87"],
    colorOptions: [
      { name: "Red", value: "red", hex: "#FF0000", image: "/images/bikes/sample-ct100-red.jpg", available: true },
      { name: "Maroon", value: "maroon", hex: "#8B0000", image: "/images/bikes/sample-ct100-maroon.jpg", available: true },
      { name: "Blue", value: "blue", hex: "#393D87", image: "/images/bikes/sample-ct100-blue.jpg", available: true }
    ]
  },
  {
    id: 2,
    name: "Discover 125 DRL",
    price: "LKR 731,950.00",
    image: "/images/bikes/discover-125-drl1.png",
    category: "CT 100 & Discover",
    rating: 4.3,
    features: ["Smooth Ride", "Good Mileage"],
    description: "Bajaj Discover 125 is a popular commuter bike with good performance.",
    specifications: {
      engine: "124.5 cc",
      power: "11 Ps",
      torque: "11 Nm",
      mileage: "65 km/l",
      fuelCapacity: "8 liters",
      transmission: "5-speed manual",
      weight: "120 kg"
    },
    colors: ["#FF0000", "#8B0000", "#393D87"],
    colorOptions: [
      { name: "Red", value: "red", hex: "#FF0000", image: "/images/bikes/sample-discover-red.jpg", available: true },
      { name: "Maroon", value: "maroon", hex: "#8B0000", image: "/images/bikes/sample-discover-maroon.jpg", available: true },
      { name: "Blue", value: "blue", hex: "#393D87", image: "/images/bikes/sample-discover-blue.jpg", available: true }
    ]
  },
  // Three Wheeler Category
  {
    id: 8,
    name: "Bajaj RE",
    price: "LKR 1,995,000.00",
    image: "/images/bikes/brand-new-bajaj-re.png",
    category: "Three Wheeler",
    rating: 4.5,
    features: ["Spacious", "Durable"],
    description: "Bajaj RE is ideal for commercial and family use.",
    specifications: {
      engine: "198.88cc, 4-stroke",
      mileage: "35 km/l",
      fuelCapacity: "10 liters",
      transmission: "4-speed manual",
      power: "10.2 PS @ 5000 rpm",
      weight: "350 kg"
    },
    colors: ["#E53935", "#388E3C"],
    colorOptions: [
      { name: "Red", value: "red", hex: "#E53935", image: "/images/bikes/sample-threewheeler-red.jpg", available: true },
      { name: "Green", value: "green", hex: "#388E3C", image: "/images/bikes/sample-threewheeler-green.jpg", available: true }
    ]
  }
]

export default function AkrSonsBikeStore() {
  const navigate = useNavigate()
  const [showSlideshow, setShowSlideshow] = useState(false)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [selectedBike, setSelectedBike] = useState<typeof bikes[0] | null>(null)
  const [selectedColors, setSelectedColors] = useState<{ [key: number]: any }>({})
  const [showN160Details, setShowN160Details] = useState(false)

  const handleBookNow = (bike: typeof bikes[0]) => {
    setSelectedBike(bike)
    setShowBookingForm(true)
  }

  const handleColorChange = (bikeId: number, color: any) => {
    setSelectedColors(prev => ({
      ...prev,
      [bikeId]: color
    }))
  }

  const getBikeImage = (bike: any) => {
    if (bike.colorOptions && selectedColors[bike.id]) {
      return selectedColors[bike.id].image
    }
    return bike.image
  }

  const handleViewDetails = (bike) => {
    if (bike.name === "Pulsar N160") {
      setSelectedBike(bike)
      setShowN160Details(true)
    } else {
      setSelectedBike(bike)
      setShowSlideshow(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

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
              <h1 className="text-lg font-old-english text-gray-500 tracking-wide">AKR & SONS</h1>
              <p className="text-xs text-gray-400">Premium Motorcycle Dealership</p>
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

      {/* Hero Section */}
      <section className="relative z-10 pt-36 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-old-english text-gray-800 mb-6 drop-shadow-sm bg-white/70 inline-block px-6 py-2 rounded-xl">
            Premium Motorcycles
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our collection of reliable, fuel-efficient motorcycles perfect for your daily commute and adventures.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              Located in Colombo
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Trusted Dealer
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Easy Financing
            </Badge>
          </div>
          <Button 
            size="lg"
            onClick={() => setShowSlideshow(true)}
            className="bg-gradient-primary hover:bg-gradient-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Eye className="w-5 h-5 mr-2" />
            View All Bike Details
          </Button>
        </div>
      </section>

      {/* Bikes Grid */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Group bikes by category */}
          {[
            "Pulsar",
            "CT 100 & Discover",
            "Three Wheeler"
          ].map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6 border-l-4 border-blue-500 pl-4">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bikes.filter((bike) => bike.category === category).map((bike) => (
                  <Card key={bike.id} className="glass-card p-6 cosmic-hover group overflow-hidden relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    <div className="relative z-10 space-y-4">
                      {/* Bike Image */}
                      <div className="w-full h-[30rem] rounded-xl overflow-hidden relative flex items-end justify-center">
                        <img
                          src={getBikeImage(bike)}
                          alt={bike.name}
                          className={`w-full h-full object-contain mx-auto relative z-20 transition-transform duration-500 group-hover:scale-105${bike.category === 'Three Wheeler' ? ' scale-125' : ''}${bike.name === 'Pulsar NS400Z' ? ' mt-8' : ''}`}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        {/* Fallback placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center hidden">
                          <div className="text-gray-500 text-lg font-medium">Bike Image</div>
                        </div>
                      </div>
                      {/* Color Selector for all bikes */}
                      {bike.colorOptions && (
                        <ColorSelector
                          bikeName={bike.name}
                          colors={bike.colorOptions}
                          selectedColor={selectedColors[bike.id] || bike.colorOptions[0]}
                          onColorChange={(color) => handleColorChange(bike.id, color)}
                        />
                      )}
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-old-english text-gray-800 group-hover:gradient-text transition-all duration-300">
                            {bike.name}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {bike.category}
                          </Badge>
                        </div>
                        {/* Pulsar: Show engine, power, torque. Others: show rating and features as before. */}
                        {bike.category === 'Pulsar' ? (
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                              <span className="font-semibold">Engine:</span> {bike.specifications.engine}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                              <span className="font-semibold">Power:</span> {bike.specifications.power}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                              <span className="font-semibold">Torque:</span> {bike.specifications.torque}
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < Math.floor(bike.rating)
                                        ? "text-yellow-400 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">({bike.rating})</span>
                            </div>
                            <div className="space-y-2">
                              {bike.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-sm text-gray-600">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        <div className="pt-4">
                          <div className="text-2xl font-bold text-gray-800 mb-4">
                            {bike.price}
                          </div>
                          <div className="flex flex-col gap-2 mt-2 sm:flex-row">
                            <Button 
                              variant="outline"
                              className="w-full sm:flex-1"
                              onClick={() => handleViewDetails(bike)}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            <Button 
                              className="w-full sm:flex-1 bg-gradient-primary hover:bg-gradient-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                              onClick={() => handleBookNow(bike)}
                            >
                              <Calendar className="w-4 h-4 mr-2" />
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Leadership Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold text-cyan-700 mb-4">Contact Information</h2>
            <div className="mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>Murunkan: 0232231222</span>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>Mannar: (023) 205 1536</span>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>Mobile: 0773111266</span>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-600" />
              <span>akrfuture@gmail.com</span>
            </div>
          </div>
          {/* Leadership Team */}
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold text-cyan-700 mb-4">Leadership Team</h2>
            <div>
              <span className="font-semibold text-gray-900">Founder</span><br />
              <span className="text-cyan-700 font-bold">S. Anton</span>
            </div>
            <div className="mt-4">
              <span className="font-semibold text-gray-900">Chief Executive Officer</span><br />
              <span className="text-cyan-700 font-bold">Anton Rojar Stalin</span>
              <div className="flex items-center gap-2 mt-1">
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>0773111266</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Mail className="w-4 h-4 text-cyan-600" />
                <span>antonrojarstalin@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bike Details Slideshow */}
      {showSlideshow && selectedBike && (
        <BikeSlideshow
          bikes={[selectedBike]}
          onClose={() => {
            setShowSlideshow(false);
            setSelectedBike(null);
          }}
          onBookNow={handleBookNow}
          selectedColors={selectedColors}
          onColorChange={handleColorChange}
        />
      )}

      {/* Booking Form */}
      {showBookingForm && selectedBike && (
        <BookingForm 
          bikeName={selectedBike.name}
          bikePrice={selectedBike.price}
          onClose={() => {
            setShowBookingForm(false)
            setSelectedBike(null)
          }}
        />
      )}

      {/* N160 Details Modal */}
      {showN160Details && selectedBike && selectedBike.name === "Pulsar N160" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-8 overflow-y-auto max-h-[90vh] relative">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" onClick={() => setShowN160Details(false)}>
              <span className="text-2xl">&times;</span>
            </button>
            <h1 className="text-3xl font-bold mb-4 text-blue-700">PULSAR N160 FI DUAL ABS</h1>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Variants</h2>
            <div className="mb-4 text-black">N160 FI Dual ABS</div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Features</h2>
            <div className="mb-4 text-black">
              <b>Performance</b><br/>
              The New Gold Standard Of 160cc<br/>
              The new refined engine of pulsar n 160 dual abs<br/>
              <b>All-New Refined Engine</b><br/>
              Own the streets with the intoxicating acceleration and everyday rideability of the new refined engine on the Pulsar N160 FI Dual ABS.<br/>
              <b>Torque on Demand</b><br/>
              Never run out of juice with the Pulsar N160 FI Dual ABS. A wide torque band offers 85% of peak power over a wider rev range - more than any other motorcycle in the segment.
            </div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Design</h2>
            <div className="mb-4 text-black">
              <b>Dual Tone</b><br/>
              Pulsar N160 FI Dual ABS. features a dynamic interplay of premium metallised dual colours. Darker in the front and lighter towards the rear, it emphasises the contours of the beast.<br/>
              <b>LED Tail Lamp</b><br/>
              Pulsar N160 FI Dual ABS features an evolved LED tail lamp with a Ruby crystal dust pattern—lighting up the roads with unmistakable style.
            </div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Technology</h2>
            <div className="mb-4 text-black">
              <b>Best in class suspension</b><br/>
              Tackling streets is a breezy affair with the Pulsar N160 FI Dual ABS, thanks to its best-in-class 37 mm telescopic front forks that ensure great handling and agility.<br/>
              <b>Bi-functional LED Projector Lamp</b><br/>
              Pulsar N160 FI Dual ABS features a bi-functional LED projector lamp flanked by signature Naked Wolf LED DRLs—offering unmatched illumination and a precise beam for improved safety.
            </div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Safety</h2>
            <div className="mb-4 text-black">
              <b>Dual Channel ABS Braking</b><br/>
              Pulsar N160 FI Dual ABS introduces Dual Channel ABS to Sri Lanka's 160cc sports bike segment, preventing wheel lock by automatically reducing brake pressure for enhanced control.<br/>
              <b>Best in Class Braking</b><br/>
              Pulsar N160 FI Dual ABS offers best-in-class braking with razor-sharp, responsive Dual Channel ABS, paired with wider 300mm front and 230mm rear disc brakes. Take corners with ease, and ride confidently.
            </div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Specifications</h2>
            <div className="mb-4 text-black">
              <b>Engine</b><br/>
              Displacement - 164.82 cc<br/>
              Fuel system - EPM FI<br/>
              Power (PS@rpm) - 16 PS @ 8750 rpm<br/>
              Torque (Nm@rpm) - 14.65 Nm @ 6750 rpm<br/>
              Starting (Electric / Kick) - electric<br/>
              Transmission - 5-speed, 1 down 4 up<br/>
              Valves, Cooling - 2, Oil cooled<br/>
              <b>Brakes & Tyres</b><br/>
              Braking System - Dual channel ABS<br/>
              Frame type - Tubular frame (EASM)<br/>
              Front Brake (type, size) - Disc – 300 mm<br/>
              Front Tyres (size) - 100 / 80 -17 tubeless<br/>
              Front suspension - Telescopic – 37mm<br/>
              Fuel Tank (litres) - 14<br/>
              Rear Brake (type, size) - Disc – 230 mm<br/>
              Rear Tyres (size) - 130 / 70 - 17 tubeless<br/>
              Rear suspension - Mono-shock, 5-step<br/>
              <b>Electricals</b><br/>
              App connect - Bajaj Ride Connect<br/>
              Battery (V & Ah) - 12V, 4Ah<br/>
              Form - Naked Sports<br/>
              Fuel gauge -Digital bars<br/>
              Head Lamp - Bi-function projector LED<br/>
              Horn (single/dual) - Single<br/>
              Indicators - Bulb, 10W<br/>
              Speedometer - Digital<br/>
              <b>Vehicle</b><br/>
              Kerb weight (Kg) - 164<br/>
              Length x width x  height (mm) - 1989 mm x 743 mm x 1050 mm<br/>
              Saddle Height (mm) - 795<br/>
              Wheelbase (mm) - 1358
            </div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Frequently Asked Questions</h2>
            <div className="mb-4 text-black">
              <b>What is the power output of Pulsar N160 FI Dual ABS?</b><br/>
              16 PS @ 8750 rpm<br/>
              <b>What is the engine capacity of the Pulsar N160 FI Dual ABS?</b><br/>
              164.82 cc<br/>
              <b>What is the fuel tank capacity of Pulsar N160 FI Dual ABS?</b><br/>
              14 litres<br/>
              <b>What are the colour options available in the Pulsar N160 FI Dual ABS?</b><br/>
              Brooklyn-Black<br/>
              <b>Does Pulsar N160 FI Dual ABS feature a digital instrument cluster?</b><br/>
              Yes
            </div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Reach Us</h2>
            <div className="mb-4 text-black">
              DPMC -<br/>
              info@dpmco.com<br/>
              0094 11 4 700 600
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 