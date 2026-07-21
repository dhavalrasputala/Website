import { useState } from 'react';

const PRODUCT_LINKS = [
  { key: 'laptops', label: 'Laptops' },
  { key: 'accessories', label: 'Accessories' },
  { key: 'desktops', label: 'Desktops' },
  { key: 'cctv', label: 'CCTV' },
  { key: 'printers', label: 'Printers' },
];

function Navbar({ onNavigate, current }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const go = (page) => {
    onNavigate(page);
    setMenuOpen(false);
    setProductsOpen(false);
  };

  const products = PRODUCT_LINKS.filter((item) => item.key !== current);

  return (
    <nav className="navbar">
      <div className="brand" onClick={() => go('home')}>
        <img className="logo-image" src="/logo.png" alt="Maruti Computers logo" />
        <span>Maruti Computers</span>
      </div>

      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="nav-toggle-bars">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {menuOpen && <div className="nav-scrim" onClick={() => setMenuOpen(false)} />}

      <div className={`nav-links${menuOpen ? ' open' : ''}`}>
        {current !== 'home' && (
          <button className="nav-btn" onClick={() => go('home')}>Home</button>
        )}
        {current !== 'services' && (
          <button className="nav-btn" onClick={() => go('services')}>Services</button>
        )}
        <div className="dropdown">
          <button
            className="nav-btn dropdown-toggle"
            aria-expanded={productsOpen}
            onClick={() => setProductsOpen(!productsOpen)}
          >
            Products <span className="caret">▾</span>
          </button>
          {productsOpen && (
            <div className="dropdown-menu">
              {products.map((item) => (
                <button className="dropdown-item" key={item.key} onClick={() => go(item.key)}>
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
