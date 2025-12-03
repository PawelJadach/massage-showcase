'use client';

import { useState } from 'react';
import { Flower2, Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#f4a5b0] rounded-full flex items-center justify-center">
              <Flower2 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-light text-[#6b6b6b]">SPA MAGIC</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-[#6b6b6b] hover:text-[#f4a5b0] transition">STRONA GŁÓWNA</a>
            <a href="#uslugi" className="text-[#6b6b6b] hover:text-[#f4a5b0] transition">USŁUGI</a>
            <a href="#cennik" className="text-[#6b6b6b] hover:text-[#f4a5b0] transition">CENNIK</a>
            <a href="#personel" className="text-[#6b6b6b] hover:text-[#f4a5b0] transition">PERSONEL</a>
            <a href="#galeria" className="text-[#6b6b6b] hover:text-[#f4a5b0] transition">GALERIA</a>
            <a href="#kontakt" className="text-[#6b6b6b] hover:text-[#f4a5b0] transition">KONTAKT</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-[#6b6b6b]">
              <Phone className="w-5 h-5" />
              <a href="tel:+481298765432" className="hover:text-[#f4a5b0] transition">+48 12 987 65 432</a>
            </div>
            <button
              className="md:hidden text-[#6b6b6b] hover:text-[#f4a5b0] transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[#6b6b6b]/20 pt-4">
            <div className="flex flex-col gap-4">
              <a 
                href="#home" 
                className="text-[#6b6b6b] hover:text-[#f4a5b0] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                STRONA GŁÓWNA
              </a>
              <a 
                href="#uslugi" 
                className="text-[#6b6b6b] hover:text-[#f4a5b0] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                USŁUGI
              </a>
              <a 
                href="#cennik" 
                className="text-[#6b6b6b] hover:text-[#f4a5b0] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                CENNIK
              </a>
              <a 
                href="#personel" 
                className="text-[#6b6b6b] hover:text-[#f4a5b0] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                PERSONEL
              </a>
              <a 
                href="#galeria" 
                className="text-[#6b6b6b] hover:text-[#f4a5b0] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                GALERIA
              </a>
              <a 
                href="#kontakt" 
                className="text-[#6b6b6b] hover:text-[#f4a5b0] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                KONTAKT
              </a>
              <div className="flex items-center gap-2 text-[#6b6b6b] pt-2 border-t border-[#6b6b6b]/20">
                <Phone className="w-5 h-5" />
                <a href="tel:+481298765432" className="hover:text-[#f4a5b0] transition">+48 12 987 65 432</a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

