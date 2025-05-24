import Navigation from '../components/Navigation';
import HeroSlider from '../components/HeroSlider';
import MenuSection from '../components/MenuSection';
import MapSection from '../components/MapSection';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
        <HeroSlider />
        <MenuSection />
        <MapSection />
        <ReviewSection />
      </main>
      <Footer />
    </div>
  );
} 