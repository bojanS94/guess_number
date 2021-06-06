'use strict';
//Variables
const checkBtn = document.querySelector('.check');
let titleTxt = document.querySelector('.titleText');
let guessMsg = document.querySelector('.message');
let scoreTxt = document.querySelector('.score');
let guessInput = document.querySelector('.guess');
let numberReveal = document.querySelector('.numberReveal');
let hiddenNum = document.querySelector('.number');
const againBtn = document.querySelector('.again');
let score = 20;
let highScore = 0;
//Display message function
const displayMessage = (message) => {
    guessMsg.textContent = message;
}
//Calc functions
let scoreCalcWrong = () => {
    score--;
    scoreTxt.textContent = score;
    if (score === 0) {
        titleTxt.textContent = "💥 GAME OVER! 💥";
        numberReveal.textContent = "The humber was:";
        hiddenNum.textContent = randomNum;
        score = 0;
        checkBtn.setAttribute("disabled", true);
        guessInput.setAttribute("disabled", true);
        guessInput.value = '';
        document.querySelector('body').classList.add('gameover');
    }
}
let scoreCalcRight = () => {
    score++;
    scoreTxt.textContent = score;
    displayMessage('🎉 Correct!');
    checkBtn.setAttribute("disabled", true);
    document.querySelector('body').classList.add('gamewin');
    titleTxt.textContent = "👍 GOOD JOB!";
    hiddenNum.textContent = randomNum;
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}
againBtn.addEventListener('click', () => {
    guessInput.value = '';
    window.location.reload();
});
//Random number
const randomNum = Math.trunc(Math.random() * 20) + 1;
//Check secret number button
checkBtn.addEventListener('click', () => {
    const guessInput = Number(document.querySelector('.guess').value);
    if (!guessInput) {
        displayMessage('⛔ There is no number!');
    }
    else if (guessInput === randomNum) {
        scoreCalcRight();
    }
    else if (guessInput > randomNum) {
        scoreCalcWrong();
        displayMessage('⬇ Lower 😋');
    }
    else if (guessInput < randomNum) {
        scoreCalcWrong();
        displayMessage('⬆ Higher 🥵');
    }
});