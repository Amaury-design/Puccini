import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Navigation />
      <main className="pt-20">
        <div className="bg-accent-red py-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-lilita text-white text-center">
              Contactez-nous
            </h1>
          </div>
        </div>

        <section className="section-padding bg-light-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-2xl font-lilita text-custom-grey">Prenez Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-accent-red shrink-0" />
                    <div>
                      <h3 className="font-medium">Adresse</h3>
                      <p className="text-custom-grey/70">2 rue de Colombes<br />92400 Courbevoie, France</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="text-accent-red shrink-0" />
                    <div>
                      <h3 className="font-medium">Téléphone</h3>
                      <p className="text-custom-grey/70">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="text-accent-red shrink-0" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-custom-grey/70">info@puccini.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="text-accent-red shrink-0" />
                    <div>
                      <h3 className="font-medium">Horaires d'Ouverture</h3>
                      <p className="text-custom-grey/70">
                        Lundi - Vendredi : 11h00 - 22h00<br />
                        Samedi - Dimanche : 12h00 - 23h00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-lilita text-custom-grey mb-6">Envoyez-nous un Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-custom-grey mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-custom-grey mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-custom-grey mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn w-full">
                    Envoyer le Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 