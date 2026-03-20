import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 mt-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-500 text-sm">
            © 2024 Kittiwin Intaml. Created with React & Tailwind.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
