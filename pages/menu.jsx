import Navigation from '../components/Navigation';
import MenuSection from '../components/MenuSection';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Menu() {
  return (
    <div className="min-h-screen bg-light-white">
      <Navigation />
      <main>
        <div className="relative h-[200px] bg-accent-red">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src="/images/pizza-banner.jpg"
            alt="Pizza Puccini"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container h-full flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-lilita text-white text-center">
              Notre Menu
            </h1>
          </div>
        </div>
        <MenuSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
} 