const { smallAlphabetChars, emptyMatrix } = require("./constants");
const { drawLine, printMatrix, getUserInput } = require("./util");

const alphabet = smallAlphabetChars();
const finalMatrix = emptyMatrix();
let solution = [];
const pointsMap = [];
const pointsToConnect = [];

const points = getUserInput();

// extract points and sort in alphabetical order
alphabet.split("").forEach((char) => {
  points.forEach((el, index) => {
    j = el.indexOf(char);
    if (j >= 0) pointsMap.push([char, index, j]);
  });
});

// - Extract all points to be connected
// connect first two points
pointsToConnect.push([pointsMap[0], pointsMap[1]]);

// connect other points if exist
if (pointsMap.length > 2) {
  const lastIndex = pointsMap.length - 1;

  pointsMap.forEach((point, index) => {
    if (index == 0 || index == lastIndex) return;

    const nextPoint = pointsMap[index + 1];
    pointsToConnect.push([point, nextPoint]);
  });
  // conect last and first point
  pointsToConnect.push([pointsMap[lastIndex], pointsMap[0]]);
}

// draw line for each point combination
pointsToConnect.forEach((points) => {
  const x1 = points[0][1];
  const y1 = points[0][2];

  const x2 = points[1][1];
  const y2 = points[1][2];

  solution.push(drawLine(x1, x2, y1, y2));
});

// insert drawed lines into matrix
solution.forEach((line) => {
  line.forEach((point) => {
    let x = point[0];
    let y = point[1];

    finalMatrix[x][y] = "*";
  });
});

printMatrix(finalMatrix);
