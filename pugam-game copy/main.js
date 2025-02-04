

/**
 * load page
 * calculate moves
 * render
 * who is the winner
 * announce the winner
 */

const MOVES = {
  FRONT: 'front',
  BACK: 'back',
}

const MOVES_SOURCES = {
  FRONT: './images/front.svg',
  BACK: './images/back.svg',
}

const comp1 = {
  MOVE: MOVES.FRONT
}

const comp2 = {
  MOVE: MOVES.BACK
}

const player1 = {
  MOVE: MOVES.FRONT
}

const calculateMoves = () => {
  const moves = [MOVES.FRONT, MOVES.BACK];

  // computer moves
  comp1.MOVE = moves[getRandomIndex()];
  comp2.MOVE = moves[getRandomIndex()];

  // player move
  player1.MOVE = prompt('Enter your move: front or back');

  if (player1.MOVE === null) {
    alert('invalid move');
    throw new Error('invalid move');
  }
}

const getRandomIndex = () => {
  return Math.random() > 0.5 ? 1 : 0;
}

const main = () => {
  calculateMoves()
}

main();