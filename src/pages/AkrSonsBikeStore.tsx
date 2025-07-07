import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ShoppingCart, Star, MapPin, Phone, Mail, Eye, Calendar } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { BikeSlideshow } from "@/components/BikeSlideshow"
import { BookingForm } from "@/components/BookingForm"
import { ColorSelector } from "@/components/ColorSelector"

const bikes = [
  {
    id: 1,
    name: "Honda CG 125",
    price: "Rs. 185,000",
    image: "/images/bikes/CG-125.jpg",
    category: "Commuter",
    rating: 4.5,
    features: ["Fuel Efficient", "Low Maintenance", "Reliable Engine"],
    description: "The Honda CG 125 is a legendary commuter motorcycle known for its exceptional fuel efficiency and low maintenance requirements. Perfect for daily commuting with its reliable engine and comfortable riding position.",
    specifications: {
      engine: "124.7cc, Air-cooled, 4-stroke",
      mileage: "60-65 km/l",
      fuelCapacity: "13.5 liters",
      transmission: "4-speed manual",
      power: "10.7 bhp @ 7500 rpm",
      weight: "118 kg"
    },
    colors: ["#FF0000", "#0000FF", "#000000", "#FFFFFF"],
    colorOptions: [
      {
        name: "Red",
        value: "red",
        hex: "#FF0000",
        image: "/images/bikes/honda-cg125-red.jpg",
        available: true
      },
      {
        name: "Blue",
        value: "blue",
        hex: "#0000FF",
        image: "/images/bikes/honda-cg125-blue.jpg",
        available: true
      },
      {
        name: "Black",
        value: "black",
        hex: "#000000",
        image: "/images/bikes/honda-cg125-black.jpg",
        available: true
      },
      {
        name: "White",
        value: "white",
        hex: "#FFFFFF",
        image: "/images/bikes/honda-cg125-white.jpg",
        available: false
      }
    ]
  },
      {
      id: 2,
      name: "Yamaha YBR 125",
      price: "Rs. 195,000",
      image: "/images/bikes/Yamaha YBR 125.png",
      category: "Commuter",
      rating: 4.3,
      features: ["Smooth Ride", "Good Mileage", "Stylish Design"],
      description: "The Yamaha YBR 125 offers a perfect blend of style and performance. With its modern design and smooth engine, it provides an excellent riding experience for both city and highway use.",
      specifications: {
        engine: "123.7cc, Air-cooled, 4-stroke",
        mileage: "55-60 km/l",
        fuelCapacity: "12 liters",
        transmission: "4-speed manual",
        power: "11.2 bhp @ 7500 rpm",
        weight: "120 kg"
      },
      colors: ["#000000", "#FF0000", "#0000FF", "#808080"],
      colorOptions: [
        {
          name: "Red",
          value: "red",
          hex: "#FF0000",
          image: "/images/bikes/yamaha-ybr125-red.jpg",
          available: true
        },
        {
          name: "Blue",
          value: "blue",
          hex: "#0000FF",
          image: "/images/bikes/yamaha-ybr125-blue.jpg",
          available: true
        },
        {
          name: "Black",
          value: "black",
          hex: "#000000",
          image: "/images/bikes/yamaha-ybr125-black.jpg",
          available: true
        },
        {
          name: "Gray",
          value: "gray",
          hex: "#808080",
          image: "/images/bikes/yamaha-ybr125.jpg",
          available: false
        }
      ]
    },
      {
      id: 3,
      name: "Suzuki GS 125",
      price: "Rs. 175,000",
      image: "/images/bikes/Suzuki GS 125.jpg",
      category: "Commuter",
      rating: 4.4,
      features: ["Durable", "Easy Handling", "Affordable"],
      description: "The Suzuki GS 125 is built for durability and reliability. Its robust construction and easy handling make it an ideal choice for riders who value practicality and affordability.",
      specifications: {
        engine: "124cc, Air-cooled, 4-stroke",
        mileage: "58-63 km/l",
        fuelCapacity: "12.5 liters",
        transmission: "4-speed manual",
        power: "10.5 bhp @ 7500 rpm",
        weight: "115 kg"
      },
      colors: ["#000000", "#FF0000", "#0000FF", "#FFFFFF"],
      colorOptions: [
        {
          name: "Red",
          value: "red",
          hex: "#FF0000",
          image: "/images/bikes/suzuki-gs125-red.jpg",
          available: true
        },
        {
          name: "Blue",
          value: "blue",
          hex: "#0000FF",
          image: "/images/bikes/suzuki-gs125-blue.jpg",
          available: true
        },
        {
          name: "Black",
          value: "black",
          hex: "#000000",
          image: "/images/bikes/suzuki-gs125.jpg",
          available: true
        },
        {
          name: "White",
          value: "white",
          hex: "#FFFFFF",
          image: "/images/bikes/suzuki-gs125.jpg",
          available: false
        }
      ]
    },
      {
      id: 4,
      name: "Honda CD 70",
      price: "Rs. 95,000",
      image: "/images/bikes/Honda CD 70.jpg",
      category: "Economy",
      rating: 4.6,
      features: ["Ultra Fuel Efficient", "Perfect for City", "Low Cost"],
      description: "The Honda CD 70 is the most fuel-efficient motorcycle in its class. Perfect for city commuting with its compact size and excellent fuel economy, making it the most economical choice.",
      specifications: {
        engine: "70cc, Air-cooled, 4-stroke",
        mileage: "70-75 km/l",
        fuelCapacity: "8 liters",
        transmission: "4-speed manual",
        power: "5.5 bhp @ 7500 rpm",
        weight: "95 kg"
      },
      colors: ["#000000", "#FF0000", "#0000FF", "#FFFFFF"],
      colorOptions: [
        {
          name: "Red",
          value: "red",
          hex: "#FF0000",
          image: "/images/bikes/honda-cd70-red.jpg",
          available: true
        },
        {
          name: "Blue",
          value: "blue",
          hex: "#0000FF",
          image: "/images/bikes/honda-cd70-blue.jpg",
          available: true
        },
        {
          name: "Black",
          value: "black",
          hex: "#000000",
          image: "/images/bikes/honda-cd70.jpg",
          available: true
        },
        {
          name: "White",
          value: "white",
          hex: "#FFFFFF",
          image: "/images/bikes/honda-cd70.jpg",
          available: false
        }
      ]
    },
      {
      id: 5,
      name: "Yamaha YB 100",
      price: "Rs. 85,000",
      image: "/images/bikes/Yamaha YB 100.png",
      category: "Economy",
      rating: 4.2,
      features: ["Lightweight", "Easy to Ride", "Budget Friendly"],
      description: "The Yamaha YB 100 is designed for beginners and budget-conscious riders. Its lightweight design and easy handling make it perfect for learning and daily commuting.",
      specifications: {
        engine: "98cc, Air-cooled, 4-stroke",
        mileage: "65-70 km/l",
        fuelCapacity: "10 liters",
        transmission: "4-speed manual",
        power: "7.5 bhp @ 7500 rpm",
        weight: "90 kg"
      },
      colors: ["#000000", "#FF0000", "#0000FF", "#808080"],
      colorOptions: [
        {
          name: "Red",
          value: "red",
          hex: "#FF0000",
          image: "/images/bikes/yamaha-yb100-red.jpg",
          available: true
        },
        {
          name: "Black",
          value: "black",
          hex: "#000000",
          image: "/images/bikes/yamaha-yb100.jpg",
          available: true
        },
        {
          name: "Blue",
          value: "blue",
          hex: "#0000FF",
          image: "/images/bikes/yamaha-yb100.jpg",
          available: true
        },
        {
          name: "Gray",
          value: "gray",
          hex: "#808080",
          image: "/images/bikes/yamaha-yb100.jpg",
          available: false
        }
      ]
    },
      {
      id: 6,
      name: "Suzuki GD 110",
      price: "Rs. 105,000",
      image: "/images/bikes/Suzuki GD 110.jpg",
      category: "Economy",
      rating: 4.4,
      features: ["Good Performance", "Reliable", "Value for Money"],
      description: "The Suzuki GD 110 offers excellent value for money with its reliable performance and modern features. It's perfect for riders who want quality without breaking the bank.",
      specifications: {
        engine: "112.8cc, Air-cooled, 4-stroke",
        mileage: "60-65 km/l",
        fuelCapacity: "11 liters",
        transmission: "4-speed manual",
        power: "8.5 bhp @ 7500 rpm",
        weight: "105 kg"
      },
      colors: ["#000000", "#FF0000", "#0000FF", "#FFFFFF"],
      colorOptions: [
        {
          name: "Red",
          value: "red",
          hex: "#FF0000",
          image: "/images/bikes/suzuki-gd110-red.jpg",
          available: true
        },
        {
          name: "Black",
          value: "black",
          hex: "#000000",
          image: "/images/bikes/suzuki-gd110.jpg",
          available: true
        },
        {
          name: "Blue",
          value: "blue",
          hex: "#0000FF",
          image: "/images/bikes/suzuki-gd110.jpg",
          available: true
        },
        {
          name: "White",
          value: "white",
          hex: "#FFFFFF",
          image: "/images/bikes/suzuki-gd110.jpg",
          available: false
        }
      ]
    }
]

