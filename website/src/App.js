import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import PrinterPage from './Pages/PrinterPage';
import AccessoryPage from './Pages/AccessoryPage';
import CctvPage from './Pages/CctvPage';
import DesktopPage from './Pages/DesktopPage';
import LaptopPage from './Pages/LaptopPage';
import ServicePage from './Pages/ServicePage';
import { featuredProductCategories } from './data/featuredProductCategories';
import { FaLaptop, FaTools } from 'react-icons/fa';

import { MdBuild } from "react-icons/md";

const services = [
  {
    title: 'New Laptop Sales',
    icon: <FaLaptop size={32} />,
    description: 'Browse premium laptops for students, business teams, and creators.',
  },
  {
    title: 'Fast Repairs',
    icon: <MdBuild size={32} />,
    description: 'Battery, screen, keyboard, and motherboard repair with quick turnaround.',
  },
  {
    title: 'Upgrade & Maintenance',
    icon: <FaTools size={32} />,
    description: 'Boost performance with SSD upgrades, RAM installation, and cleanup.',
  },
];

const highlights = [
  'Certified technicians with trusted support',
  'Affordable pricing and genuine parts',
  'Same-day diagnostics for many common issues',
];


function HomePage({ onNavigate }) {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="page">
      <header className="hero">
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

        <div className="hero-content">
          <div>
            <p className="eyebrow">Laptop Sales & Services</p>
            <h1>Reliable laptops, fast repairs, and expert support in one place.</h1>
            <p className="hero-text">
              From buying your next laptop to fixing a slow or damaged device, we make tech simple and dependable.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => onNavigate('services')}>
                Book Service
              </button>
              <button className="btn btn-secondary" onClick={() => onNavigate('laptops')}>
                View Laptops
              </button>
            </div>
            <div className="hero-stats">
              <div>
                <strong>500+</strong>
                <span>Happy Customers</span>
              </div>
              <div>
                <strong>4.8/5</strong>
                <span>Star Rating On Google</span>
              </div>
              <div>
                <strong>1 Day</strong>
                <span>Quick Repairs</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <h3>Why choose us?</h3>
            <ul>
              <li>Trusted by students, professionals, and small businesses</li>
              <li>Transparent pricing with no hidden charges</li>
              <li>Premium laptops and genuine accessories</li>
            </ul>
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
      <main>
        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">Our Services</p>
            <h2>Everything you need for your laptop journey</h2>
          </div>

          <div className="card-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="products" className="section section-alt">
          <div className="section-heading">
            <p className="eyebrow">Featured Products</p>
            <h2>Explore our latest tech collection</h2>
          </div>

          <div className="card-grid">
            {featuredProductCategories.map((product) => (
              <article className="service-card" key={product.title}>
                <div className="service-icon">
                  {product.icon}
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">Why We Stand Out</p>
            <h2>Smart tech solutions with personal care</h2>
          </div>

          <div className="feature-list">
            {highlights.map((item) => (
              <div className="feature-item" key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div>
            <p className="eyebrow">Visit or Call</p>
            <h2>Need help choosing or repairing your laptop?</h2>
            <p>Stop by our shop for expert advice and fast service.</p>
          </div>
          <a className="btn btn-primary small-btn" href={`tel:${9427942094}`}>
                  Call to Order
                </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>Maruti Computers</h3>
            <p>Reliable laptop sales, repairs, and service support.</p>
          </div>
          <div>
            <h4>Address</h4>
            <p>G-40, City Arcade, near DSP Bunglow, Jamnagar-361001</p>
            <div className="footer-map">
              <iframe
                title="Maruti Computers location"
                src="https://www.google.com/maps?q=G-40%2C%20City%20Arcade%2C%20near%20DSP%20Bunglow%2C%20Jamnagar-361001&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
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

function App() {
  const [page, setPage] = useState('home');

  let content;

  if (page === 'laptops') {
    content = <LaptopPage onNavigate={setPage} />;
  } else if (page === 'desktops') {
    content = <DesktopPage onNavigate={setPage} />;
  } else if (page === 'accessories') {
    content = <AccessoryPage onNavigate={setPage} />;
  } else if (page === 'cctv') {
    content = <CctvPage onNavigate={setPage} />;
  } else if (page === 'printers') {
    content = <PrinterPage onNavigate={setPage} />;
  } else if (page === 'services') {
    content = <ServicePage onNavigate={setPage} />;
  } else {
    content = <HomePage onNavigate={setPage} />;
  }

  return (
    <>
      {content}
      <Analytics />
    </>
  );
}

export default App;
