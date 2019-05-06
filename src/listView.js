import React from 'react';
import { Link } from 'react-router-dom';
import SwatchMedium from './swatchMedium';

const ListView = props => {

  let { color = 0 } = props.match.params;
  let { colors } = props;
  let pagination = [];
  for (let i = 0; i <= Math.ceil(colors.length / 12); i++) {
    let url="../listView/" + i * 12;
    let pageClass = (parseInt(color) === parseInt(i * 12)) ? "pageNumber selected" : "pageNumber";
    pagination.push(<Link className={pageClass} to={url} key={i + 1}>&nbsp;{i + 1}&nbsp;</Link>);
  }

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
  const mediumSwatches = mediumSwatchesArray.map((swatchColor, key) => <SwatchMedium colors={colors} color={swatchColor} key={key} parent={color} />);

  return (
    <div className="content">
      <div className="swatchMediumGrid">
        {mediumSwatches}
      </div>
      <div className="pagination">
        {pagination}
      </div>
    </div>
  );
}

export default ListView;