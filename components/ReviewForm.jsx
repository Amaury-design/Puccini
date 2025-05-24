import { useState } from 'react';
import Button from './Button';
import Toast from './Toast';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    console.log('Review submitted:', formData);
    
    // Show thank you message
    setShowToast(true);
    
    // Reset form
    setFormData({
      name: '',
      rating: 5,
      comment: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Votre nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-red focus:border-accent-red"
            placeholder="Entrez votre nom"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Note
          </label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                className={`text-2xl transition-colors duration-200 ${
                  star <= formData.rating ? 'text-accent-yellow' : 'text-gray-300'
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
            Votre avis
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-red focus:border-accent-red"
            placeholder="Partagez votre expérience..."
          />
        </div>

        <Button type="submit" className="w-full">
          Envoyer mon avis
        </Button>
      </form>

      <Toast
        message="Merci pour votre avis ! Votre retour est précieux pour nous."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default ReviewForm; 