export default function AkrSonsBikeStore() {
  const navigate = useNavigate()
  const [showSlideshow, setShowSlideshow] = useState(false)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [selectedBike, setSelectedBike] = useState<{ name: string; price: string } | null>(null)
  const [selectedColors, setSelectedColors] = useState<{ [key: number]: any }>({})

  const handleBookNow = (bike: { name: string; price: string }) => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikes.map((bike) => (
              <Card key={bike.id} className="glass-card p-6 cosmic-hover group overflow-hidden relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative z-10 space-y-4">
                  {/* Bike Image */}
                  <div className="w-full h-48 rounded-xl overflow-hidden relative">
                    <img
                      src={getBikeImage(bike)}
                      alt={bike.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    
                    <div className="pt-4">
                      <div className="text-2xl font-bold text-gray-800 mb-4">
                        {bike.price}
                      </div>
                      <div className="flex flex-col gap-2 mt-2 sm:flex-row">
                        <Button 
                          variant="outline"
                          className="w-full sm:flex-1"
                          onClick={() => setShowSlideshow(true)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button 
                          className="w-full sm:flex-1 bg-gradient-primary hover:bg-gradient-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                          onClick={() => handleBookNow({ name: bike.name, price: bike.price })}
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
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-old-english text-gray-800 mb-8">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+94 11 234 5678</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">info@akrsons.lk</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Visit Us</h3>
              <p className="text-gray-600">Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bike Details Slideshow */}
      {showSlideshow && (
        <BikeSlideshow 
          bikes={bikes} 
          onClose={() => setShowSlideshow(false)}
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
    </div>
  )
} 