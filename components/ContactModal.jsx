import { useEffect } from 'react';
import Button from './Button';

const ContactModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePhoneClick = () => {
    window.location.href = 'tel:+33612345678'; // Replace with your actual phone number
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with fade animation */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal with slide-up animation */}
      <div 
        className={`relative bg-white rounded-lg p-8 max-w-md w-full mx-4 transform transition-all duration-500 ease-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-accent-red mb-6 font-lilita">
          Contactez-nous
        </h2>

        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="bg-accent-red/10 p-3 rounded-full">
              <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Téléphone</p>
              <p className="font-semibold">06 12 34 56 78</p>
            </div>
            <Button onClick={handlePhoneClick} className="ml-auto">
              Appeler
            </Button>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="bg-accent-yellow/10 p-3 rounded-full">
              <svg className="w-6 h-6 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Adresse</p>
              <p className="font-semibold">2 rue de Colombes<br />92400 Courbevoie, France</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start space-x-4">
            <div className="bg-accent-red/10 p-3 rounded-full">
              <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Horaires</p>
              <p className="font-semibold">
                Lundi - Vendredi: 11h30 - 22h30<br />
                Samedi - Dimanche: 11h30 - 23h30
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 