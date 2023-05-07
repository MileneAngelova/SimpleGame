function computerChoice() {
    const possibleChoices = ['rock', 'scissors', 'paper'];
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

let roundCounter = 1;

function playerChoice() {
    let playerDecision = prompt(`Round ${roundCounter}\nMake your choice! Type Rock, Paper or Scissors.`);
    try {
        return playerDecision.trim().toLowerCase();
    } catch (error) {
        console.log('Sorry to see you leave!');
    }
}

let gamesWonByPlayer = 0;
let gamesWonByComputer = 0;

function playSingleRound(playerSelection, computerSelection) {
    let roundResultMessage = '';
    let round = 1;

    while (round > 0) {
        computerSelection = computerChoice();
        playerSelection = playerChoice();

        if (playerSelection === null || playerSelection === undefined) {
            break;
        } else if (playerSelection === computerSelection) {
            roundResultMessage = 'Game-draw! Play again: Type Rock, Paper or Scissors.';
            roundCounter++;
        } else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                roundResultMessage = 'You Lose the Round! Paper beats Rock';
                gamesWonByComputer++;
                roundCounter++;
            } else {
                roundResultMessage = `You won the Round! ${playerSelection} beats ${computerSelection}!`;
                gamesWonByPlayer++;
                roundCounter++;
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                roundResultMessage = 'You Lose the Round! Scissors beats Paper';
                gamesWonByComputer++;
                roundCounter++;
            } else {
                roundResultMessage = `You won the Round! ${playerSelection} beats ${computerSelection}!`;
                gamesWonByPlayer++;
                roundCounter++;
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                roundResultMessage = 'You Lose the Round! Rock beats Scissors';
                gamesWonByComputer++;
                roundCounter++;
            } else {
                roundResultMessage = `You won the Round! ${playerSelection} beats ${computerSelection}!`;
                gamesWonByPlayer++;
                roundCounter++;
            }
        } else {
            console.log('Invalid choice.Make another choice...');
            continue;
        }

        round--;
    }
    return roundResultMessage;
}

function printResult() {
    console.log('Your score: ' + gamesWonByPlayer);
    console.log('Computer score: ' + gamesWonByComputer);
    if (gamesWonByPlayer > gamesWonByComputer) {
        console.log('Congratulations! You won the game!');
    } else if (gamesWonByPlayer === gamesWonByComputer) {
        console.log('No winner. Game-draw!');
    } else {
        console.log('Sorry you lost! Computer won the game.');
    }
}

function playFiveRoundsGame() {
    alert(`Welcome!\nThis game has five rounds. Click \"OK"\ to continue`);

    for (let i = 1; i <= 5; i++) {
        // if (playSingleRound() === '') {
        //     break;
        // }
        console.log(playSingleRound());
    }
    printResult();
}

playFiveRoundsGame();
