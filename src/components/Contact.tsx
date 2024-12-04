import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#350B89] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD84D]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FD8AB9]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-[#F4F3EE] text-center mb-16">Contact</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-[#353B3C] p-8 rounded-lg border border-[#FFD84D]/10">
            <h3 className="text-2xl font-bold text-[#FFD84D] mb-6">Contactez-nous</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-[#F4F3EE] mb-2" htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-[#350B89] border border-[#FFD84D]/20 text-[#F4F3EE] focus:outline-none focus:border-[#FFD84D]"
                />
              </div>
              <div>
                <label className="block text-[#F4F3EE] mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-[#350B89] border border-[#FFD84D]/20 text-[#F4F3EE] focus:outline-none focus:border-[#FFD84D]"
                />
              </div>
              <div>
                <label className="block text-[#F4F3EE] mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-[#350B89] border border-[#FFD84D]/20 text-[#F4F3EE] focus:outline-none focus:border-[#FFD84D]"
                ></textarea>
              </div>
              <button className="w-full bg-[#FFD84D] hover:bg-[#FFD84D]/90 text-[#350B89] px-6 py-3 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Envoyer
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-[#353B3C] p-8 rounded-lg border border-[#FFD84D]/10">
              <h3 className="text-2xl font-bold text-[#FFD84D] mb-6">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[#F4F3EE]">
                  <Mail className="w-6 h-6 text-[#FD8AB9]" />
                  <span>contact@lesnoctambules.fr</span>
                </div>
                <div className="flex items-center gap-4 text-[#F4F3EE]">
                  <Phone className="w-6 h-6 text-[#FD8AB9]" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-4 text-[#F4F3EE]">
                  <MapPin className="w-6 h-6 text-[#FD8AB9]" />
                  <span>123 rue de la Culture<br />75000 Paris</span>
                </div>
              </div>
            </div>

            <div className="bg-[#353B3C] p-8 rounded-lg border border-[#FFD84D]/10">
              <h3 className="text-2xl font-bold text-[#FFD84D] mb-6">Festival Gratuit</h3>
              <p className="text-[#F4F3EE]/80">
                Les Noctambules est un festival gratuit et accessible à tous. Aucune réservation n'est nécessaire.
                Venez découvrir l'art sous toutes ses formes dans une ambiance nocturne unique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}