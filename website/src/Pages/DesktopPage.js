import { useState } from 'react';
import '../App.css';
import { desktops } from '../data/DesktopCategories';
import Placeholder from '../images/laptopbag.jpg';

function DesktopPage({ onNavigate }) {
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
                  <button className="dropdown-item" onClick={() => onNavigate('cctv')}>
                    CCTV
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
            <p className="eyebrow">Desktop Showcase</p>
            <h1>Powerful desktops built for work, study, and entertainment.</h1>
            <p className="hero-text">
              Choose from compact office systems and high-performance gaming towers.
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
          <p className="eyebrow">Featured Desktops</p>
          <h2>Reliable systems for every task</h2>
        </div>

        <div className="laptop-grid">
          {desktops.map((desktop) => (
            <article className="laptop-card" key={desktop.name}>
              <img
                className="product-image"
                src={desktop.image || Placeholder}
                alt={desktop.name}
                onError={(event) => {
                  event.target.src = Placeholder;
                }}
              />
              <h3>{desktop.name}</h3>
              <p className="laptop-tag">Performance you can depend on</p>
              <ul>
                <li>{desktop.processor}</li>
                <li>{desktop.ram}</li>
                <li>{desktop.storage}</li>
              </ul>
              <div className="laptop-footer">
                <strong>{desktop.price}</strong>
                <a className="btn btn-primary small-btn" href={`tel:${phoneNumber}`}>
                  Call to Order
                </a>
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

export default DesktopPage;
