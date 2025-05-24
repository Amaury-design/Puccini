import Image from 'next/image';

const StorySection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src="https://img.freepik.com/photos-gratuite/ancien-chef-pizzeria-portrait-realiste-du-chef-au-travail-livrant-pizzas-fraiches-i_166373-6607.jpg"
              alt="Histoire de Puccini"
              width={600}
              height={400}
              className="object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-lilita text-custom-grey relative">
                Notre Histoire
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-yellow transform origin-left transition-transform duration-300 hover:scale-x-110" />
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed">
              Depuis 1985, Puccini confectionne d'authentiques pizzas italiennes avec passion et dévouement. Notre aventure a commencé avec un simple rêve : apporter le véritable goût de Naples dans votre quartier.
            </p>
            
            <p className="text-lg leading-relaxed">
              Chaque pizza que nous préparons raconte une histoire de tradition, d'ingrédients de qualité et du savoir-faire de nos maîtres pizzaiolos. Nos fours à bois, importés directement d'Italie, garantissent que chaque pizza atteint l'équilibre parfait entre une croûte croustillante et des garnitures fondantes.
            </p>

            <button className="relative overflow-hidden btn group">
              <span className="relative z-10">En Savoir Plus</span>
              <div className="absolute inset-0 bg-accent-yellow transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection; 