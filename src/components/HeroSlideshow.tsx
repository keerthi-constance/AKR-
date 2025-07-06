import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "AKR Group of Companies",
    subtitle: "Empowering diverse industries through innovation and excellence",
    image: "/src/assets/companies/akr-sons.jpg",
    description: "Leading private enterprise providing comprehensive business solutions"
  },
  {
    id: 2,
    title: "AKR Multi Complex",
    subtitle: "Modern commercial and residential spaces",
    image: "/src/assets/companies/akr-multi-complex.jpg",
    description: "Premium spaces for businesses and families"
  },
  {
    id: 3,
    title: "AKR Construction",
    subtitle: "Building the future with quality and innovation",
    image: "/src/assets/companies/akr-construction.jpg",
    description: "High-quality infrastructure and commercial projects"
  },
  {
    id: 4,
    title: "AKR Farm",
    subtitle: "Sustainable agriculture for a better tomorrow",
    image: "/src/assets/companies/akr-farm.jpg",
    description: "Organic farming practices and fresh produce"
  },
  {
    id: 5,
    title: "Our Family Legacy",
    subtitle: "Built on strong family values and traditions",
    image: "/images/image copy.png",
    description: "Meet the family behind AKR Group's success story"
  }
]

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative h-96 w-3/4 mx-auto overflow-hidden rounded-xl shadow-2xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Enhanced Overlay for Better Text Visibility */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/30 to-background/80" />

          {/* Enhanced Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center max-w-xl mx-auto px-4">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight drop-shadow-2xl">
                  <span className="text-white font-extrabold">{slide.title}</span>
                </h1>
                <p className="text-base md:text-lg text-white font-bold max-w-lg mx-auto leading-relaxed drop-shadow-lg">
                  {slide.subtitle}
                </p>
                <p className="text-sm md:text-base text-white font-semibold max-w-md mx-auto drop-shadow-md">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <Button 
                    size="sm" 
                    className="btn-enhanced text-sm px-6 py-2 bg-gradient-primary hover:bg-gradient-primary/90 font-semibold"
                    onClick={() => {
                      if (slide.id === 5) {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        document.getElementById('companies')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {slide.id === 5 ? "Meet Our Family" : "Explore Our Companies"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-enhanced text-sm px-6 py-2 border-white/60 hover:bg-white/20 bg-transparent text-white font-semibold"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/25 hover:bg-white/40 transition-all duration-300 backdrop-blur-md shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/25 hover:bg-white/40 transition-all duration-300 backdrop-blur-md shadow-lg"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Enhanced Slide Counter */}
      <div className="absolute top-4 right-4 z-20 text-white/90 text-sm font-semibold bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
} 