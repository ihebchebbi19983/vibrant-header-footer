import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#471818] text-white py-10 px-16 text-[1.1rem] font-['WomanFontBold']">
      {/* Newsletter Section */}
      <div className="mb-7">
        <h3 className="text-[1.25rem] font-['WomanFontBold'] mb-3.5">NEWSLETTER</h3>
        <p className="mb-5.5 leading-relaxed">
          Inscrivez-vous pour recevoir par e-mail des mises à jour <br />
          sur les dernières collections, campagnes et vidéos de Fiori.
        </p>
        <br></br>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Email"
            className="w-80 mr-3.5 px-3 py-3 bg-white/20 border border-red-500 rounded
                     text-white placeholder-white/70 outline-none backdrop-blur-sm
                     shadow-md transition-all duration-300
                     focus:border-[#ff5e5e] focus:shadow-[#ff5e5e]/50 focus:shadow-lg
                     font-['WomanFontBold']"
          />
          <button className="text-white text-[1.3rem]">
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>

      <div className="text-right">
        <p className="flex items-center justify-end my-2.5 font-['WomanFontBold']">
          <MapPin className="mr-3.5 text-[#ff5e5e] w-7 h-7" />
          Lac 1 juste à côté de carré italien les berges du lac, Tunis, Tunisie
        </p>
        <p className="flex items-center justify-end my-2.5 font-['WomanFontBold']">
          <MapPin className="mr-3.5 text-[#ff5e5e] w-7 h-7" />
          Tunisia mall en face Zara et Zayn
        </p>
      </div>

      <div className="border-t border-white my-7"></div>

      <div className="flex justify-between items-center">
        <div className="text-[0.95rem] font-['WomanFontBold']">
          © 2024 FioriForYou - Tous droits réservés
        </div>
        <div className="space-x-6">
          <a href="#" className="text-white hover:text-[#ff5e5e] transition-colors text-[1.25rem]">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-[#ff5e5e] transition-colors text-[1.25rem]">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white hover:text-[#ff5e5e] transition-colors text-[1.25rem]">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="#" className="text-white hover:text-[#ff5e5e] transition-colors text-[1.25rem]">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
