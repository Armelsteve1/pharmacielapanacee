import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-green-500 to-green-700 text-gray-50">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Bienvenue à la Pharmacie La Panacée
        </h1>
        <p className="text-xl mb-6">
          Votre solution santé située à Bafoussam, à 100 mètres de la
          Préfecture.
        </p>
        <button className="bg-green-800 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-900 transition duration-300">
          Nous contacter
        </button>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 bg-white text-gray-800 rounded-t-3xl shadow-lg"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
              <div className="text-green-700 text-4xl mb-4">
                <span role="img" aria-label="Vaccine">
                  💉
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Vaccination Gratuite
              </h3>
              <p>
                Vaccination contre la grippe et d'autres maladies saisonnières.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
              <div className="text-green-700 text-4xl mb-4">
                <span role="img" aria-label="Delivery">
                  🚚
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Livraison à Domicile
              </h3>
              <p>Recevez vos médicaments sans quitter votre domicile.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
              <div className="text-green-700 text-4xl mb-4">
                <span role="img" aria-label="Natural Products">
                  🌿
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Produits Naturels</h3>
              <p>Découvrez nos promotions sur les produits bio et naturels.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
              <div className="text-green-700 text-4xl mb-4">
                <span role="img" aria-label="Consultation">
                  🩺
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Consultations Rapides
              </h3>
              <p>
                Des conseils personnalisés pour votre santé et votre bien-être.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Nos Rayons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Rayon Médicaments"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-green-700 mb-2">
                  Rayon Médicaments
                </h3>
                <p className="text-gray-600">
                  Large choix de médicaments avec ou sans ordonnance.
                </p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Rayon Beauté"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-green-700 mb-2">
                  Rayon Beauté
                </h3>
                <p className="text-gray-600">
                  Produits cosmétiques et soins pour tous types de peau.
                </p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Rayon Nutrition"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-green-700 mb-2">
                  Rayon Nutrition
                </h3>
                <p className="text-gray-600">
                  Compléments alimentaires et produits diététiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section id="comments" className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Avis Clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="bg-green-100 p-6 rounded-lg shadow-md opacity-0 animate-fadeIn transition-transform duration-300"
              >
                <p className="text-gray-700 italic">
                  "Service impeccable, personnel très accueillant et compétent.
                  Une pharmacie que je recommande vivement !"
                </p>
                <span className="block text-green-700 font-bold text-right mt-4">
                  - Client satisfait
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            À propos
          </h2>
          <p className="text-lg text-center leading-relaxed">
            La Pharmacie La Panacée est votre alliée santé au quotidien. Située
            au cœur de Bafoussam, nous nous engageons à fournir des services de
            qualité, adaptés à vos besoins. Nos équipes expérimentées et notre
            large gamme de produits font de notre pharmacie un lieu de confiance
            pour votre santé et votre bien-être.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
