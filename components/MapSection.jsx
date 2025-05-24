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
    <section className="py-16 bg-light-white">
      <div className="container">
        <h2 className="text-3xl font-lilita text-custom-grey text-center mb-8">
          Notre Restaurant
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-custom-grey mb-4">Adresse</h3>
              <p className="text-custom-grey/70 mb-2">15 rue Jules Lefevres</p>
              <p className="text-custom-grey/70 mb-4">75001 Paris, France</p>
              
              <h3 className="text-xl font-medium text-custom-grey mb-4">Horaires d'ouverture</h3>
              <div className="space-y-2">
                <p className="text-custom-grey/70">Lundi - Vendredi: 11h30 - 22h30</p>
                <p className="text-custom-grey/70">Samedi - Dimanche: 11h30 - 23h30</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div id="map" className="w-full h-[400px] rounded-lg shadow-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection; 