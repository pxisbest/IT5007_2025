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