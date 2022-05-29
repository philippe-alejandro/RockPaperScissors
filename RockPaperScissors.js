

function computerPlay() {
    const optArray= ['rock','paper','scissors'];
    let min = 0; 
    let max = 3;
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;

    return optArray[rand];
}

function playerPlay(option) {
    option = option.toLowerCase();
    return option;
}

function inputValue() {
    let inputVal = document.getElementById('playerValue').value;
    return inputVal;
}

function playRound(playerOption=playerPlay(inputValue()), computerOption=computerPlay()) {
    //console.log(playerOption);
    //console.log(computerOption);
    document.getElementById('playerItem').textContent = `You chose: ${playerOption}`;

    document.getElementById('computerItem').textContent = `The computer chose: ${computerOption}`;

    if (playerOption === 'rock' && computerOption === 'rock') {
        document.getElementById('roundWinner').textContent = "This round is won by: it's a tie";
        console.log(document.getElementById('roundWinner').textContent);
        return "This round is won by: it's a tie";
    } else if (playerOption === 'rock' && computerOption === 'scissors') {
        document.getElementById('roundWinner').textContent = "This round is won by: you";
        console.log(document.getElementById('roundWinner').textContent);
        return "This round is won by: you";
    } else if (playerOption === 'rock' && computerOption === 'paper') {
        document.getElementById('roundWinner').textContent = `This round is won by: the computer`;
        console.log(document.getElementById('roundWinner').textContent);
        return `This round is won by: the computer`
    } else if (playerOption === 'paper' && computerOption === 'paper') {
        document.getElementById('roundWinner').textContent = `This round is won by: it's a tie`;
        console.log(document.getElementById('roundWinner').textContent);
        return `This round is won by: it's a tie`;
    } else if (playerOption === 'paper' && computerOption === 'rock') {
        document.getElementById('roundWinner').textContent = `This round is won by: you`;
        console.log(document.getElementById('roundWinner').textContent);
        return `This round is won by: you`;
    } else if (playerOption === 'paper' && computerOption === 'scissors') {
        document.getElementById('roundWinner').textContent = `This round is won by: the computer`;
        console.log(document.getElementById('roundWinner').textContent);
        return `This round is won by: the computer`;
    } else if (playerOption === 'scissors' && computerOption === 'scissors') {
        document.getElementById('roundWinner').textContent = `This round is won by: it's a tie`;
        console.log(document.getElementById('roundWinner').textContent);
        return `This round is won by: it's a tie`;
    } else if (playerOption === 'scissors' && computerOption === 'paper') {
        document.getElementById('roundWinner').textContent = `This round is won by: you`;
        console.log(document.getElementById('roundWinner').textContent);
        return `This round is won by: you`;
    } else if (playerOption === 'scissors' && computerOption === 'rock') {
        document.getElementById('roundWinner').textContent = `This round is won by: the computer`;
        console.log(document.getElementById('roundWinner').textContent);
        return `This round is won by: the computer`;
    }  
}

let userCount = 0;
let computerCount = 0;
let modal = document.getElementById("myModal");
let closeBtn = document.getElementsByClassName("close")[0];

function runRounds() {
    let roundWin = playRound();
    if (roundWin === 'This round is won by: the computer' && computerCount < 3 && userCount < 3) {
        computerCount++;
        document.getElementById('roundWinner').value = roundWin;
        document.getElementById('scoreValComputer').textContent = 'Computer:' + '\r\n' + computerCount.toString();
        console.log(userCount, computerCount);
    } else if (roundWin === 'This round is won by: you' && computerCount < 3 && userCount < 3) {
        userCount++; 
        document.getElementById('roundWinner').value = roundWin;
        document.getElementById('scoreValYou').textContent = 'You:' + '\r\n' + userCount.toString();
        console.log(userCount, computerCount);
    } else if (roundWin === `This round is won by: it's a tie` && computerCount < 3 && userCount < 3) {
        document.getElementById('roundWinner').value = roundWin;
    } else if (computerCount === 3 && userCount < 3) {
        console.log(`The computer has won the game.`);
        document.getElementById('winnerPar').textContent = `The computer has won the game.`;
        document.getElementById('scoreValComputer').textContent = 'Computer: ' + '0';
        document.getElementById('scoreValYou').textContent = 'You: ' + '0';
        modal.style.display = "block";
        closeBtn.onclick = function() {
            modal.style.display = "none";
          }
        
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }

    } else if (userCount === 3 && computerCount < 3) {
        console.log(`You've won the game.`);
        document.getElementById('winnerPar').textContent = `You've won the game.`;
        document.getElementById('scoreValComputer').textContent = 'Computer: ' + '0';
        document.getElementById('scoreValYou').textContent = 'You: ' + '0';
        modal.style.display = "block";
        closeBtn.onclick = function() {
            modal.style.display = "none";
          }
        
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }

    }   
} 