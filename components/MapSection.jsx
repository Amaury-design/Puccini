import { useEffect } from 'react';

const MapSection = () => {
  useEffect(() => {
    // Charger l'API Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const restaurantLocation = { lat: 48.8566, lng: 2.3522 }; // Coordonnées de Paris (à ajuster)
    const map = new google.maps.Map(document.getElementById('map'), {
      center: restaurantLocation,
      zoom: 15,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });

    new google.maps.Marker({
      position: restaurantLocation,
      map,
      title: 'Puccini Pizzeria',
      animation: google.maps.Animation.DROP
    });
  };

  return (
    <section className="section-padding bg-light-white">
      <div className="container">
        <h2 className="text-3xl font-lilita text-custom-grey text-center mb-8">
          Notre Restaurant
        </h2>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.1234567890123!2d2.2545!3d48.9234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3e4b3b3b3b%3A0x1234567890abcdef!2s2%20Rue%20de%20Colombes%2C%2092400%20Courbevoie!5e0!3m2!1sfr!2sfr!4v1234567890!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection; 