import React from 'react';
import colors from './colors';

const SwatchLarge = props => {
  const hexCode = "#".concat(colors[props.color]);
  return (
    <div className="swatchLargeContainer">
      <div className="swatchLarge" style={{backgroundColor: hexCode}} />
      <span className="swatchLargeLabel">{hexCode}</span>
    </div>
  );
}

export default SwatchLarge;