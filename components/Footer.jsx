import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-custom-grey text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Social Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-yellow transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-yellow transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-yellow transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/menu" className="text-gray-300 hover:text-accent-yellow transition-colors">
              Menu
            </Link>
            <Link href="/story" className="text-gray-300 hover:text-accent-yellow transition-colors">
              Notre Histoire
            </Link>
            <Link href="/reviews" className="text-gray-300 hover:text-accent-yellow transition-colors">
              Avis
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-accent-yellow transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right text-sm text-gray-300">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">Adresse</h3>
              <p>2 rue de Colombes</p>
              <p>92700 Colombes, France</p>
            </div>
            <p>Tél: (123) 456-7890</p>
            <p>Email: info@puccini.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-300">
          <p>© {currentYear} Puccini. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 