import Navigation from '../components/Navigation';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';

export default function Reviews() {
  return (
    <div>
      <Navigation />
      <main className="pt-20">
        <div className="bg-accent-red py-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-lilita text-white text-center">
              Avis Clients
            </h1>
          </div>
        </div>
        <ReviewSection />
      </main>
      <Footer />
    </div>
  );
} 