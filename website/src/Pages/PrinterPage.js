import '../App.css';
import laptopPlaceholder from '../images/laptopbag.jpg';
import { printers } from '../data/PrinterCategories';
import Navbar from '../components/Navbar';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';
import RamSvg from '../components/Ramsvg';

function PrinterPage({ onNavigate }) {
  return (
    <div className="page">
      <header className="hero hero-small">
        <Navbar onNavigate={onNavigate} current="printers" />

        <div className="hero-content hero-content-small">
          <div>
            <p className="eyebrow">Printers Showcase</p>
            <h1>Upgrade your setup with reliable printers.</h1>
            <p className="hero-text">
              From All-in-One printers to Laser printers, we have a range of printers that improve everyday productivity.
            </p>
          </div>
        </div>
      </header>

      <Ticker />

      <main className="section">
        <div className="section-heading">
          <p className="eyebrow"><RamSvg />Featured Printers</p>
          <h2>Best printers for your workspace</h2>
        </div>

        <div className="laptop-grid">
          {printers.map((item) => (
            <article className="laptop-card" key={item.name}>
              <img
                className="product-image"
                src={item.image || laptopPlaceholder}
                alt={item.name}
                onError={(event) => {
                  event.target.src = laptopPlaceholder;
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

export default PrinterPage;
