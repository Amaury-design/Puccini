import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './Button';
import ContactModal from './ContactModal';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOrderClick = () => {
    setIsContactModalOpen(true);
  };

  const slides = [
    {
      image: 'https://img.freepik.com/photos-gratuite/pizza-mixte-divers-ingredients_140725-3790.jpg',
      title: 'Bienvenue chez Puccini',
      subtitle: 'Une Pizza Italienne Authentique à Chaque Bouchée',
    },
    {
      image: 'https://img.freepik.com/vecteurs-libre/arriere-plan-dessine-main_23-2150822452.jpg',
      title: 'Fait Main avec Amour',
      subtitle: 'Selon les Recettes Traditionnelles Italiennes',
    },
    {
      image: 'https://img.freepik.com/photos-gratuite/vue-laterale-pizza-au-poivre-hache-dans-ustensiles-cuisine-bord_176474-3183.jpg',
      title: 'Ingrédients Frais',
      subtitle: 'Une Qualité que Vous Pouvez Goûter',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative h-screen w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                quality={100}
                sizes="100vw"
                className="object-cover w-full"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-4xl font-bold md:text-6xl font-lilita mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <Button onClick={handleOrderClick}>
                  Commander Maintenant
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default HeroSlider; 