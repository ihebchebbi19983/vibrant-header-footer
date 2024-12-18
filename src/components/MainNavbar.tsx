import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="absolute w-full z-20 text-center lg:top-[160px] top-[120px] px-4 font-['WomanFontBold']">
        <button
          onClick={toggleMenu}
          className="lg:hidden absolute right-4 top-2 text-[#700100] z-30"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`
          lg:flex lg:justify-center lg:gap-14
          ${isOpen ? 'block glass-effect py-6 lg:py-0 mt-12 lg:mt-0' : 'hidden'}
          lg:block
        `}>
          <div className="flex flex-col lg:flex-row lg:gap-14 gap-6 items-center">
            <a href="#" className="nav-link text-[#700100] text-[18px] lg:text-[23px] hover:text-red-400 transition-colors">
              Le monde Fiori
            </a>
            <a href="#" className="nav-link text-[#700100] text-[18px] lg:text-[23px] hover:text-red-400 transition-colors">
              L'univers Cadeaux
            </a>
            <a href="#" className="nav-link text-[#700100] text-[18px] lg:text-[23px] hover:text-red-400 transition-colors">
              Le prêt à porter
            </a>
            <a href="#" className="nav-link text-[#700100] text-[18px] lg:text-[23px] hover:text-red-400 transition-colors">
              Accessoires
            </a>
            <a href="#" className="nav-link text-[#700100] text-[18px] lg:text-[23px] hover:text-red-400 transition-colors">
              Sur mesure
            </a>
            <a href="#" className="nav-link text-[#700100] text-[18px] lg:text-[23px] hover:text-red-400 transition-colors">
              Outlet
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;