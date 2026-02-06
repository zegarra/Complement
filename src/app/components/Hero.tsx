import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1749766878223-6ceae855b28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBpbnRlcmlvciUyMGRhcmt8ZW58MXx8fHwxNzcwMzM2MzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Complement Beauty Studio Spa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-6">
          <div className="inline-block bg-[#C41E3A]/20 backdrop-blur-sm px-6 py-2 rounded-full border border-[#C41E3A]/30 mb-8">
            <span className="text-[#C41E3A] tracking-wider">Belleza que transforma</span>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6">
          <span className="text-white block mb-2">Descubre tu</span>
          <span className="text-[#C41E3A] block">Belleza Natural</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Micropigmentación profesional, diseño de cejas, uñas de alta calidad y más. 
          Realza tu belleza con nuestros servicios especializados.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#C41E3A] text-white px-8 py-4 rounded-full hover:bg-[#8B1538] transition-all duration-300 hover:shadow-lg hover:shadow-[#C41E3A]/50 hover:scale-105"
          >
            Ver Servicios
          </button>
          <button
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Agendar Cita
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#C41E3A] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}