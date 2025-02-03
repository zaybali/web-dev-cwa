const MOVES = {
  FRONT: 'front',
  BACK: 'back',
}

const MOVES_SOURCES = {
  FRONT: './images/front.svg',
  BACK: './images/back.svg',
}

const comp1 = {
  move: MOVES.FRONT
}

const comp2 = {
  move: MOVES.BACK
}

const player1 = {
  move: MOVES.FRONT
}

/**
 * page load
 * Moves Calculate
 * Render
 * Who is the winner
 * Announce the winner
 */

const calculateMoves = () => {
  // Randome Computer moves
  const moves = [MOVES.FRONT, MOVES.BACK];
  comp1.move = moves[getRandomIndex()];
  comp2.move = moves[getRandomIndex()];
  // get user move
  const userMove = prompt('Enter your move: front or back');

  if (userMove === null) {
    alert('invalid move');
    throw new Error('invalid move');
  }

  if (userMove.toLowerCase() !== MOVES.FRONT && userMove.toLowerCase() !== MOVES.BACK) {
    alert('invalid move');
    throw new Error('invalid move');
  }
  player1.move = userMove.toLowerCase();
}

const getRandomIndex = () => {
  return Math.random() > 0.5 ? 1 : 0;
}

const render = () => {
  const comp1Img = document.getElementById('comp1');
  const comp2Img = document.getElementById('comp2');
  const player1Img = document.getElementById('player1');

  // For Comp1
  if (comp1.move === MOVES.FRONT) {
    comp1Img.src = MOVES_SOURCES.FRONT;
  } else {
    comp1Img.src = MOVES_SOURCES.BACK;
  }

  // For Comp2
  if (comp2.move === MOVES.FRONT) {
    comp2Img.src = MOVES_SOURCES.FRONT;
  } else {
    comp2Img.src = MOVES_SOURCES.BACK;
  }

  // For Player1
  if (player1.move === MOVES.FRONT) {
    player1Img.src = MOVES_SOURCES.FRONT;
  } else {
    player1Img.src = MOVES_SOURCES.BACK;
  }

}

const calculateWinner = () => {

}

const main = () => {
  calculateMoves();
  render();
}

main();