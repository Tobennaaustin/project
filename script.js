'use strict';
const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const player = document.querySelector('.player');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const dice = document.querySelector('.score');
const player1 = document.querySelector('.score');
const player2 = document.querySelector('.score');
const btnRoll = document.querySelector('.btn--roll');
const diceEl = document.querySelector('.dice');
const player1Turn = document.querySelector('.player--0');
const player2Turn = document.querySelector('.player--1');

score1El.textContent = 0;

score2El.textContent = 0;

diceEl.classList.add('hidden');

let scores = [0, 0];

let currentScore1 = 0;

let activePlayer = 0;

let playing = true;

const switchPlayer = function () {
  currentScore1 = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore1;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1Turn.classList.toggle('player--active');
  player2Turn.classList.toggle('player--active');
};


const startOver = function() {
    playing = true
    scores = [0, 0]
    activePlayer = 0;
    currentScore1 = 0;
    score1El.textContent = 0;
    score2El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
};
startOver()

btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;
    if (diceRoll !== 1) {
      currentScore1 += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore1;
    } else {
      switchPlayer();
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore1;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (document.getElementById(`score--${activePlayer}`).textContent >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner')
    } else {
      switchPlayer();
    }
  }
});

document.querySelector('.btn--new').addEventListener('click',startOver);

/*
adding difficulty
hard = 100
normal = 50
easy = 25
const difficulty = [100, 50, 25]
const hard = difficulty[0]
const normal = difficulty[1]
const easy = difficulty[2]
*/
