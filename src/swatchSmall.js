import React from 'react';
import { Link } from 'react-router-dom';
import colors from './colors';

const SwatchSmall = props => {
  const hexColor = "#".concat(colors[props.color]);
  const url = "/detailView/" + props.color;
  return (
    <Link to={url}>
      <div className="swatchSmallContainer">
        <div className="swatchSmall" style={{backgroundColor: hexColor}} />
        <span className="swatchSmallLabel">{hexColor}</span>
      </div>
    </Link>
  );
}

export default SwatchSmall;