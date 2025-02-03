let randomNumber = Math.floor(Math.random() * 100) + 1;
const guessedValue = document.querySelector(".guessField");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
guessSubmit.addEventListener('click', checkguess);