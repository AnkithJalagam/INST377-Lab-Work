// Configuration
const squareCount = 200;
const width = 10;
const displayWidth = 4;
const lTetromino = [
  [1, width + 1, width * 2 + 1, 2],
  [width, width + 1, width + 2, width * 2 + 2],
  [1, width + 1, width * 2 + 1, width * 2],
  [width, width * 2, width * 2 + 1, width * 2 + 2]
];
const zTetromino = [
  [0, width, width + 1, width * 2 + 1],
  [width + 1, width + 2, width * 2, width * 2 + 1],
  [0, width, width + 1, width * 2 + 1],
  [width + 1, width + 2, width * 2, width * 2 + 1]
];
const tTetromino = [
  [1, width, width + 1, width + 2],
  [1, width + 1, width + 2, width * 2 + 1],
  [width, width + 1, width + 2, width * 2 + 1],
  [1, width, width + 1, width * 2 + 1]
];
const oTetromino = [
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1]
];
const iTetromino = [
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width, width + 1, width + 2, width + 3],
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width, width + 1, width + 2, width + 3]
];

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const tetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];
  const upNextTetrominos = [
    [1, displayWidth + 1, displayWidth * 2 + 1, 2], /* lTetromino */
    [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], /* zTetromino */
    [1, displayWidth, displayWidth + 1, displayWidth + 2], /* tTetromino */
    [0, 1, displayWidth, displayWidth + 1], /* oTetromino */
    [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] /* iTetromino */
  ];
  const grid = document.querySelector('.grid');
  const miniGrid = document.querySelector('.mini-grid');
  const startBtn = document.querySelector("#start-button");
  const difficulty = 500;
  let squares = Array.from(buildUIGrids(grid, squareCount, squareCount - 10));
  let miniSquares = Array.from(buildUIGrids(miniGrid, 20, 0));
  let currentPosition = 4;
  let currentRotation = 0;
  let nextRandom = 0;
  let random = 0;
  let current = tetrominoes[0][0];
  let timerID = null;
  let displayIndex = 0;
  let score = 0;

  function draw() {
    // Loop through new position and add class
    current.forEach((i) => {
      squares[currentPosition + i].classList.add("tetromino");
    });
  }
