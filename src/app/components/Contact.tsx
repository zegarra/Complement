import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario
    console.log("Form submitted:", formData);
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#C41E3A]/10 px-6 py-2 rounded-full border border-[#C41E3A]/30 mb-6">
            <span className="text-[#C41E3A] tracking-wider">Contacto</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Agenda tu Cita
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y agenda tu próxima sesión de belleza
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#C41E3A]/10 rounded-2xl p-8">
            <h3 className="text-2xl text-white mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-[#C41E3A]/20 rounded-lg text-white focus:outline-none focus:border-[#C41E3A] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-[#C41E3A]/20 rounded-lg text-white focus:outline-none focus:border-[#C41E3A] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-[#C41E3A]/20 rounded-lg text-white focus:outline-none focus:border-[#C41E3A] transition-colors"
                  placeholder="+34 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-300 mb-2">
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-[#C41E3A]/20 rounded-lg text-white focus:outline-none focus:border-[#C41E3A] transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="labios">Micropigmentación de Labios</option>
                  <option value="cejas">Diseño de Cejas</option>
                  <option value="unas">Uñas Rubber Effect</option>
                  <option value="otro">Otro servicio</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-[#C41E3A]/20 rounded-lg text-white focus:outline-none focus:border-[#C41E3A] transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu consulta..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C41E3A] text-white px-8 py-4 rounded-lg hover:bg-[#8B1538] transition-all duration-300 hover:shadow-lg hover:shadow-[#C41E3A]/50 flex items-center justify-center gap-2"
              >
                <span>Enviar Mensaje</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-white mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C41E3A]/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#C41E3A]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Ubicación</h4>
                    <p className="text-gray-400">
                      Calle Principal 123, Local 5<br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C41E3A]/10 rounded-lg">
                    <Phone className="w-6 h-6 text-[#C41E3A]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Teléfono</h4>
                    <p className="text-gray-400">
                      +34 123 456 789<br />
                      +34 987 654 321
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C41E3A]/10 rounded-lg">
                    <Mail className="w-6 h-6 text-[#C41E3A]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Email</h4>
                    <p className="text-gray-400">
                      info@complementbeauty.com<br />
                      citas@complementbeauty.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C41E3A]/10 rounded-lg">
                    <Clock className="w-6 h-6 text-[#C41E3A]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Horario</h4>
                    <p className="text-gray-400">
                      Lunes - Viernes: 10:00 - 20:00<br />
                      Sábados: 10:00 - 18:00<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#C41E3A]/10 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#C41E3A] mx-auto mb-4" />
                <p className="text-gray-400">Mapa de ubicación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}