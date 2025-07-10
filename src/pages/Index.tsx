import { Button } from "@/components/ui/button"
import { CompanyCard } from "@/components/CompanyCard"
import { HeroSlideshow } from "@/components/HeroSlideshow"
import { Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const companies = [
  {
    name: "AKR & SONS (PVT) LTD",
    description:
      "Leading private enterprise providing comprehensive business solutions with decades of expertise in corporate management and strategic development.",
    icon: "🏢",
    image: "/images/akr-sons.jpg",
  },
  {
    name: "AKR Multi Complex",
    description:
      "Modern commercial and residential complex offering premium spaces for businesses and families with state-of-the-art facilities and services.",
    icon: "🏗️",
    image: "/images/akr-multi-complex.jpg",
  },
  {
    name: "AKR Construction",
    description:
      "Professional construction company delivering high-quality infrastructure projects, residential complexes, and commercial buildings with innovative designs.",
    icon: "🔨",
    image: "/images/akr-construction.jpg",
  },
  {
    name: "AKR Lanka Filing Station",
    description:
      "Reliable fuel station providing quality petroleum products and automotive services to meet all your vehicle maintenance needs.",
    icon: "⛽",
    image: "/images/akr-fuel-station.jpg",
  },
  {
    name: "AKR Wine Store",
    description:
      "Premium wine retail store offering carefully curated selection of finest wines from around the world for connoisseurs and enthusiasts.",
    icon: "🍷",
    image: "/images/akr-wine-store.jpg",
  },
  {
    name: "AKR Farm",
    description:
      "Sustainable agricultural enterprise focusing on organic farming practices and fresh produce cultivation using modern farming techniques.",
    icon: "🌾",
    image: "/images/akr-farm.jpg",
  },
  {
    name: "AKR'S Amma Organization",
    description:
      "Dedicated social organization committed to community development, charitable activities, and supporting underprivileged families in society.",
    icon: "❤️",
    image: "/images/AKR%20AMMA.jpg",
  },
  {
    name: "AKR Easy Credit (Pvt) Ltd",
    description:
      "Reliable financial services provider offering easy credit solutions, personal loans, and flexible payment options to meet diverse financial needs.",
    icon: "💳",
    image: "/images/akr-easy-credit.jpg",
  },
]

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <a href="#home" className="flex items-center space-x-3 md:space-x-4 hover:opacity-80 transition-opacity duration-200">
                <img 
                  src="/images/image copy 2.png" 
                  alt="AKR Group Logo" 
                  className="h-10 w-10 md:h-14 md:w-14 object-contain drop-shadow-sm hover:scale-105 transition-transform duration-200" 
                />
                <div className="text-lg md:text-2xl font-bold gradient-text hidden sm:block">AKR GROUP OF COMPANIES</div>
                <div className="text-sm md:text-lg font-bold gradient-text sm:hidden">AKR GROUP</div>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#home" className="text-gray-800 hover:gradient-text transition-all duration-300 font-medium">
                Home
              </a>
              <a
                href="#companies"
                className="text-gray-800 hover:gradient-text transition-all duration-300 font-medium"
              >
                Companies
              </a>
              <a href="#about" className="text-gray-800 hover:gradient-text transition-all duration-300 font-medium">
                About
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:gradient-text transition-all duration-300 font-medium"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                  mobileMenu.classList.toggle('hidden');
                }
              }}
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-gray-800 hover:gradient-text transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/10"
                onClick={() => {
                  document.getElementById('mobile-menu')?.classList.add('hidden');
                }}
              >
                Home
              </a>
              <a
                href="#companies"
                className="text-gray-800 hover:gradient-text transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/10"
                onClick={() => {
                  document.getElementById('mobile-menu')?.classList.add('hidden');
                }}
              >
                Companies
              </a>
              <a 
                href="#about" 
                className="text-gray-800 hover:gradient-text transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/10"
                onClick={() => {
                  document.getElementById('mobile-menu')?.classList.add('hidden');
                }}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:gradient-text transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/10"
                onClick={() => {
                  document.getElementById('mobile-menu')?.classList.add('hidden');
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slideshow */}
      <section id="home" className="pt-16 md:pt-20 relative overflow-hidden">
        {/* Dynamic Moving Elements Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <div className="absolute inset-0">
            {/* Large floating elements */}
            <div className="absolute top-16 left-16 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full animate-dynamicFloat1"></div>
            <div className="absolute top-32 right-24 w-12 h-12 bg-gradient-to-br from-emerald-400/25 to-teal-500/25 rounded-full animate-dynamicFloat2"></div>
            <div className="absolute bottom-24 left-1/3 w-14 h-14 bg-gradient-to-br from-teal-400/20 to-green-500/20 rounded-full animate-dynamicFloat3"></div>
            
            {/* Medium moving elements */}
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-green-500/30 to-emerald-600/30 rounded-full animate-dynamicMove1"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-gradient-to-br from-emerald-500/35 to-teal-600/35 rounded-full animate-dynamicMove2"></div>
            <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-gradient-to-br from-teal-500/25 to-green-600/25 rounded-full animate-dynamicMove3"></div>
            
            {/* Small bouncing elements */}
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-green-400/40 rounded-full animate-dynamicBounce1"></div>
            <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-emerald-400/45 rounded-full animate-dynamicBounce2"></div>
            <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-teal-400/35 rounded-full animate-dynamicBounce3"></div>
            
            {/* Rotating elements */}
            <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-green-400/20 rounded-full animate-dynamicRotate1"></div>
            <div className="absolute top-1/4 left-1/2 w-12 h-12 border-2 border-emerald-400/25 rounded-full animate-dynamicRotate2"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mt-4">
            <HeroSlideshow />
          </div>
          
          <div className="text-center mt-8 mb-12">
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Empowering diverse industries through innovation, excellence, and commitment to sustainable growth across
              multiple business sectors.
              </p>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 via-transparent to-emerald-50/50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Achievements</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building success through dedication, innovation, and unwavering commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">8</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">Companies</div>
                <div className="text-sm text-gray-600">Diverse Portfolio</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold gradient-text-secondary mb-3 group-hover:scale-110 transition-transform duration-300">25+</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">Years Experience</div>
                <div className="text-sm text-gray-600">Proven Track Record</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">Happy Clients</div>
                <div className="text-sm text-gray-600">Trusted Partnership</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold gradient-text-secondary mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">Projects Completed</div>
                <div className="text-sm text-gray-600">Successful Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Companies Section */}
      <section id="companies" className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/30 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Companies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our diverse portfolio of companies, each excelling in their respective industries and
              contributing to our collective success with innovative solutions and exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="group">
              <CompanyCard
                name={company.name}
                description={company.description}
                icon={company.icon}
                image={company.image}
              />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">About AKR Group Of Companies</span>
            </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto text-justify">
                Building a legacy of excellence through innovation, integrity, and unwavering commitment to our community
              </p>
            </div>

            {/* Family Photo and Company Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">Our Family Legacy</h3>
                <div className="mb-6">
                  <img src="/images/image copy.png" alt="AKR Group Family" className="w-full rounded-lg shadow-lg" />
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  AKR's strength lies in its roots — a family legacy built on integrity, hard work, and visionary leadership.<br/>
                  As the torchbearer of this legacy, Mr. Rojar Stalin, Mr. Anton's son, took over the leadership and propelled the company into a new era. His forward-thinking mindset and commitment to community development have driven AKR to new heights while staying true to the values instilled by his father.<br/>
                  Together, the family's collective dedication continues to guide AKR's mission: empowering communities, fostering economic growth, and creating sustainable value for future generations.
                </p>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">Our Mission & Vision</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Mission</h4>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      To deliver exceptional products and services across diverse industries, while setting new standards in quality, innovation, and customer care — all driven by a deep commitment to uplifting communities and empowering lives.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Vision</h4>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      To become Sri Lanka's most trusted and admired business group, recognized for our unwavering dedication to excellence, sustainable growth, and a meaningful impact on every community we serve.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Values</h4>
                    <ul className="text-gray-700 space-y-2 text-justify">
                      <li>• <b>Integrity & Transparency</b> — We build trust through honesty and openness in everything we do.</li>
                      <li>• <b>Excellence in Service</b> — We go beyond expectations, delivering value at every touchpoint.</li>
                      <li>• <b>Community Development</b> — We believe in giving back and nurturing strong, resilient communities.</li>
                      <li>• <b>Sustainable Growth</b> — We grow responsibly, with a focus on long-term impact and environmental stewardship.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Overview */}
            <div className="glass-card p-8 md:p-12 text-center">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-justify">
                AKR Group of Companies stands as a testament to entrepreneurial vision and diversified excellence. With
                a strong foundation built over decades, we have expanded across multiple industries, delivering
                exceptional value and innovative solutions to our clients and communities.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-justify">
                Our commitment to quality, sustainability, and social responsibility drives every aspect of our business
                operations. From construction and retail to agriculture and beauty services, we maintain the highest
                standards while fostering growth and innovation.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Get In Touch</span>
              </h2>
              <p className="text-lg text-gray-600">
                Ready to explore partnership opportunities or learn more about our services? We'd love to hear from you
                and discuss how AKR Group Of Companies can help achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Contact Information */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Phone Numbers</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <Phone className="inline w-4 h-4 mr-1 text-cyan-600 align-text-bottom" />
                        Murunkan: <span className="text-gray-800 font-medium">0232231222</span>
                      </p>
                      <p>
                        <Phone className="inline w-4 h-4 mr-1 text-cyan-600 align-text-bottom" />
                        Mannar: <span className="text-gray-800 font-medium">(023) 205 1536</span>
                      </p>
                      <p>
                        <Phone className="inline w-4 h-4 mr-1 text-cyan-600 align-text-bottom" />
                        Mobile: <span className="text-gray-800 font-medium">0773111266</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                    <p className="text-gray-600">
                      <Mail className="inline w-4 h-4 mr-1 text-cyan-600 align-text-bottom" />
                      <span className="text-gray-800 font-medium">akrfuture@gmail.com</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Leadership */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">Leadership Team</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800">Founder</h4>
                    <p className="text-lg text-gray-900 font-bold">S. Anton</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Chief Executive Officer</h4>
                    <p className="text-lg text-gray-900 font-bold mb-2">Anton Rojar Stalin</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>
                        Mobile: <span className="text-gray-800 font-medium">0773111266</span>
                      </p>
                      <p>
                        Email: <span className="text-gray-800 font-medium">antonrojarstalin@gmail.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Board of Directors */}
            <div className="glass-card p-8 mb-12">
              <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Board of Directors</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Anton Floreda Gamini</h4>
                    <p className="text-sm text-gray-600">Director</p>
                    <p className="text-sm text-gray-700 font-medium mt-2">antonfloridagamini@gmail.com</p>
                </div>
                <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Anton Andrew Rajan</h4>
                    <p className="text-sm text-gray-600">Director</p>
                    <p className="text-sm text-gray-700 font-medium mt-2">antonandrewrajan29@gmail.com</p>
                </div>
                <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Anton Anbu Rajan</h4>
                    <p className="text-sm text-gray-600">Director</p>
                    <p className="text-sm text-gray-700 font-medium mt-2">antonanburajan14@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90">
                  Contact Us
                </Button>
                <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 bg-transparent">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img src="/images/image copy 2.png" alt="AKR Group Logo" className="h-8 w-8 object-contain" />
              <div className="text-2xl font-bold gradient-text">AKR GROUP OF COMPANIES</div>
            </div>
            <p className="text-gray-600 mb-8">Empowering industries, Building futures, Creating value.</p>
            <div className="flex justify-center space-x-8 text-sm text-gray-600">
              <span>© 2024 AKR Group of Companies</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
