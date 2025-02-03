
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guessedValue = document.querySelector(".guessField");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
guessSubmit.addEventListener('click', checkguess);
function checkguess()
{   let guessedValueinNumber = Number(guessedValue.value);

    if (guessedValueinNumber == randomNumber)
    {
        lastResult.textContent="Correct Guess!";
        lastResult.style.backgroundColor = 'green';
    }
    else
    {
        lastResult.textContent="Incorrect!";
        lastResult.style.backgroundColor = 'red';
        if(guessedValueinNumber < randomNumber)
        {
            lowOrHi.textContent = "Guess higher!";
        }
        else
        {
            lowOrHi.textContent = "Guess Lower!";
        }
    }
}