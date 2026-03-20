import { Menu, Moon, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass border-b border-white/5 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Kittiwin.dev
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Skills</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Projects</a>
              <button className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
                <Moon size={18} />
              </button>
              <button className="bg-[#4f3cdc] hover:bg-[#5a4fcf] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(79,60,220,0.3)]">
                Connect
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/5 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Skills</a>
            <a href="#experience" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Projects</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
