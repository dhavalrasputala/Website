import '../App.css';
import Navbar from '../components/Navbar';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';
import RamSvg from '../components/Ramsvg';

function ServicePage({ onNavigate }) {
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
        <Navbar onNavigate={onNavigate} current="services" />

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

      <Ticker />

      <main className="section">
        <div className="section-heading">
          <p className="eyebrow"><RamSvg />Featured Services</p>
          <h2>Popular support options for your device</h2>
        </div>

        <div className="laptop-grid">
          {services.map((service) => (
            <article className="laptop-card" key={service.title}>
              <h3>{service.title}</h3>
              <p className="laptop-tag">{service.detail}</p>
              <div className="laptop-footer">
                <strong>{service.price}</strong>
                <a className="btn btn-primary small-btn" href={`tel:${9427942094}`}>
                  Call to Order
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer showMap/>
    </div>
  );
}

export default ServicePage;
