import React from 'react';
import { Link } from 'react-router-dom';

const SwatchMedium = props => {
  const { colors, color } = props;
  const hexColor = colors[color];
  const hexCode = "#".concat(hexColor);
  const url = "/detailView/" + hexColor;
  return (
    <Link to={url}>
      <div className="swatchMediumContainer">
        <div className="swatchMedium" style={{backgroundColor: hexCode}} />
        <span className="swatchMediumLabel">{hexCode}</span>
      </div>
    </Link>
  );
}

export default SwatchMedium;