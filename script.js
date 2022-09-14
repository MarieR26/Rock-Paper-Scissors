'use strict';

const startBtn = document.querySelector('#start-playing');
const startGame = document.querySelector('.start-game');
const displayWinner = document.querySelector('.starting-position');
const resetbtn = document.querySelector('#reset');
const winner = document.querySelector('#display-winner');
const btns = document.querySelectorAll('.btns');
const rockBtn = document.querySelector('#btn-1');
const paperBtn = document.querySelector('#btn-2');
const scissorsBtn = document.querySelector('#btn-3');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const choose = document.querySelector('.choose');
const chosenMove = document.querySelector('#img--0');
const computerMove = document.querySelector('#img--1');
const scores = document.querySelector('.scores');
let playerScore = document.querySelector('#player');
let computerScore = document.querySelector('#computer');

let playerCount = 0;
let computerCount = 0;
let count = 0;

function startingPositions() {
  scores.classList.add('hidden');
  startGame.classList.remove('hidden');
  displayWinner.classList.add('hidden');
  player0El.classList.add('hidden');
  player1El.classList.add('hidden');
  choose.classList.add('hidden');
}

startingPositions();

startBtn.addEventListener('click', function () {
  player0El.classList.remove('hidden');
  choose.classList.remove('hidden');
  //   now we should display user's chosen move:
  selectMove();
});

function selectMove() {
  //   we need to take all the button that user can choose and put the for loop for each of them:

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      //   scores.classList.remove('hidden');
      player0El.classList.add('hidden');
      player1El.classList.remove('hidden');
      choose.classList.add('hidden');
      startGame.classList.add('hidden');
      // for each click the coordinated png of the move will shou up:
      chosenMove.src = `img--${i}.png`;
      //   we should display randomed move of computer on every click:
      let randomMove = Math.trunc(Math.random() * 3);
      computerMove.src = `img--${randomMove}.png`;
      if (i === randomMove) {
        displayWinner.classList.remove('hidden');
        winner.textContent = 'It is a draw... try again';
        reset.classList.remove('hidden');
        computer.textContent = `Computer Score: ${computerCount}`;
        player.textContent = `Your Score: ${playerCount}`;
      } else if (
        (i === 2 && randomMove === 1) ||
        (i === 0 && randomMove === 2) ||
        (i === 1 && randomMove === 0)
      ) {
        displayWinner.classList.remove('hidden');
        winner.textContent = 'You Won the round!!!';
        reset.classList.remove('hidden');
      } else {
        displayWinner.classList.remove('hidden');
        winner.textContent = 'You Lost the round :(';
        reset.classList.remove('hidden');
      }
    });
  }
}

reset.addEventListener('click', function () {
  // we need to reset the game when it ends:
  startingPositions();
});
