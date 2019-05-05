import React from 'react';
import SwatchMedium from './swatchMedium';
import colors from './colors';

const ListView = props => {
  const { color } = props.match.params;

  const mediumSwatchesArray = [];
  for (let i = parseInt(color) - 6; i < parseInt(color) + 6; i++) {
    if (i < 0) {
      mediumSwatchesArray.push(colors.length + i);
    } else if (i > colors.length - 1) {
      mediumSwatchesArray.push(i - colors.length)
    } else {
      mediumSwatchesArray.push(i);
    }
  }
  const mediumSwatches = mediumSwatchesArray.map((color, key) => <SwatchMedium color={color} key={key} />);

  return (
    <div className="content">
      <div className="swatchMediumGrid">
        {mediumSwatches}
      </div>
    </div>
  );
}

export default ListView;