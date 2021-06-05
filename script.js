'use strict';

const checkBtn = document.querySelector('.check');
let guessMsg = document.querySelector('.message');
let scoreTxt = document.querySelector('.score');
let guessInput = document.querySelector('.guess');
const againBtn = document.querySelector('.again');
let score = 20;
let highScore = 0;
//Calc functions
let scoreCalcWrong = () => {
    score--;
    scoreTxt.textContent = score;
    if (score === 0) {
        scoreTxt.textContent = "💥 GAME OVER! 💥";
        score = 0;
        checkBtn.setAttribute("disabled", false);
        document.querySelector('body').classList.add('gameover');
    }
}
let scoreCalcRight = () => {
    score++;
    scoreTxt.textContent = score;
}
againBtn.addEventListener('click', () => {
    guessInput.value = '';
    window.location.reload();
});
//Random number
const randomNum = Math.trunc(Math.random() * 20) + 1;

checkBtn.addEventListener('click', () => {
    const guessInput = Number(document.querySelector('.guess').value);

    if (!guessInput) {
        guessMsg.textContent = "⛔ There is no number!";
    }
    else if (guessInput === randomNum) {
        guessMsg.textContent = "🎉 Correct!";
        scoreCalcRight();
        checkBtn.setAttribute("disabled", false);
        document.querySelector('body').classList.add('gamewin');
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guessInput > randomNum) {
        guessMsg.textContent = "⬇ Lower 😋";
        scoreCalcWrong();
    }
    else if (guessInput < randomNum) {
        guessMsg.textContent = "⬆ Higher 🥵";
        scoreCalcWrong();
    }
});