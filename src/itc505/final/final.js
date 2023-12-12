const gridSize = 5;
let squares = [];
let moves = 0;
const targetMoves = 20;

function createGrid() {
  const gridContainer = document.getElementById('gridContainer');
  const infoContainer = document.getElementById('infoContainer');

  
  const targetMovesText = document.createElement('p');
  targetMovesText.textContent = `Target Moves: ${targetMoves}`;
  const currentMovesText = document.createElement('p');
  currentMovesText.textContent = `Moves: ${moves}`;

  const newGameButton = document.createElement('button');
  newGameButton.textContent = 'New Game';
  newGameButton.addEventListener('click', resetGame);

  infoContainer.appendChild(targetMovesText);
  infoContainer.appendChild(currentMovesText);
  infoContainer.appendChild(newGameButton);

  for (let i = 0; i < gridSize; i++) {
    squares[i] = [];
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('click', () => {
        if (moves < targetMoves) {
          toggleSquare(i, j);
          moves++;
          updateMovesDisplay(currentMovesText);
          checkWin();
        }
      });
      squares[i][j] = false;
      gridContainer.appendChild(square);
    }
  }
  
  randomizeBoard();
}

function toggleSquare(row, col) {
  squares[row][col] = !squares[row][col];
  const square = document.getElementsByClassName('square')[row * gridSize + col];
  square.classList.toggle('is-off');
  
  toggleNeighbor(row - 1, col);
  toggleNeighbor(row + 1, col);
  toggleNeighbor(row, col - 1);
  toggleNeighbor(row, col + 1);
}

function toggleNeighbor(row, col) {
  if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
    squares[row][col] = !squares[row][col];
    const square = document.getElementsByClassName('square')[row * gridSize + col];
    square.classList.toggle('is-off');
  }
}

function randomizeBoard() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;
    if (Math.random() < 0.5) {
      toggleSquare(row, col);
    }
  }
}

function checkWin() {
  if (moves === targetMoves) {
    window.alert('Game Over! You reached the target moves.');
  }
}

function updateMovesDisplay(currentMovesText) {
  currentMovesText.textContent = `Moves: ${moves}`;
}

function resetGame() {
  moves = 0;
  updateMovesDisplay(document.querySelector('#infoContainer p:nth-child(2)')); // Selects Moves text
  randomizeBoard();
}


createGrid();
