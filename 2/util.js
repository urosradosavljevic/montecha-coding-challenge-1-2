const prompt = require("prompt-sync")();

// Bresenham's algorithm
const drawLine = (x1, x2, y1, y2) => {
  let line = [];
  // calculate differences
  var dx = Math.abs(x2 - x1);
  var dy = Math.abs(y2 - y1);
  // find direction
  var incX = x1 < x2 ? 1 : -1;
  var incY = y1 < y2 ? 1 : -1;
  // find line slope
  var error = dx - dy;

  while (true) {
    // add first point
    line.push([x1, y1]);

    // end loop when reach final point
    if (x1 === x2 && y1 === y2) break;

    // distance from point on line
    var pointPos = 2 * error;

    // increment x and reduce error
    // step is too far from line
    if (pointPos > -dy) {
      error -= dy;
      x1 += incX;
    }
    // increment y and reduce error
    // step is too far from line
    if (pointPos < dx) {
      error += dx;
      y1 += incY;
    }
  }
  return line;
};

const printMatrix = (matrix) => {
  matrix.forEach((line) => {
    let lineStr = "";
    line.forEach((point) => {
      lineStr += point;
    });
    console.log(lineStr);
  });
};

// get user input until first \n occurs
const getUserInput = () => {
  let points = [];
  let input = prompt("");
  while (input.length > 0) {
    // consider only first 26 points
    points.push(input.slice(0, 26).split(""));
    input = prompt("");
  }
  return points;
};

module.exports = {
  drawLine,
  printMatrix,
  getUserInput,
};
