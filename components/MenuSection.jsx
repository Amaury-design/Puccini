const MenuSection = () => {
  const menuCategories = {
    pizzas: [
      { name: "Margherita", description: "Tomates fraîches, mozzarella, basilic", price: 12.99, tag: "Classique" },
      { name: "Pepperoni", description: "Pepperoni épicé, mozzarella, sauce tomate", price: 14.99, tag: "Populaire" },
      { name: "Quatre Fromages", description: "Mozzarella, gorgonzola, parmesan, fontina", price: 15.99, tag: "Végétarien" },
      { name: "Diavola", description: "Salami épicé, piments, mozzarella", price: 15.99, tag: "Épicé" },
      { name: "Capricciosa", description: "Jambon, champignons, artichauts, olives", price: 16.99, tag: "Classique" },
      { name: "Prosciutto Roquette", description: "Prosciutto, roquette, copeaux de parmesan", price: 16.99, tag: "Premium" },
      { name: "Marinara", description: "Tomates, ail, origan (sans fromage)", price: 11.99, tag: "Végétalien" },
      { name: "Bufala", description: "Mozzarella de bufflonne, tomates cerises, basilic", price: 17.99, tag: "Premium" },
      { name: "Végétarienne", description: "Légumes variés, mozzarella", price: 14.99, tag: "Végétarien" },
      { name: "Calzone", description: "Pizza pliée avec jambon, champignons, ricotta", price: 15.99, tag: "Spécial" },
      { name: "Napoli", description: "Anchois, câpres, olives", price: 14.99, tag: "Classique" },
      { name: "Funghi", description: "Champignons variés, mozzarella, thym", price: 14.99, tag: "Végétarien" },
    ],
    pasta: [
      { name: "Carbonara", description: "Spaghetti, œufs, pecorino, guanciale", price: 13.99, tag: "Classique" },
      { name: "Bolognaise", description: "Tagliatelles à la sauce riche de viande", price: 14.99, tag: "Populaire" },
      { name: "Arrabbiata", description: "Penne à la sauce tomate épicée", price: 12.99, tag: "Épicé" },
      { name: "Alfredo", description: "Fettuccine à la crème de parmesan", price: 13.99, tag: "Classique" },
    ],
    drinks: {
      soft: [
        { name: "Coca-Cola", price: 2.99 },
        { name: "Sprite", price: 2.99 },
        { name: "San Pellegrino", price: 3.99 },
        { name: "Citronnade Fraîche", price: 3.99 },
      ],
      alcoholic: [
        { name: "Vin Rouge Maison (Verre)", price: 5.99 },
        { name: "Vin Blanc Maison (Verre)", price: 5.99 },
        { name: "Bière Peroni", price: 4.99 },
        { name: "Bière Moretti", price: 4.99 },
      ],
    },
    desserts: [
      { name: "Tiramisu", description: "Dessert italien classique au café", price: 6.99 },
      { name: "Panna Cotta", description: "Crème vanille au coulis de fruits rouges", price: 5.99 },
      { name: "Cannoli", description: "Pâtisserie sicilienne à la ricotta sucrée", price: 5.99 },
      { name: "Gelato", description: "Choix de 3 boules", price: 6.99 },
    ],
  };

  const renderTag = (tag) => {
    const tagColors = {
      Classique: "bg-accent-yellow",
      Populaire: "bg-accent-red",
      Végétarien: "bg-dark-green",
      Épicé: "bg-red-600",
      Premium: "bg-purple-600",
      Végétalien: "bg-green-500",
      Spécial: "bg-blue-600",
    };

    return (
      <span className={`${tagColors[tag]} text-white text-xs px-2 py-1 rounded-full`}>
        {tag}
      </span>
    );
  };

  return (
    <section className="section-padding bg-light-white">
      <div className="container">
        {/* Pizzas */}
        <div className="mb-16">
          <h3 className="text-2xl font-lilita text-accent-red mb-8">Pizzas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuCategories.pizzas.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-medium text-custom-grey">{item.name}</h4>
                    <p className="text-custom-grey/70">{item.description}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-medium">{item.price}€</span>
                    {item.tag && renderTag(item.tag)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pasta */}
        <div className="mb-16">
          <h3 className="text-2xl font-lilita text-accent-red mb-8">Pâtes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuCategories.pasta.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-medium text-custom-grey">{item.name}</h4>
                    <p className="text-custom-grey/70">{item.description}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-medium">{item.price}€</span>
                    {item.tag && renderTag(item.tag)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drinks */}
        <div className="mb-16">
          <h3 className="text-2xl font-lilita text-accent-red mb-8">Boissons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h4 className="text-xl font-medium text-custom-grey mb-4">Boissons Sans Alcool</h4>
              {menuCategories.drinks.soft.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>{item.name}</span>
                  <span className="font-medium">{item.price}€</span>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-xl font-medium text-custom-grey mb-4">Boissons Alcoolisées</h4>
              {menuCategories.drinks.alcoholic.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>{item.name}</span>
                  <span className="font-medium">{item.price}€</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desserts */}
        <div>
          <h3 className="text-2xl font-lilita text-accent-red mb-8">Desserts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuCategories.desserts.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-medium text-custom-grey">{item.name}</h4>
                    <p className="text-custom-grey/70">{item.description}</p>
                  </div>
                  <span className="text-lg font-medium">{item.price}€</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection; 