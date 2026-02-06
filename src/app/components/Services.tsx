import { Sparkles, Eye, Hand, Heart } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Micropigmentación de Labios",
    description: "Logra unos labios definidos y con color natural. Técnicas avanzadas que realzan tu belleza sin perder la naturalidad.",
    features: ["Color natural", "Resultados duraderos", "Técnica profesional"],
  },
  {
    icon: Eye,
    title: "Diseño de Cejas",
    description: "Cejas perfectamente definidas con micropigmentación de última generación. Realza tu mirada con resultados impecables.",
    features: ["Diseño personalizado", "Efecto natural", "Larga duración"],
  },
  {
    icon: Hand,
    title: "Uñas Rubber Effect",
    description: "Manicure de alta calidad con acabado rubber único. Uñas impecables con efectos modernos y elegantes.",
    features: ["Acabado profesional", "Durabilidad", "Diseños exclusivos"],
  },
  {
    icon: Sparkles,
    title: "Tratamientos Especiales",
    description: "Servicios adicionales de belleza personalizados para complementar tu look ideal.",
    features: ["Personalizado", "Alta calidad", "Resultados garantizados"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#C41E3A]/10 px-6 py-2 rounded-full border border-[#C41E3A]/30 mb-6">
            <span className="text-[#C41E3A] tracking-wider">Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Servicios Especializados
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ofrecemos los mejores tratamientos de belleza con técnicas profesionales y productos de alta calidad
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#C41E3A]/10 rounded-2xl p-8 hover:border-[#C41E3A]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C41E3A]/20 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex">
                <div className="p-4 bg-[#C41E3A]/10 rounded-xl group-hover:bg-[#C41E3A]/20 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-[#C41E3A]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl text-white mb-3 group-hover:text-[#C41E3A] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-[#C41E3A] rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C41E3A] to-[#8B1538] group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#C41E3A] text-white px-8 py-4 rounded-full hover:bg-[#8B1538] transition-all duration-300 hover:shadow-lg hover:shadow-[#C41E3A]/50 inline-flex items-center gap-2"
          >
            <span>Reserva tu Cita</span>
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
