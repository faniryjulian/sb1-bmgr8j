import React from 'react';
import { Music, Star, Brush } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScaleIn } from './animations/ScaleIn';

const artists = [
  {
    name: 'Claire Lumière',
    type: 'Artiste Visuelle',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    description: 'Installations lumineuses et art interactif',
    icon: Star,
  },
  {
    name: 'Les Rêveurs',
    type: 'Collectif Musical',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=800&q=80',
    description: 'Fusion de musique électronique et instruments traditionnels',
    icon: Music,
  },
  {
    name: 'Marie Nocturne',
    type: 'Peintre',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    description: 'Art urbain et fresques monumentales',
    icon: Brush,
  },
];

export function Artists() {
  return (
    <section id="artists" className="py-24 bg-[#350B89] relative overflow-hidden">
      <motion.div 
        animate={{ 
          background: [
            'radial-gradient(circle at 30% 30%, rgba(255,216,77,0.1) 0%, rgba(53,11,137,0) 70%)',
            'radial-gradient(circle at 70% 70%, rgba(255,216,77,0.1) 0%, rgba(53,11,137,0) 70%)',
            'radial-gradient(circle at 30% 30%, rgba(255,216,77,0.1) 0%, rgba(53,11,137,0) 70%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScaleIn>
          <h2 className="text-4xl font-bold text-[#F4F3EE] text-center mb-16">Artistes</h2>
        </ScaleIn>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist, index) => {
            const Icon = artist.icon;
            return (
              <ScaleIn key={index} delay={index * 0.2}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-lg bg-[#353B3C]"
                >
                  <div className="aspect-w-3 aspect-h-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={artist.image}
                      alt={artist.name}
                      className="object-cover w-full h-full transition-transform duration-500"
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#350B89] via-[#350B89]/50 to-transparent"
                    />
                  </div>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <div className="flex items-center gap-2 text-[#FFD84D] mb-2">
                      <Icon className="w-5 h-5" />
                      <span className="text-sm uppercase tracking-wider">{artist.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#F4F3EE] mb-2">{artist.name}</h3>
                    <p className="text-[#F4F3EE]/80 text-sm">{artist.description}</p>
                  </motion.div>
                </motion.div>
              </ScaleIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}