const ReviewSection = () => {
  const reviews = [
    {
      name: "Marco Rossi",
      review: "La meilleure pizza que j'ai mangée en dehors de Naples ! La croûte est parfaitement croustillante et les ingrédients sont toujours frais.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      review: "Les plats de pâtes de Puccini sont incroyables. La carbonara est absolument authentique et le service est toujours amical.",
      rating: 5,
    },
    {
      name: "David Chen",
      review: "Super ambiance et encore meilleure nourriture. Leurs pizzas au feu de bois sont à essayer absolument. Je reviendrai certainement !",
      rating: 5,
    }
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section className="section-padding bg-light-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-lilita text-custom-grey mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-lg text-custom-grey/80">
            Ne nous croyez pas sur parole - écoutez nos clients satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              <div className="border-l-4 border-accent-red pl-4 mb-4">
                <p className="text-custom-grey/80 italic">{review.review}</p>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="text-accent-yellow text-xl mb-2">
                  {renderStars(review.rating)}
                </div>
                <p className="font-medium text-custom-grey">{review.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn">
            Laisser un Avis
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection; 