let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const statusDisplay = document.getElementById('status');

function cellClicked(cellIndex) {
  if (!gameActive || gameState[cellIndex] !== '') return;

  gameState[cellIndex] = currentPlayer;
  document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;

  checkWin();
  checkDraw();

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (
      gameState[a] !== '' &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      gameActive = false;
      statusDisplay.innerText = `${gameState[a]} wins!`;
    }
  }
}

function checkDraw() {
  if (!gameState.includes('') && gameActive) {
    gameActive = false;
    statusDisplay.innerText = 'It\'s a draw!';
  }
}

function resetGame() {
  gameActive = true;
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  statusDisplay.innerText = '';
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}
