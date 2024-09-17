import React from 'react';
import './Homepagestyle.css';

const Homepage: React.FC = () => {
  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="logo">Pharmacie Panacée</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
        </ul>
      </nav>

      {/* Carousel */}
      <div className="carousel">
        <div className="carousel-slide">
          <h3>Promotion sur les produits naturels</h3>
        </div>
        <div className="carousel-slide">
          <h3>Vaccination gratuite contre la grippe</h3>
        </div>
        <div className="carousel-slide">
          <h3>Livraison à domicile disponible</h3>
        </div>
      </div>
      <section className="content">
        <h1>Bienvenue à la pharmacie Panacée</h1>
        <p>Votre solution santé à Bafoussam.</p>
        <button className="contact-btn">Nous contacter</button>
      </section>
      <footer>
        <p>Pharmacie Panacée ©2024 Créé avec amour</p>
      </footer>
    </div>
  );
};

export default Homepage;
