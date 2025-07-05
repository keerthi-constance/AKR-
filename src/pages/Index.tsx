import { Button } from "@/components/ui/button"
import { CompanyCard } from "@/components/CompanyCard"
import { HeroSlideshow } from "@/components/HeroSlideshow"

const companies = [
  {
    name: "AKR & SONS (PVT) LTD",
    description:
      "Leading private enterprise providing comprehensive business solutions with decades of expertise in corporate management and strategic development.",
    icon: "🏢",
    image: "/src/assets/companies/akr-sons.jpg",
  },
  {
    name: "AKR Multi Complex",
    description:
      "Modern commercial and residential complex offering premium spaces for businesses and families with state-of-the-art facilities and services.",
    icon: "🏗️",
    image: "/src/assets/companies/akr-multi-complex.jpg",
  },
  {
    name: "AKR Construction",
    description:
      "Professional construction company delivering high-quality infrastructure projects, residential complexes, and commercial buildings with innovative designs.",
    icon: "🔨",
    image: "/src/assets/companies/akr-construction.jpg",
  },
  {
    name: "AKR Lanka Filing Station",
    description:
      "Reliable fuel station providing quality petroleum products and automotive services to meet all your vehicle maintenance needs.",
    icon: "⛽",
    image: "/src/assets/companies/akr-fuel-station.jpg",
  },
  {
    name: "AKR Wine Store",
    description:
      "Premium wine retail store offering carefully curated selection of finest wines from around the world for connoisseurs and enthusiasts.",
    icon: "🍷",
    image: "/src/assets/companies/akr-wine-store.jpg",
  },
  {
    name: "AKR Farm",
    description:
      "Sustainable agricultural enterprise focusing on organic farming practices and fresh produce cultivation using modern farming techniques.",
    icon: "🌾",
    image: "/src/assets/companies/akr-farm.jpg",
  },
  {
    name: "AKR'S Amma Organization",
    description:
      "Dedicated social organization committed to community development, charitable activities, and supporting underprivileged families in society.",
    icon: "❤️",
    image: "/src/assets/companies/akr-amma-organization.jpg",
  },
  {
    name: "AKR Easy Credit (Pvt) Ltd",
    description:
      "Reliable financial services provider offering easy credit solutions, personal loans, and flexible payment options to meet diverse financial needs.",
    icon: "💳",
    image: "/src/assets/companies/akr-easy-credit.jpg",
  },
]

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/images/image copy 2.png" alt="AKR Group Logo" className="h-12 w-12 object-contain" />
              <div className="text-2xl font-bold gradient-text">AKR GROUP OF COMPANIES</div>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:gradient-text transition-all duration-300 font-medium">
                Home
              </a>
              <a
                href="#companies"
                className="text-foreground hover:gradient-text transition-all duration-300 font-medium"
              >
                Companies
              </a>
              <a href="#about" className="text-foreground hover:gradient-text transition-all duration-300 font-medium">
                About
              </a>
              <a
                href="#contact"
                className="text-foreground hover:gradient-text transition-all duration-300 font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Centered Slideshow */}
      <section id="home" className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Welcome to AKR Group Of Companies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering diverse industries through innovation, excellence, and commitment to sustainable growth across
              multiple business sectors.
            </p>
          </div>
          <HeroSlideshow />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">9</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-secondary mb-2">25+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Companies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our diverse portfolio of companies, each excelling in their respective industries and
              contributing to our collective success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <CompanyCard
                key={index}
                name={company.name}
                description={company.description}
                icon={company.icon}
                image={company.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">About AKR Group Of Companies</span>
              </h2>
            </div>

            {/* Family Photo and Company Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">Our Family Legacy</h3>
                                  <div className="mb-6">
                    <img src="/images/image copy.png" alt="AKR Group Family" className="w-full rounded-lg shadow-lg" />
                  </div>
                <p className="text-muted-foreground leading-relaxed">
                  The AKR Group Of Companies is built on strong family values and traditions passed down through generations. Our
                  leadership team combines decades of experience with fresh perspectives, ensuring sustainable growth
                  while maintaining our core principles of integrity, excellence, and community service.
                </p>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">Our Mission & Vision</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Mission</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide exceptional products and services across diverse industries while maintaining the
                      highest standards of quality, innovation, and customer satisfaction.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Vision</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the leading business group in Sri Lanka, recognized for our commitment to excellence,
                      sustainable practices, and positive impact on communities we serve.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Values</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Integrity and Transparency</li>
                      <li>• Excellence in Service</li>
                      <li>• Community Development</li>
                      <li>• Sustainable Growth</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Overview */}
            <div className="glass-card p-8 md:p-12 text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                AKR Group of Companies stands as a testament to entrepreneurial vision and diversified excellence. With
                a strong foundation built over decades, we have expanded across multiple industries, delivering
                exceptional value and innovative solutions to our clients and communities.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
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
              <p className="text-lg text-muted-foreground">
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
                    <h4 className="font-semibold text-foreground mb-2">Phone Numbers</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>
                        Murunkan: <span className="text-foreground">0232231222</span>
                      </p>
                      <p>
                        Mannar: <span className="text-foreground">(023) 205 1536</span>
                      </p>
                      <p>
                        Mobile: <span className="text-foreground">0773111266</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground">
                      <span className="text-foreground">akrfuture@gmail.com</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Leadership */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">Leadership Team</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground">Founder</h4>
                    <p className="text-lg gradient-text-secondary">S. Anton</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Chief Executive Officer</h4>
                    <p className="text-lg gradient-text-secondary mb-2">Anton Rojar Stalin</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>
                        Mobile: <span className="text-foreground">0773111266</span>
                      </p>
                      <p>
                        Email: <span className="text-foreground">antonrojarstalin@gmail.com</span>
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
                  <h4 className="font-semibold text-foreground mb-2">Anton Floreda Gamini</h4>
                  <p className="text-sm text-muted-foreground">Director</p>
                  <p className="text-sm text-foreground mt-2">antonfloridagamini@gmail.com</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Anton Andrew Rajan</h4>
                  <p className="text-sm text-muted-foreground">Director</p>
                  <p className="text-sm text-foreground mt-2">antonandrewrajan29@gmail.com</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Anton Anbu Rajan</h4>
                  <p className="text-sm text-muted-foreground">Director</p>
                  <p className="text-sm text-foreground mt-2">antonanburajan14@gmail.com</p>
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
            <p className="text-muted-foreground mb-8">Empowering industries, Building futures, Creating value.</p>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <span>© 2024 AKR Group of Companies</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
