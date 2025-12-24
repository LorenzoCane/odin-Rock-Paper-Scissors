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


//Possible Choice 
let RPS_opt = ["rock", "paper", "scissors"]

//Function to obtain computer choice: random # in [0;3] -> rounded -> choice
function getComputerChoice(){
    let val = Math.floor(Math.random() * 3);
    return RPS_opt[val];
}

//log(getComputerChoice());

//Human Choice:
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
function playRound(human, computer){
    let roundResult;

    log("--------------------------------------------------");
    log("Computer Choice:" + computer);
    log("Human Choice:" + human); 
    //Draw
    if (human === computer){
        roundResult = "Match drawn!";
        log(roundResult);

        return roundResult;
    }
    const key = `${human}-${computer}`;
    roundResult = rules[key];
    log(roundResult);

    return roundResult;
}

//Game
function playFullGame(){
    let humanWin = 0;
    let computerWin = 0;
    let drawn = 0 ;

    for (let i = 0; i < 5; i++) {
        let humanchoice = getHumanChoice();
        let computerChoice = getComputerChoice(); 

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

playFullGame();
