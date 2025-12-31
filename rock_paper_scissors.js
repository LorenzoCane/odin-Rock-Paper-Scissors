// Rock Paper Scissors Gam,e (as part of Odin Project)

//Const
const log = console.log

const rules = {
    "rock-scissors": "You Win! Rock beats Scissors",
    "rock-paper":   "You Lose! Paper beats Rock",
    "paper-rock":   "You Win! Paper beats Rock",
    "paper-scissors":"You Lose! Scissors beats Paper",
    "scissors-paper":"You Win! Scissors beats Paper",
    "scissors-rock": "You Lose! Rock beats Scissors",
};

let humanWin = 0;
let computerWin = 0;
let drawn = 0 ;
let round = 0; 


//Buttons
const buttonContainer =  document.querySelector(".buttonsContainer")
const buttons = document.querySelectorAll("button");
//Results box
const resultsBox = document.querySelector(".resultsBox");
const gameRecap = document.querySelector(".gameRecap");


function buttonSelection(button){
}

//Possible Choice 
let RPS_opt = ["rock", "paper", "scissors"]

//Function to obtain computer choice: random # in [0;3] -> rounded -> choice
function getComputerChoice(){
    let val = Math.floor(Math.random() * 3);
    return RPS_opt[val];
}

//log(getComputerChoice());


//Human Choice: staart the round when one of the button is clicked
function getHumanChoice(){
    

    let choice = prompt("Enter 'Rock', 'Paper' or 'Scissors'");
    choice = choice.toLowerCase();

    if(!(RPS_opt.includes(choice))){
        alert("Invalid choice, try again!")
        return getHumanChoice();
    }

    return choice;
}


//log(getHumanChoice())

//Round
function playRound(human){
    let roundResult = "";
    
    const computer = getComputerChoice();
    //log("--------------------------------------------------");
    //log("Computer Choice:" + computer);
    //log("Human Choice:" + human); 
    //Draw
    if (human === computer){
        roundResults = "Match drawn!";
        log(roundResults);
        drawn +=1 ;
        return roundResults;
    }
    const key = `${human}-${computer}`;
    roundResults = rules[key];
    log(roundResults);

    if(roundResults.startsWith("You Win")){
            humanWin += 1;
    }else{
            computerWin += 1;
    }

    return roundResults;
}


//play a round
buttons.forEach((button) => {
    button.addEventListener("click", function(e){
        const finalWinner = document.createElement("h1");
        finalWinner.classList.add("finalWinner");

        round += 1 ;
        const text = e.target.textContent.toLowerCase()
        let roundResults = playRound(text);
        
        const introContent = "Game Recap: " ;
        const content = introContent + "User: " +
            humanWin + ", " + "Computer: " + computerWin + ",  " +  "Drawn:" + drawn ;
        log(content)
        gameRecap.textContent = content;

        const resultsDisplay = document.createElement("p");
        resultsDisplay.classList.add("resultsDisplay");
        resultsDisplay.textContent = "Round #"+ round + ": " + roundResults;
        resultsBox.appendChild(resultsDisplay);

        if(humanWin === 5){
            buttonContainer.replaceChildren()
            finalWinner.textContent = ("You win the game! \nCould you do it again? Refresh page!")
            resultsBox.appendChild(finalWinner);
        }
        if(computerWin ===5){
            buttonContainer.replaceChildren()
            finalWinner.textContent = ("You lose the game! \nRefresh page and try again!")
            resultsBox.appendChild(finalWinner);
        }        

    })

});

//Game
function playFullGame(){


    for (let i = 0; i < 5; i++) {
        const humanchoice = getHumanChoice();
        const computerChoice = getComputerChoice(); 

        log("--------------------------------------------------");
        log("Round #" + (i+1))
        roundResults = playRound(humanchoice, computerChoice);
        if (roundResults === "Match drawn!"){
            drawn += 1 ;
        
        }else if(roundResults.startsWith("You Win")){
            humanWin += 1;
        }else{
            computerWin += 1;
        }
    }   

    log("*********************************************************");
    log ("FINAL SCORE:") 
    log("User: " + humanWin + ", " + "Computer: " + computerWin + ",  " +  "Drawn:" + drawn)
        
    return 0;
}

