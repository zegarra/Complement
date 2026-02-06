import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg shadow-[#8B1538]/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl tracking-wider">
              <span className="text-white">Complement</span>
              <span className="text-[#C41E3A]"> Beauty Studio</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-white hover:text-[#C41E3A] transition-colors duration-300"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-white hover:text-[#C41E3A] transition-colors duration-300"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-white hover:text-[#C41E3A] transition-colors duration-300"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-white hover:text-[#C41E3A] transition-colors duration-300"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-[#C41E3A] text-white px-6 py-2 rounded-full hover:bg-[#8B1538] transition-all duration-300 hover:shadow-lg hover:shadow-[#C41E3A]/50"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-white hover:text-[#C41E3A] transition-colors duration-300"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="block w-full text-left text-white hover:text-[#C41E3A] transition-colors duration-300"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="block w-full text-left text-white hover:text-[#C41E3A] transition-colors duration-300"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="block w-full text-left text-white hover:text-[#C41E3A] transition-colors duration-300"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-center bg-[#C41E3A] text-white px-6 py-2 rounded-full hover:bg-[#8B1538] transition-all duration-300"
            >
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}