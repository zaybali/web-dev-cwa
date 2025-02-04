

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
  comp1.MOVE = moves[getRandomIndex()];
}

const getRandomIndex = () => {
  return Math.random() > 0.5 ? 1 : 0;
}

const main = () => {

}

main();