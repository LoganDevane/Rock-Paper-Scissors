function playerChoice(choice) {
    // Random choice for the computer
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Get result of the game
    let result = '';
    if (choice === computerChoice) {
        result = 'You and Julian draw!';
    } else if (
        (choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'scissors' && computerChoice === 'paper') ||
        (choice === 'paper' && computerChoice === 'rock')
    ) {
        result = 'You Win!';
    } else {
        result = 'Julian Wins!';
    }

    
    document.getElementById('result').innerText = result;
    document.getElementById('player-choice').innerText = choice;
    document.getElementById('computer-choice').innerText = computerChoice;
}

function resetGame() {
    document.getElementById('result').innerText = '';
    document.getElementById('player-choice').innerText = '';
    document.getElementById('computer-choice').innerText = '';
}

