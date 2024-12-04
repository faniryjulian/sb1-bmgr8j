import React from 'react';
import { MapPin, Train, Car, Utensils, Info, Clock } from 'lucide-react';

export function PracticalInfo() {
  return (
    <section id="practical" className="py-24 bg-[#353B3C] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-[#F4F3EE] text-center mb-16">Infos Pratiques</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-[#350B89] p-8 rounded-lg border border-[#FFD84D]/10">
            <h3 className="text-2xl font-bold text-[#FFD84D] mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6" />
              Horaires & Accès
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Train className="w-6 h-6 text-[#FD8AB9] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#F4F3EE]">En Transport</h4>
                  <p className="text-[#F4F3EE]/80">Métro ligne A - Station Centre<br />Bus 15, 18 - Arrêt Festival</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Car className="w-6 h-6 text-[#FD8AB9] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#F4F3EE]">En Voiture</h4>
                  <p className="text-[#F4F3EE]/80">Parking gratuit sur place<br />Suivre les panneaux "Festival"</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#350B89] p-8 rounded-lg border border-[#FFD84D]/10">
            <h3 className="text-2xl font-bold text-[#FFD84D] mb-6 flex items-center gap-2">
              <Info className="w-6 h-6" />
              Sur Place
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Utensils className="w-6 h-6 text-[#FD8AB9] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#F4F3EE]">Restauration</h4>
                  <p className="text-[#F4F3EE]/80">Food trucks variés<br />Bars et espaces détente</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#FD8AB9] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#F4F3EE]">Localisation</h4>
                  <p className="text-[#F4F3EE]/80">Parc des Arts<br />123 rue de la Culture</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#350B89] p-8 rounded-lg border border-[#FFD84D]/10">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3519691156744447!3d48.85837007928754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sCentre%20Pompidou!5e0!3m2!1sen!2sfr!4v1647095757819!5m2!1sen!2sfr"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}