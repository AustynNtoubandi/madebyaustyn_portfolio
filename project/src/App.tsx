import React from 'react';
import { Menu, X, Instagram, Mail, Linkedin, ArrowRight, Palette, Globe, PenTool, Sparkles } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const projects = [
    {
      title: "Modern Logo Design",
      image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&q=80&w=2070",
      category: "Logo Design"
    },
    {
      title: "Minimalist Brand Mark",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=2070",
      category: "Logo Design"
    },
    {
      title: "Creative Logo Collection",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071",
      category: "Logo Design"
    },
  ];

  const services = [
    {
      icon: <PenTool className="w-8 h-8 text-primary" />,
      title: "Logo Design",
      description: "Creating unique, memorable logos that capture your brand's essence and leave a lasting impression"
    },
    {
      icon: <Palette className="w-8 h-8 text-secondary" />,
      title: "Branding & Identity",
      description: "Developing comprehensive brand identities that tell your story and connect with your audience"
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Webdesign & UI/UX",
      description: "Crafting intuitive, beautiful digital experiences that engage and delight users"
    }
  ];

  const workItems = [
    {
      title: "Tech Company Logo",
      category: "Logo Design",
      image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&q=80&w=2070",
      description: "Modern and minimal logo design for tech startup",
      year: "2024"
    },
    {
      title: "Fashion Brand Logo",
      category: "Logo Design",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=2070",
      description: "Elegant logo design for high-end fashion brand",
      year: "2024"
    },
    {
      title: "Restaurant Logo",
      category: "Logo Design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071",
      description: "Distinctive logo design for modern restaurant",
      year: "2024"
    }
  ];

  const categories = ['All', 'Logo Design'];
  const filteredWork = selectedCategory === 'All' 
    ? workItems 
    : workItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold gradient-text">Made By Austyn</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Portfolio</a>
              <a href="#work" className="text-gray-700 hover:text-primary transition-colors">Work</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Portfolio</a>
              <a href="#work" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Work</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="diagonal-box pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
              Creative Vision
              <br />
              Brought to Life
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Hi, I'm Austyn. A passionate designer crafting unique visual experiences through branding, logos, and digital design.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="#work"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors"
              >
                View my work
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                Get in touch
                <Sparkles className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-2 text-center gradient-text">Logo Collection</h2>
          <p className="text-gray-600 text-center mb-12">Showcasing my latest logo designs</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg hover-lift gradient-border">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="text-white p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Work Section */}
      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-2 text-center gradient-text">All Logos</h2>
          <p className="text-gray-600 text-center mb-12">Explore my complete logo design portfolio</p>
          
          {/* Work Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWork.map((item, index) => (
              <div key={index} className="group hover-lift">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-lg gradient-border">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="text-sm text-primary">{item.year}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <span className="inline-block px-4 py-1 bg-gray-100 text-sm rounded-full text-primary">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 diagonal-box">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl font-bold mb-2 text-center gradient-text">My Services</h2>
          <p className="text-gray-600 text-center mb-12">Specialized creative solutions for your needs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover-lift">
                <div className="mb-4 p-3 rounded-full bg-gray-50 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Let's Work Together</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to take your project to the next level? Get in touch for a free consultation.
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="mailto:contact@madebyaustyn.com" className="hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" className="hover:text-secondary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="hover:text-accent transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Made By Austyn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;