import React from 'react';
import { Sparkles, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#350B89]">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#350B89]/90 via-[#350B89]/70 to-[#353B3C]/30" />
      </div>
      
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFD84D]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#FD8AB9]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD84D]/10 text-[#FFD84D] border border-[#FFD84D]/20"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">15-17 Juillet 2024</span>
        </motion.div>
        
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F4F3EE] mb-8"
        >
          Le festival artistique
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block text-[#FFD84D] mt-2"
          >
            qui illumine vos nuits
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-[#F4F3EE]/90 mb-12 max-w-2xl mx-auto"
        >
          Un voyage nocturne gratuit à travers l'art, la musique et la magie urbaine
        </motion.p>

        <motion.button
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="group bg-[#FFD84D] hover:bg-[#FFD84D]/90 text-[#350B89] px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 flex items-center gap-2 mx-auto"
        >
          Découvrir la programmation
          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 text-center pb-8 text-[#F4F3EE]/60"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-block"
        >
          ↓ Découvrez l'univers des Noctambules
        </motion.span>
      </motion.div>
    </section>
  );
}