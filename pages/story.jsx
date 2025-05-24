import Navigation from '../components/Navigation';
import StorySection from '../components/StorySection';
import Footer from '../components/Footer';

export default function Story() {
  return (
    <div>
      <Navigation />
      <main className="pt-20">
        <div className="bg-accent-red py-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-lilita text-white text-center">
              Notre Histoire
            </h1>
          </div>
        </div>
        <StorySection />
      </main>
      <Footer />
    </div>
  );
} 