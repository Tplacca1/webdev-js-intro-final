"use strict";

const submitGuessBtn = document.getElementById("submit-guess");
const restartGameBtn = document.getElementById("restart-game");
const guessInput = document.getElementById("guess-input");
const guessMessageEl = document.getElementById("guess-message");
const currentGuessEl = document.getElementById("current-guess");
const computerGuessEl = document.getElementById("computer-guess");
const guessHistoryEl = document.getElementById("guess-history");

let computerNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 3;
let guessHistory = [];

submitGuessBtn.addEventListener("click", function () {
    const userGuess = parseInt(guessInput.value);
    attempts++;
    guessHistory.push(userGuess);

    currentGuessEl.innerText = userGuess;
    guessHistoryEl.innerText = guessHistory.join(", ");

    if (userGuess === computerNumber) {
        guessMessageEl.innerText = "Congratulations! You guessed the number!";
        endGame();
    } else if (attempts >= maxAttempts) {
        guessMessageEl.innerText = `Sorry! You've used all your attempts. The number was ${computerNumber}.`;
        computerGuessEl.innerText = computerNumber;
        endGame();
    } else if (userGuess > computerNumber) {
        guessMessageEl.innerText = "Too high! Try again.";
    } else {
        guessMessageEl.innerText = "Too low! Try again.";
    }

    guessInput.value = "";
});

function endGame() {
    guessInput.disabled = true;
    submitGuessBtn.disabled = true;
    restartGameBtn.disabled = false;
    computerGuessEl.innerText = computerNumber;

}

restartGameBtn.addEventListener("click", function () {
    resetGame();
});

function resetGame() {
    computerNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessHistory = [];

    guessMessageEl.innerText = "";
    currentGuessEl.innerText = "";
    computerGuessEl.innerText = "";
    guessHistoryEl.innerText = "";

    guessInput.disabled = false;
    submitGuessBtn.disabled = false;
    restartGameBtn.disabled = true;
}

