'use strict';
// selecting elements
const  score0El = document.querySelector('#score--0');
const  score1El = document.getElementById('score--1');
const  diceEl  = document.querySelector('.dice');
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--Hold");
const player1 = document.querySelector("#current--0");
const player2 = document.querySelector("#current--1");

const scores = [0,0]
let currentScore = 0;
let activePlayer = 0;

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling functionality

btnRoll.addEventListener('click',function() {
    // 1.generate random dice img
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    if(dice === 1){
      activePlayer = activePlayer === 0 ? 1 : 0;
      player1.textContent = 0;
    }else{
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;  
    }

    // display
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // check 
})

