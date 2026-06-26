import { useState } from 'react';
import '../App.css';
import Placeholder from '../images/laptopbag.jpg';
import { cctvItems } from '../data/CCTVCategories';

function CctvPage({ onNavigate }) {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="page">
      <header className="hero hero-small">
        <nav className="navbar">
          <div className="brand">
            <img className="logo-image" src="/logo.png" alt="Maruti Computers logo" />
            <span>Maruti Computers</span>
          </div>
          <div className="nav-links">
            <button className="nav-btn" onClick={() => onNavigate('home')}>Home</button>
            <button className="nav-btn" onClick={() => onNavigate('services')}>Services</button>
            <div className="dropdown">
              <button className="nav-btn dropdown-toggle" onClick={() => setProductsOpen(!productsOpen)}>
                Products ▾
              </button>
              {productsOpen && (
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={() => onNavigate('laptops')}>
                    Laptops
                  </button>
                  <button className="dropdown-item" onClick={() => onNavigate('accessories')}>
                    Accessories
                  </button>
                  <button className="dropdown-item" onClick={() => onNavigate('desktops')}>
                    Desktops
                  </button>
                  <button className="dropdown-item" onClick={() => onNavigate('printers')}>
                    Printers
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>

        <div className="hero-content hero-content-small">
          <div>
            <p className="eyebrow">CCTV Showcase</p>
            <h1>Secure your space with modern CCTV solutions.</h1>
            <p className="hero-text">
              Discover dependable cameras and recording systems for homes, shops, and offices.
            </p>
          </div>
        </div>
      </header>

      <div className="ticker" aria-label="Maruti Computers services ticker">
        <div className="ticker-track">
          <span className="ticker-item">Laptop Sales</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Fast Repair</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Accessories</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">CCTV Installation</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Printers</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Laptop Sales</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Fast Repair</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Accessories</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">CCTV Installation</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Printers</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Laptop Sales</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Fast Repair</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Accessories</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">CCTV Installation</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Printers</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Laptop Sales</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Fast Repair</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Accessories</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">CCTV Installation</span>
          <span className="ticker-item">•</span>
          <span className="ticker-item">Printers</span>
        </div>
      </div>

      <main className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured CCTV Products</p>
          <h2>Reliable surveillance for every need</h2>
        </div>

        <div className="laptop-grid">
          {cctvItems.map((item) => (
            <article className="laptop-card" key={item.name}>
              <img
                className="product-image"
                src={item.img || Placeholder}
                alt={item.name}
                onError={(event) => {
                  event.target.src = Placeholder;
                }}
              />
              <h3>{item.name}</h3>
              <p className="laptop-tag">{item.detail}</p>
              <div className="laptop-footer">
                <strong>{item.price}</strong>
                <a>Call to Order</a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>Maruti Computers</h3>
            <p>Reliable laptop sales, repairs, and service support.</p>
          </div>
          <div>
            <h4>Address</h4>
            <p>G-40,City Arcade,near DSP Bunglow,Jamnagar-361001</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Phone: +91 94279  42094</p>
            <p>Email: rasputla@yahoo.co.in</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CctvPage;
