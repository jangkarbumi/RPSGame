const menang = document.getElementById('menang');
const kalah = document.getElementById('kalah');
const imbang = document.getElementById('imbang');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const resetScore = document.getElementById('resetScore');

let score = {
    wins: 0,
    losses: 0,
    ties: 0
}

function saveScore() {
    localStorage.setItem('rpsScore', JSON.stringify(score));
}

function loadScore() {
    const savedScore = localStorage.getItem('rpsScore');
    if (savedScore) {
        score = JSON.parse(savedScore)
    }
}

function RPS(player) {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber <= 1/3) {
        computerMove = 'Rock';
    }
    else if (randomNumber > 1/3 && randomNumber <= 2/3) {
        computerMove = 'Paper';
    }
    else {
        computerMove = 'Scissor';
    }

    let result = '';
    if (player === 'rock') {
        if (computerMove === 'Rock') {
            result = 'tie';
        }
        else if (computerMove === 'Paper') {
            result = 'lose';
        }
        else {
            result = 'win';
        }
    }
    else if (player === 'paper') {
        if (computerMove === 'Rock') {
            result = 'win';
        }
        else if (computerMove === 'Paper') {
            result = 'tie';
        }
        else {
            result = 'lose';
        }        
    }
    else {
        if (computerMove === 'Rock') {
            result = 'lose';
        }
        else if (computerMove === 'Paper') {
            result = 'win';
        }
        else {
            result = 'tie';
        }
    }

    if (result === 'win') {
        score.wins += 1;
    }
    else if (result === 'lose') {
        score.losses += 1;
    }
    else {
        score.ties += 1;
    }
    saveScore();
}

function updateScore() {
    menang.textContent = `Wins: ${score.wins}`;
    kalah.textContent = `Losses: ${score.losses}`;
    imbang.textContent = `Ties: ${score.ties}`;
}

function reset() {
    score.wins = score.losses = score.ties = 0;
    saveScore();
}

loadScore();
updateScore();

rock.addEventListener('click', function() {
    RPS('rock'); updateScore();
});
paper.addEventListener('click', function() {
    RPS('paper'); updateScore();
});
scissor.addEventListener('click', function() {
    RPS('scissor'); updateScore();
});
resetScore.addEventListener('click', function() {
    reset(); updateScore();
})