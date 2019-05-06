const baseColorsRgb = [
  [255, 0, 0],
  [255, 165, 0],
  [255, 255, 0],
  [0, 128, 0],
  [0, 0, 255],
  [128, 0, 128],
  [131, 92, 59],
  [128, 128, 128]
];

// minimum to satisfy requirement: 13 gradations * 8 base colors = 104 total
const gradations = 13;

const toHex = decimal => ('0' + decimal.toString(16)).slice(-2);

let colors = baseColorsRgb.map(function(current, index, array) {

  let next = index === baseColorsRgb.length - 1 ? array[0] : array[index + 1];
  let diff = [];
  for (let i = 0; i < 3; i++) {
    diff.push( (next[i] - current[i]) / gradations );
  }
  let hexColors = [];
  for (let gradation = 0; gradation < gradations; gradation++) {
    let hexColor = 
      toHex(parseInt(current[0]) + parseInt(diff[0]) * gradation) +
      toHex(parseInt(current[1]) + parseInt(diff[1]) * gradation) + 
      toHex(parseInt(current[2]) + parseInt(diff[2]) * gradation);
    hexColors.push(hexColor);
  }
  return hexColors;

}).flat();

export default colors;