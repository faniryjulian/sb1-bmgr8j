import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#353B3C] py-12 border-t border-[#FFD84D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 items-center">
          <div>
            <h3 className="text-[#FFD84D] text-xl font-bold mb-4">Les Noctambules</h3>
            <p className="text-[#F4F3EE]/80">Festival artistique gratuit</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-[#F4F3EE] font-bold mb-4">Contact</h4>
            <p className="text-[#F4F3EE]/80">contact@lesnoctambules.fr</p>
            <p className="text-[#F4F3EE]/80">+33 1 23 45 67 89</p>
          </div>
          
          <div>
            <h4 className="text-[#F4F3EE] font-bold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#F4F3EE] hover:text-[#FFD84D] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#F4F3EE] hover:text-[#FFD84D] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#F4F3EE] hover:text-[#FFD84D] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#F4F3EE] hover:text-[#FFD84D] transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#F4F3EE]/10 text-center text-[#F4F3EE]/60 text-sm">
          © 2024 Les Noctambules. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}