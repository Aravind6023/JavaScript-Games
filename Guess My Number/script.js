'use strict';

//Variables
let score = 20;
let highScore = 0;

//Generate Random Number
var guessNumber = Math.trunc(Math.random() * 20) + 1;

//Selectors
document.querySelector('.number').textContent = guessNumber;
let scoreValue = document.querySelector('.score');
let totalScore = document.querySelector('.highscore');

//function expression
let showMessage = function(message)
{
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function()
{
    const getNumber = Number(document.querySelector('.guess').value);
    if(!getNumber)
    {
        showMessage("No Number, Please Enter a number");
    } else if (guessNumber == getNumber)
    {
        showMessage("Congrats!! Correct Answer");
        document.body.style.backgroundColor = "blue";
        document.querySelector('.guess').value = 0;
        if(score > highScore)
        {
            highScore = score;
            totalScore.textContent = highScore;
        }
    }
    else
    {
        score--;
        (guessNumber < getNumber) ? showMessage("Guess Lower Number") : showMessage("Guess Higher Number");
        (score < 0) ? showMessage("You lost the game!") : scoreValue.textContent = score ;
    }
});

document.querySelector('.again').addEventListener('click', function()
{
    score = 20;
    guessNumber = Math.trunc(Math.random() * 20) + 1;
    scoreValue.textContent = score;
    showMessage("Start guessing...");
    document.body.style.backgroundColor = "#222";
});