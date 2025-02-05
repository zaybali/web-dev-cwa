

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
  const userMove = prompt('Enter your move: front or back');

  if (userMove === null) {
    alert('invalid move');
    throw new Error('invalid move');
  }

  if (userMove !== moves[0] && userMove !== moves[1]) {
    alert('invalid move, please enter front or back');
    throw new Error('invalid move, please enter front or back');
  }
  player1.MOVE = userMove;
}

const getRandomIndex = () => {
  return Math.random() > 0.5 ? 1 : 0;
}


const render = () => {
  const comp1Img = document.getElementById('comp1');
  const comp2Img = document.getElementById('comp2');
  const player1Img = document.getElementById('player1');
  console.log(comp1Img, comp2Img, player1Img);

  if (comp1.MOVE === MOVES.FRONT) {
    comp1Img.src = MOVES_SOURCES.FRONT;
  } else {
    comp1Img.src = MOVES_SOURCES.BACK;
  }

  if (comp2.MOVE === MOVES.FRONT) {
    comp2Img.src = MOVES_SOURCES.FRONT;
  } else {
    comp2Img.src = MOVES_SOURCES.BACK;
  }

  if (player1.MOVE === MOVES.FRONT) {
    player1Img.src = MOVES_SOURCES.FRONT;
  } else {
    player1Img.src = MOVES_SOURCES.BACK;
  }
}

const calculateWinner = () => {
  const allMoves = [comp1.MOVE, comp2.MOVE, player1.MOVE];
  const allMovesAreFront = allMoves.every((move) => {
    return move === MOVES.FRONT;
  });
  const allMovesAreBack = allMoves.every((move) => {
    return move === MOVES.BACK;
  });
  if (allMovesAreFront || allMovesAreBack) {
    alert('no one wins');
    return;
  }

  const result = {
    FRONT: [],
    BACK: []
  }

  allMoves.forEach((move, index) => {
    console.log(move, index);
    if (move === MOVES.FRONT) {
      result.FRONT.push(index);
    } else {
      result.BACK.push(index);
    }
  });

  if (result.BACK.length === 1) {
    announceWinner(MOVES.BACK, ['Computer 1', 'Computer 2', 'Player 1'], result.BACK[0])
  } else {
    announceWinner(MOVES.FRONT, ['Computer 1', 'Computer 2', 'Player 1'], result.FRONT[0]);
  }
}

const announceWinner = (move, players, index) => {
  const message = `${players[index]} is the winner with ${move} move`;
  alert(message);
}

const main = () => {
  calculateMoves()
  render()
  setTimeout(() => {
    calculateWinner()
    setTimeout(() => {
      const again = prompt('Play Again?');
      if (again) {
        main();
      }
    }, 500)
  }, 1000)
}

main();