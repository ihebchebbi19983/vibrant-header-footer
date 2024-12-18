import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="absolute w-full z-20 text-center top-[160px] px-4 font-['WomanFontBold']">
        <div className={`
          lg:flex lg:justify-center lg:gap-14
          ${isOpen ? 'block glass-effect py-6 lg:py-0' : 'hidden'}
          lg:block
        `}>
          <div className="flex flex-col lg:flex-row lg:gap-14 gap-6 items-center">
            <a href="#" className="nav-link text-[#700100] text-[23px] hover:text-red-400 transition-colors">
              Le monde Fiori
            </a>
            <a href="#" className="nav-link text-[#700100] text-[23px] hover:text-red-400 transition-colors">
              L'univers Cadeaux
            </a>
            <a href="#" className="nav-link text-[#700100] text-[23px] hover:text-red-400 transition-colors">
              Le prêt à porter
            </a>
            <a href="#" className="nav-link text-[#700100] text-[23px] hover:text-red-400 transition-colors">
              Accessoires
            </a>
            <a href="#" className="nav-link text-[#700100] text-[23px] hover:text-red-400 transition-colors">
              Sur mesure
            </a>
            <a href="#" className="nav-link text-[#700100] text-[23px] hover:text-red-400 transition-colors">
              Outlet
            </a>
          </div>
        </div>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden" onClick={toggleMenu} />
        )}
      </div>
    </>
  );
};

export default MainNavbar;
