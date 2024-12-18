import { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Menu toggled:', !isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary-dark">Logo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              About
            </a>
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Features
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                About
              </a>
              <Button variant="outline" className="flex items-center gap-2 w-full justify-center">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;