import React from 'react';
import SwatchLarge from './swatchLarge';
import SwatchSmall from './swatchSmall';
import colors from './colors';

const DetailView = props => {
  const { hexColor } = props.match.params;
  const color = colors.indexOf(hexColor);
  console.log(document.referrer);

  const smallSwatchesArray = [];
  for (let i = parseInt(color) - 2; i < parseInt(color) + 3; i++) {
    if (i < 0) {
      smallSwatchesArray.push(colors.length + i);
    } else if (i > colors.length - 1) {
      smallSwatchesArray.push(i - colors.length)
    } else {
      smallSwatchesArray.push(i);
    }
  }
  const smallSwatches = smallSwatchesArray.map((color, key) => <SwatchSmall color={color} key={key} />);

  const clearClick = event => {
    event.preventDefault();
    window.history.go(-1);
  }

  return (
    <div className="content">
      <SwatchLarge color={color} />
      <div className="swatchSmallGrid">
        {smallSwatches}
      </div>
      <div id="clearButton">
        <button id="clear" onClick={clearClick}>Clear</button>
      </div>
    </div>
  );

}

export default DetailView;