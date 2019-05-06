import React from 'react';
import { Link } from 'react-router-dom';
import colors from './colors';

const SwatchSmall = props => {
  const hexColor = colors[props.color];
  const hexCode = "#".concat(hexColor);
  const url = "/detailView/" + hexColor;
  return (
    <Link to={url}>
      <div className="swatchSmallContainer">
        <div className="swatchSmall" style={{backgroundColor: hexCode}} />
        <span className="swatchSmallLabel">{hexCode}</span>
      </div>
    </Link>
  );
}

export default SwatchSmall;