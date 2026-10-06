let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

//To showing those values to user which one already the user entered. so that the user will not enter the same value. for that we take a variable..... and store it into an array.

let prevGuess = []
let noOfGuess = 1

let playGame = true

if (playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert("Please enter a valid number")
    }else if (guess < 1){
        alert("Please enter a number more than 1")
    }else if (guess > 100){
        alert("Please enter a number less than 100")
    }else{
        prevGuess.push(guess)

        if(noOfGuess === 11){
            displayGuess(guess)
            displayMsg(`Game Over, Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMsg("You guessed it right")
        endGame()
    }else if (guess < randomNumber){
        displayMsg("Number is TOO low")
    }else if (guess > randomNumber){
        displayMsg("Number is TOO high")
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}   `
    noOfGuess++;
    remaining.innerHTML = `${11 - noOfGuess}`
}

function displayMsg(msg){
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`

}

function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled", '')
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector("#newGame")

    newGameBtn.addEventListener("click", function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        noOfGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - noOfGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);

        playGame = true;
    });
}


