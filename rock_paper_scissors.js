// Rock Paper Scissors Gam,e (as part of Odin Project)

//----------------------------------------------------------------------------------
//CONSTANTS

//Console
const log = console.log
// W-L-D rules
const rules = {
    "rock-scissors": "You Win! Rock beats Scissors",
    "rock-paper":   "You Lose! Paper beats Rock",
    "paper-rock":   "You Win! Paper beats Rock",
    "paper-scissors":"You Lose! Scissors beats Paper",
    "scissors-paper":"You Win! Scissors beats Paper",
    "scissors-rock": "You Lose! Rock beats Scissors",
};
//Win-lose-round counter
let humanWin = 0;
let computerWin = 0;
let drawn = 0 ;
let round = 0; 

//----------------------------------------------------------------------------------
//ELEMENTS

//Buttons
const buttonContainer =  document.querySelector(".buttonsContainer")
const buttons = document.querySelectorAll("button");

//Results box
const resultsBox = document.querySelector(".resultsBox");
//Princ Game recap
const gameRecap = document.querySelector(".gameRecap");

//----------------------------------------------------------------------------------
//FUNCTIONS

//Function to obtain computer choice: random # in [0;3] -> rounded -> choice
function getComputerChoice(){
    //possible choices
    const RPS_opt = ["rock", "paper", "scissors"]
    let val = Math.floor(Math.random() * 3);
    return RPS_opt[val];
}

//log(getComputerChoice());


//Return the results of a round based on the selected human choice
function playRound(human){
    
    const computer = getComputerChoice();

    //Drawn exit
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

//----------------------------------------------------------------------------------
//UI INTERACTION 

//play a round every time a button is clicke
buttons.forEach((button) => {
    button.addEventListener("click", function(e){
        //Round results 
        const resultsDisplay = document.createElement("p");
        resultsDisplay.classList.add("resultsDisplay");
        //Game Over message
        const finalWinner = document.createElement("h1");
        finalWinner.classList.add("finalWinner");

        const text = e.target.textContent.toLowerCase()
        round += 1 ;

        let roundResults = playRound(text);
        
        const introContent = "Game Recap: " ;
        const content = introContent + "User: " +
            humanWin + ", " + "Computer: " + computerWin + ",  " +  "Drawn:" + drawn ;
        
        log(content)
        gameRecap.textContent = content;


        resultsDisplay.textContent = "Round #"+ round + ": " + roundResults;
        resultsBox.appendChild(resultsDisplay);

        //Game Over
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
