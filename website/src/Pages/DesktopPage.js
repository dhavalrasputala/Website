import '../App.css';
import { desktops } from '../data/DesktopCategories';
import Placeholder from '../images/laptopbag.jpg';
import Navbar from '../components/Navbar';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';
import RamSvg from '../components/Ramsvg';

function DesktopPage({ onNavigate }) {
  return (
    <div className="page">
      <header className="hero hero-small">
        <Navbar onNavigate={onNavigate} current="desktops" />

        <div className="hero-content hero-content-small">
          <div>
            <p className="eyebrow"><RamSvg />Desktop Showcase</p>
            <h1>Powerful desktops built for work, study, and entertainment.</h1>
            <p className="hero-text">
              Choose from compact office systems and high-performance gaming towers.
            </p>
          </div>
        </div>
      </header>

      <Ticker />

      <main className="section">
        <div className="section-heading">
          <p className="eyebrow"><RamSvg />Featured Desktops</p>
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
                <li><RamSvg /> {desktop.processor}</li>
                <li><RamSvg /> {desktop.ram}</li>
                <li><RamSvg /> {desktop.storage}</li>
              </ul>
              <div className="laptop-footer">
                <strong>{desktop.price}</strong>
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

export default DesktopPage;