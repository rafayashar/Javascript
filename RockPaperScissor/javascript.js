let player = 0;
let computer = 0;
let playerSelection;
let i = 0;

function computerPlay () {
    let guess = Math.floor(Math.random() *3);
    const options = ['Rock', 'Paper', 'Scissor'];

    return options[guess];
}

function game() {
    
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


const buttons = document.querySelectorAll('button');

const div = document.querySelector('div');
const heading = document.createElement('h1');
div.appendChild(heading);

const score = document.createElement('p');
div.appendChild(score);

const result = document.createElement('h1');
div.appendChild(result);

buttons.forEach(button => button.addEventListener('click', (e) => {
   playerSelection =  e.target.textContent.toLowerCase();
   const computerSelection = computerPlay().toLowerCase();
   i++;

   heading.textContent = 'Results';

   playRound(playerSelection, computerSelection);
   game();

   if (player <= 5 && computer <= 5) {
    score.innerText = 'Round: ' + i + '\nPlayer Score: ' + player + '\nComputer Score: ' + computer;
    }

    if (player == 5) {
        result.textContent = 'YOU ARE THE WINNER! :)';
    }
    else if (computer == 5) {
        result.textContent = 'COMPUTER IS THE WINNER :(';
    }


}));


