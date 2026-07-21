import '../App.css';
import RamSvg from '../components/Ramsvg';
import laptopPlaceholder from '../images/laptopbag.jpg';
import { laptops } from '../data/LaptopCategories';
import Navbar from '../components/Navbar';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';

function LaptopPage({ onNavigate }) {
  return (
    <div className="page">
      <header className="hero hero-small">
        <Navbar onNavigate={onNavigate} current="laptops" />

        <div className="hero-content hero-content-small">
          <div>
            <p className="eyebrow"><RamSvg />Laptop Showcase</p>
            <h1>Discover the best laptops for work, study, and gaming.</h1>
            <p className="hero-text">
              Browse our curated collection with trusted performance and value for every budget.
            </p>
          </div>
        </div>
      </header>

      <Ticker />

      <main className="section">
        <div className="section-heading">
          <p className="eyebrow"><RamSvg />Featured Laptops</p>
          <h2>Handpicked options for every need</h2>
        </div>

        <div className="laptop-grid">
          {laptops.map((laptop) => (
            <article className="laptop-card" key={laptop.name}>
              <img
                className="product-image"
                src={laptop.image || laptopPlaceholder}
                alt={laptop.name}
                onError={(event) => {
                  event.target.src = laptopPlaceholder;
                }}
              />
              <h3>{laptop.name}</h3>
              <p className="laptop-tag">Premium everyday performance</p>
              <ul>
                <li><RamSvg />{laptop.processor}</li>
                <li><RamSvg />{laptop.ram}</li>
                <li><RamSvg />{laptop.storage}</li>
              </ul>
              <div className="laptop-footer">
                <strong>{laptop.price}</strong>
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

export default LaptopPage;
