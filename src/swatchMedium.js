import React from 'react';
import { Link } from 'react-router-dom';

const SwatchMedium = () => {
  return (
    <Link to="/detailView/46">
      <div className="swatchMediumContainer">
        <div className="swatchMedium" />
        <span className="swatchMediumLabel">#cffff1</span>
      </div>
    </Link>
  );
}

export default SwatchMedium;