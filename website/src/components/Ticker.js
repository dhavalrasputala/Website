import { Fragment } from 'react';

const ITEMS = ['Laptop Sales', 'Fast Repair', 'Accessories', 'CCTV Installation', 'Printers'];

function Ticker() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="ticker" aria-label="Maruti Computers services ticker">
      <div className="ticker-track">
        {loop.map((item, index) => (
          <Fragment key={`${item}-${index}`}>
            <span className="ticker-item">{item}</span>
            <span className="ticker-item dot">•</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
