import React from 'react';
import { Clock, MapPin, Music, Palette, Theater } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInWhenVisible } from './animations/FadeInWhenVisible';

const events = [
  {
    time: '18:00',
    title: 'Cérémonie d\'Ouverture',
    location: 'Scène Principale',
    description: 'Performance inaugurale avec les artistes locaux',
    icon: Music,
  },
  {
    time: '20:00',
    title: 'Exposition Nocturne',
    location: 'Espace Galerie',
    description: 'Paysages urbains nocturnes par des photographes renommés',
    icon: Palette,
  },
  {
    time: '22:00',
    title: 'Performance Minuit',
    location: 'Théâtre du Jardin',
    description: 'Danse contemporaine sous les étoiles',
    icon: Theater,
  },
  {
    time: '00:00',
    title: 'Session Électronique',
    location: 'Scène Underground',
    description: 'Expérience audio-visuelle immersive',
    icon: Music,
  },
];

export function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-[#353B3C] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeInWhenVisible>
          <h2 className="text-4xl font-bold text-[#F4F3EE] text-center mb-16">
            Programmation
          </h2>
        </FadeInWhenVisible>
        
        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <FadeInWhenVisible key={index} delay={index * 0.2}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#350B89] p-6 rounded-lg border border-[#FFD84D]/10 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-[#FFD84D]"
                    >
                      <Clock className="w-5 h-5" />
                      <span className="font-mono text-xl">{event.time}</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-[#FD8AB9]"
                    >
                      <MapPin className="w-5 h-5" />
                      <span>{event.location}</span>
                    </motion.div>
                  </div>
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 text-[#FFD84D] mt-1" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-[#F4F3EE] mb-2">{event.title}</h3>
                      <p className="text-[#F4F3EE]/80">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            );
          })}
        </div>
      </div>
    </section>
  );
}