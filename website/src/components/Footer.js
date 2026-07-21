function Footer({ showMap = false }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Maruti Computers</h3>
          <p>Reliable laptop sales, repairs, and service support.</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>G-40, City Arcade, near DSP Bunglow, Jamnagar-361001</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Phone: +91 94279 42094</p>
          <p>Email: rasputla@yahoo.co.in</p>
        </div>
      </div>

      {showMap && (
        <>
          <h3 className="centertext">LOCATE US AT:</h3>
          <div className="footer-map">
            <iframe
              title="Maruti Computers location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d474.3605236543493!2d70.06932578620903!3d22.4723673480934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576abcc1edca97%3A0x7fda9f11e65b3e04!2sMaruti%20computer%2Ccomputer-laptop%20shop%2C%20computer%20peripherals%20laptop%20accessories%2Ccomputer%2C%20laptop%20dell%20hp%20lenovo%20repair%2Cjamnagar!5e0!3m2!1sen!2sus!4v1783150967688!5m2!1sen!2sus"
              width="800"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </>
      )}
    </footer>
  );
}

export default Footer;
