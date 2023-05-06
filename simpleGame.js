function computerPlay() {
    const possibleChoices = ['rock', 'scissors', 'paper'];
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

let gamesWonByPlayer = 0;
let gamesWonByComputer = 0;
function playSingleRound(playerSelection, computerSelection) {
    let roundResultMessage = '';
    let round = 1;

    while (round > 0) {
        playerSelection = prompt('Make your choice! Type Rock, Paper or Scissors.').toLowerCase().trim();
        computerSelection = computerPlay();

        if (playerSelection === computerSelection) {
            roundResultMessage = 'Game-draw! Play again: Type Rock, Paper or Scissors.';
        } else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                roundResultMessage = 'You Lose the Round! Paper beats Rock';
                gamesWonByComputer++;
            } else {
                roundResultMessage = `You won the Round! ${playerSelection} beats ${computerSelection}!`;
                gamesWonByPlayer++;
                console.log(`You won the Round! ${playerSelection} beats ${computerSelection}!`);
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                roundResultMessage = 'You Lose the Round! Scissors beats Paper';
                gamesWonByComputer++;
            } else {
                roundResultMessage = `You won the Round! ${playerSelection} beats ${computerSelection}!`;
                gamesWonByPlayer++;
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                roundResultMessage = 'You Lose the Round! Rock beats Scissors';
                gamesWonByComputer++
            } else {
                roundResultMessage = `You won the Round! ${playerSelection} beats ${computerSelection}!`;
                gamesWonByPlayer++;
            }
        } else {
            console.log('Invalid choice.Make another choice...');
            continue;
        }

        round--;
    }
    return roundResultMessage;
}

function playFiveRoundsGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(playSingleRound());
    }

    if (gamesWonByPlayer > gamesWonByComputer) {
        console.log('Congratulations! You won the game!');
    } else if (gamesWonByPlayer === gamesWonByComputer) {
        console.log('No winner. Game-draw!');
    } else {
        console.log('Sorry you lost! Computer won the game.');
    }
}

playFiveRoundsGame();
