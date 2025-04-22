const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

function RPS(player){
    const randomNum = Math.random();
    let computerMove = '';

    if (randomNum >= 0 && randomNum < 1/3) {
        computerMove = 'Rock';
    }
    else if (randomNum >= 1/3 && randomNum < 2/3) {
        computerMove = 'Paper';
    }
    else {
        computerMove = 'Scissor';
    }

    let result = '';
    if (player === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        }
        else if (computerMove === 'Paper') {
            result = 'You Lose';
        }
        else {
            result = 'You Win';
        }
    }
    else if (player === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Win';
        }
        else if (computerMove === 'Paper') {
            result = 'Tie';
        }
        else {
            result = 'Lose';
        }
    }
    else {
        if (computerMove === 'Rock') {
            result = 'You lose';
        }
        else if(computerMove === 'Paper') {
            result = 'You Win';
        }
        else {
            result = 'Tie';
        }
    }

    if (result === 'You Win') {
        score.wins += 1;
    }
    else if (result === 'You Lose') {
        score.losses += 1;
    }
    else {
        score.ties += 1;
    }
    alert(`You picked ${player}. Computer picked ${computerMove}. ${result}!
Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
}

document.getElementById('rock').addEventListener('click', function() {
    RPS('Rock');
})
document.getElementById('paper').addEventListener('click', function() {
    RPS('Paper');
})
document.getElementById('scissor').addEventListener('click', function() {
    RPS('Scissor');
})

document.getElementById('resetScore').addEventListener('click', function() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    alert('You reset the score!')
})