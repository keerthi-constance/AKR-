import { Button } from "@/components/ui/button";
import { CompanyCard } from "@/components/CompanyCard";
import heroBg from "@/assets/hero-bg.jpg";

const companies = [
  {
    name: "AKR & SONS (PVT) LTD",
    description: "Leading private enterprise providing comprehensive business solutions with decades of expertise in corporate management and strategic development.",
    icon: "🏢"
  },
  {
    name: "AKR Multi Complex",
    description: "Modern commercial and residential complex offering premium spaces for businesses and families with state-of-the-art facilities and services.",
    icon: "🏗️"
  },
  {
    name: "AKR Construction",
    description: "Professional construction company delivering high-quality infrastructure projects, residential complexes, and commercial buildings with innovative designs.",
    icon: "🔨"
  },
  {
    name: "AKR Lanka Filing Station",
    description: "Reliable fuel station providing quality petroleum products and automotive services to meet all your vehicle maintenance needs.",
    icon: "⛽"
  },
  {
    name: "AKR Wine Store",
    description: "Premium wine retail store offering carefully curated selection of finest wines from around the world for connoisseurs and enthusiasts.",
    icon: "🍷"
  },
  {
    name: "AKR Farm",
    description: "Sustainable agricultural enterprise focusing on organic farming practices and fresh produce cultivation using modern farming techniques.",
    icon: "🌾"
  },
  {
    name: "AKR Beauty Zone",
    description: "Luxury beauty salon and spa providing professional beauty treatments, skincare services, and wellness experiences in a premium setting.",
    icon: "💄"
  },
  {
    name: "AKR'S Amma Organization",
    description: "Dedicated social organization committed to community development, charitable activities, and supporting underprivileged families in society.",
    icon: "❤️"
  },
  {
    name: "AKR Easy Credit (Pvt) Ltd",
    description: "Reliable financial services provider offering easy credit solutions, personal loans, and flexible payment options to meet diverse financial needs.",
    icon: "💳"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">
              AKR GROUP
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:gradient-text transition-all duration-300">Home</a>
              <a href="#companies" className="text-foreground hover:gradient-text transition-all duration-300">Companies</a>
              <a href="#about" className="text-foreground hover:gradient-text transition-all duration-300">About</a>
              <a href="#contact" className="text-foreground hover:gradient-text transition-all duration-300">Contact</a>
            </div>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">AKR Group</span>
                <br />
                <span className="text-foreground">Of Companies</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Empowering diverse industries through innovation, excellence, and commitment to sustainable growth across multiple business sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button variant="cosmic" size="lg" className="text-lg px-8 py-6">
                  Explore Our Companies
                </Button>
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
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
              Discover our diverse portfolio of companies, each excelling in their respective industries and contributing to our collective success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <CompanyCard
                key={index}
                name={company.name}
                description={company.description}
                icon={company.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">About AKR Group</span>
            </h2>
            <div className="glass-card p-8 md:p-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                AKR Group of Companies stands as a testament to entrepreneurial vision and diversified excellence. 
                With a strong foundation built over decades, we have expanded across multiple industries, 
                delivering exceptional value and innovative solutions to our clients and communities.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Our commitment to quality, sustainability, and social responsibility drives every aspect of our business operations. 
                From construction and retail to agriculture and beauty services, we maintain the highest standards while fostering growth and innovation.
              </p>
              <Button variant="cosmic" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <div className="glass-card p-8">
              <p className="text-lg text-muted-foreground mb-8">
                Ready to explore partnership opportunities or learn more about our services? 
                We'd love to hear from you and discuss how AKR Group can help achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cosmic" size="lg">
                  Contact Us
                </Button>
                <Button variant="hero" size="lg">
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
            <div className="text-2xl font-bold gradient-text mb-4">
              AKR GROUP OF COMPANIES
            </div>
            <p className="text-muted-foreground mb-8">
              Empowering industries, Building futures, Creating value.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <span>© 2024 AKR Group of Companies</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;