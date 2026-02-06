import { Award, Users, Heart, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "1000+", label: "Clientas Satisfechas" },
  { icon: Award, value: "5+", label: "Años de Experiencia" },
  { icon: Heart, value: "100%", label: "Dedicación" },
  { icon: Star, value: "5.0", label: "Calificación" },
];

export function About() {
  return (
    <section id="nosotros" className="py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#C41E3A]/10 px-6 py-2 rounded-full border border-[#C41E3A]/30 mb-6">
            <span className="text-[#C41E3A] tracking-wider">Nosotros</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Sobre Complement Beauty Studio
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-3xl text-white mb-6">
              Tu destino de belleza y bienestar
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                En <span className="text-[#C41E3A]">Complement Beauty Studio</span>, creemos que la belleza es una forma de arte. 
                Nuestro spa se especializa en micropigmentación de última generación, diseño de cejas profesional, 
                y servicios de manicure con acabados exclusivos tipo rubber effect.
              </p>
              <p>
                Contamos con un equipo de especialistas altamente capacitadas, comprometidas con realzar tu belleza 
                natural utilizando técnicas avanzadas y productos de la más alta calidad.
              </p>
              <p>
                Cada tratamiento es personalizado para resaltar tus rasgos únicos, brindándote resultados naturales 
                y duraderos en un ambiente elegante y profesional.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C41E3A] rounded-full"></div>
                <span className="text-gray-300">Profesionales Certificadas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C41E3A] rounded-full"></div>
                <span className="text-gray-300">Productos Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C41E3A] rounded-full"></div>
                <span className="text-gray-300">Ambiente Exclusivo</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#C41E3A]/10 rounded-2xl p-8 text-center hover:border-[#C41E3A]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C41E3A]/20"
              >
                <div className="inline-flex p-3 bg-[#C41E3A]/10 rounded-xl mb-4">
                  <stat.icon className="w-8 h-8 text-[#C41E3A]" />
                </div>
                <div className="text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-[#C41E3A]/10 to-transparent border border-[#C41E3A]/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl text-white mb-8 text-center">¿Por qué elegirnos?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-[#C41E3A] mb-3">01</div>
              <h4 className="text-white mb-2">Técnicas Avanzadas</h4>
              <p className="text-gray-400 text-sm">
                Utilizamos las técnicas más modernas y efectivas del mercado
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#C41E3A] mb-3">02</div>
              <h4 className="text-white mb-2">Atención Personalizada</h4>
              <p className="text-gray-400 text-sm">
                Cada cliente recibe un tratamiento único adaptado a sus necesidades
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#C41E3A] mb-3">03</div>
              <h4 className="text-white mb-2">Resultados Garantizados</h4>
              <p className="text-gray-400 text-sm">
                Nos comprometemos con resultados excepcionales y duraderos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}