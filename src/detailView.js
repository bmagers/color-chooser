import React from 'react';
import SwatchLarge from './swatchLarge';
import SwatchSmall from './swatchSmall';

const DetailView = () => {
  return (
    <div className="content">
      <SwatchLarge />
      <div className="swatchSmallGrid">
        <SwatchSmall />
        <SwatchSmall />
        <SwatchSmall />
        <SwatchSmall />
        <SwatchSmall />
      </div>
    </div>
  );
}

export default DetailView;