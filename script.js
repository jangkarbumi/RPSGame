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

    alert(`You picked ${player}. Computer picked ${computerMove}. ${result}!`);
}