import '../App.css';
import RamSvg from '../components/Ramsvg';
import Placeholder from '../images/laptopbag.jpg';
import { accessories } from '../data/AccessoriesCategories';
import Navbar from '../components/Navbar';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';

function AccessoryPage({ onNavigate }) {
  return (
    <div className="page">
      <header className="hero hero-small">
        <Navbar onNavigate={onNavigate} current="accessories" />

        <div className="hero-content hero-content-small">
          <div>
            <p className="eyebrow"><RamSvg />Accessories Showcase</p>
            <h1>Upgrade your setup with reliable accessories.</h1>
            <p className="hero-text">
              From input devices to charging gear, we have accessories that improve everyday productivity.
            </p>
          </div>
        </div>
      </header>

      <Ticker />

      <main className="section">
        <div className="section-heading">
          <p className="eyebrow"><RamSvg />Featured Accessories</p>
          <h2>Best accessories for your workspace</h2>
        </div>

        <div className="laptop-grid">
          {accessories.map((item) => (
            <article className="laptop-card" key={item.name}>
              <img
                className="product-image"
                src={item.image || item.img || Placeholder}
                alt={item.name}
                onError={(event) => {
                  event.target.src = Placeholder;
                }}
              />
              <h3>{item.name}</h3>
              <p className="laptop-tag">{item.detail}</p>
              <div className="laptop-footer">
                <strong>{item.price}</strong>
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

export default AccessoryPage;
