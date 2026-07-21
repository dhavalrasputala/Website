import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import Footer from './components/Footer';
import RamSvg from './components/Ramsvg';
import PrinterPage from './Pages/PrinterPage';
import AccessoryPage from './Pages/AccessoryPage';
import CctvPage from './Pages/CctvPage';
import DesktopPage from './Pages/DesktopPage';
import LaptopPage from './Pages/LaptopPage';
import ServicePage from './Pages/ServicePage';
import { Testimonials } from './data/testimonials';
import { featuredProductCategories } from './data/featuredProductCategories';
import { FaLaptop, FaTools } from 'react-icons/fa';
import { MdBuild } from "react-icons/md";

const services = [
  {
    title: 'New Laptop Sales',
    icon: <FaLaptop size={28} />,
    description: 'Browse premium laptops for students, business teams, and creators.',
  },
  {
    title: 'Fast Repairs',
    icon: <MdBuild size={28} />,
    description: 'Battery, screen, keyboard, and motherboard repair with quick turnaround.',
  },
  {
    title: 'Upgrade & Maintenance',
    icon: <FaTools size={28} />,
    description: 'Boost performance with SSD upgrades, RAM installation, and cleanup.',
  },
];

const highlights = [
  'Certified technicians with trusted support',
  'Affordable pricing and genuine parts',
  'Same-day diagnostics for many common issues',
];

function HomePage({ onNavigate }) {
  const loopedTestimonials = [...Testimonials, ...Testimonials];

  return (
    <div className="page">
      <header className="hero">
        <Navbar onNavigate={onNavigate} current="home" />

        <div className="hero-content">
          <div>
            <p className="eyebrow"><RamSvg />Laptop Sales & Services</p>
            <div className="typewriter-container">
              <span className="typewriter-text line1">Premium tech - Fast fixes - Expert care.</span>
              <span className="typewriter-text line2">Buy. Repair - Upgrade - Done.</span>
              <span className="typewriter-text line3">Reliable laptops - rapid repairs.</span>
              <span className="typewriter-text line4">Your one-stop tech repair hub.</span>
            </div>
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
                <strong>700+</strong>
                <span>Happy Customers</span>
              </div>
              <div>
                <strong>4.9/5</strong>
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
              <li><RamSvg /> Trusted by students, professionals, and small businesses</li>
              <li><RamSvg /> Transparent pricing with no hidden charges</li>
              <li><RamSvg /> Premium laptops and genuine accessories</li>
            </ul>
          </div>
        </div>
      </header>

      <Ticker />

      <main>
        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow"><RamSvg />Our Services</p>
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
            <p className="eyebrow"><RamSvg />Featured Products</p>
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

        <section id="testimonials" className="section section-alt">
          <div className="section-heading">
            <p className="eyebrow"><RamSvg />Testimonials</p>
            <h2>What our customers say</h2>
          </div>

          <div className="testimonial-viewport" aria-label="Customer testimonials slider">
            <div className="testimonial-track">
              {loopedTestimonials.map((testimonial, index) => (
                <article className="testimonial-card" key={`${testimonial.name}-${index}`}>
                  <p className="testimonial-quote">“{testimonial.quote}”</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow"><RamSvg />Why We Stand Out</p>
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
            <p className="eyebrow"><RamSvg />Visit or Call</p>
            <h2>Need help choosing or repairing your laptop?</h2>
            <p>Stop by our shop for expert advice and fast service.</p>
          </div>
          <a className="btn btn-primary small-btn" href={`tel:${9427942094}`}>
            Call to Order
          </a>
        </section>
      </main>

      <Footer showMap />
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