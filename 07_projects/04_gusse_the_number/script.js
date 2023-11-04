const randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultPara")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valide number")
    }else if(guess < 1){
        alert("Please enter a number greater than 0")
    }else if(guess > 100){
        alert("Please enter a number less than 101")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayClear(guess)
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayClear(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is tooooo low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is tooooo high`)
    }
}

function displayClear(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}`
    numGuess++;
    remaining.innerHTML
}

function displayMessage(message){

}