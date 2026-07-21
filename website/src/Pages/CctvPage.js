import '../App.css';
import RamSvg from '../components/Ramsvg';
import Placeholder from '../images/laptopbag.jpg';
import { cctvItems } from '../data/CCTVCategories';
import Navbar from '../components/Navbar';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';

function CctvPage({ onNavigate }) {
  return (
    <div className="page">
      <header className="hero hero-small">
        <Navbar onNavigate={onNavigate} current="cctv" />

        <div className="hero-content hero-content-small">
          <div>
            <p className="eyebrow"><RamSvg />CCTV Showcase</p>
            <h1>Secure your space with modern CCTV solutions.</h1>
            <p className="hero-text">
              Discover dependable cameras and recording systems for homes, shops, and offices.
            </p>
          </div>
        </div>
      </header>

      <Ticker />

      <main className="section">
        <div className="section-heading">
          <p className="eyebrow"><RamSvg />Featured CCTV Products</p>
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

export default CctvPage;
