import { useState } from 'react';
import '../App.css';

function ServicePage({ onNavigate }) {
  const [productsOpen, setProductsOpen] = useState(false);

  const services = [
    {
      title: 'Format Windows',
      detail: 'Clean reinstall with drivers and essentials setup',
      price: 'Starting at ₹499',
    },
    {
      title: 'Install Drivers',
      detail: 'Complete driver installation for laptops and desktops',
      price: 'Starting at ₹299',
    },
    {
      title: 'Repair Parts',
      detail: 'Replacement of chargers, batteries, keyboards, and more',
      price: 'Starting at ₹799',
    },
    {
      title: 'SSD / RAM Upgrade',
      detail: 'Boost speed and performance with hardware upgrades',
      price: 'Starting at ₹1,199',
    },
    {
      title: 'Software Installation',
      detail: 'Install and configure office, design, and productivity tools',
      price: 'Starting at ₹399',
    },
    {
      title: 'Virus Removal',
      detail: 'Safe malware cleanup and system optimization',
      price: 'Starting at ₹599',
    },
  ];

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
                  <button className="dropdown-item" onClick={() => onNavigate('cctv')}>
                    CCTV
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>

        <div className="hero-content hero-content-small">
          <div>
            <p className="eyebrow">Service Showcase</p>
            <h1>Reliable support for your laptop and desktop needs.</h1>
            <p className="hero-text">
              Choose from fast and affordable services for formatting, repairs, upgrades, and software support.
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
          <p className="eyebrow">Featured Services</p>
          <h2>Popular support options for your device</h2>
        </div>

        <div className="laptop-grid">
          {services.map((service) => (
            <article className="laptop-card" key={service.title}>
              <h3>{service.title}</h3>
              <p className="laptop-tag">{service.detail}</p>
              <div className="laptop-footer">
                <strong>{service.price}</strong>
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

export default ServicePage;
