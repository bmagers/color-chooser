import React from 'react';
import { Link } from 'react-router-dom';
import colors from './colors';

const SwatchMedium = props => {
  const hexColor = "#".concat(colors[props.color]);
  const url = "/detailView/" + props.color;
  return (
    <Link to={url}>
      <div className="swatchMediumContainer">
        <div className="swatchMedium" style={{backgroundColor: hexColor}} />
        <span className="swatchMediumLabel">{hexColor}</span>
      </div>
    </Link>
  );
}

export default SwatchMedium;