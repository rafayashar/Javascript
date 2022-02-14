let player = 0;
let computer = 0;

function computerPlay () {
    let guess = Math.floor(Math.random() *3);
    const options = ['Rock', 'Paper', 'Scissor'];

    return options[guess];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissor') {
            player = player + 1;
            return ('You win! ' + playerSelection + ' beats ' + computerSelection);
        }
        else if (computerSelection === 'paper') {
            computer = computer + 1;
            return ('You lose! ' + computerSelection + ' beats ' + playerSelection);
        }
        else if (computerSelection === 'rock') {
            return ('It\'s a draw!');   
        }
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            player = player + 1;
            return ('You win! ' + playerSelection + ' beats ' + computerSelection);
        }
        else if (computerSelection === 'scissor') {
            computer = computer + 1;
            return ('You lose! ' + computerSelection + ' beats ' + playerSelection);
        }
        else if (computerSelection === 'paper') {
            return ('It\'s a draw!');   
        }
    }

    else if (playerSelection === 'scissor') {
        if (computerSelection === 'paper') {
            player = player + 1;
            return ('You win! ' + playerSelection + ' beats ' + computerSelection);
        }
        else if (computerSelection === 'rock') {
            computer = computer + 1;
            return ('You lose! ' + computerSelection + ' beats ' + playerSelection);
        }
        else if (computerSelection === 'scissor') {
            return ('It\'s a draw!');   
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your play').toLowerCase();
        const computerSelection = computerPlay().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(player);
    console.log(computer);

    if (player > computer) {
        console.log('You are the winner! :)');
    }
    else if (computer > player) {
        console.log('Computer is the winner :(');
    }
    else if (player === computer) {
        console.log('It\'s a DRAW!');
    }
}

game();
