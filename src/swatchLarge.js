import React from 'react';
import colors from './colors';

const SwatchLarge = props => {
  const hexColor = "#".concat(colors[props.color]);
  return (
    <div className="swatchLargeContainer">
      <div className="swatchLarge" style={{backgroundColor: hexColor}} />
      <span className="swatchLargeLabel">{hexColor}</span>
    </div>
  );
}

export default SwatchLarge;