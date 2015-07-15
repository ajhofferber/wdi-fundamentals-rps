////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
  console.log("Please choose either 'rock', 'paper', or 'scissors'.")
  return prompt();
}

function randomPlay() {
  var randomNumber = Math.random();
  if (randomNumber < 0.33) {
      return "rock";
  } else if (randomNumber < 0.66) {
      return "paper";
  } else {
      return "scissors";
  }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
  
  return (move || getInput());
}

function getComputerMove(move) {

  return (move || randomPlay());
}

function getWinner(playerMove, computerMove) {
  var winner;

  if (playerMove === 'rock' && computerMove === 'paper')
    winner = 'computerWins'
  else if (playerMove === 'paper' && computerMove === 'rock')
    winner = 'playerWins'
  else if (playerMove === 'paper' && computerMove === 'scissors')
    winner = 'computerWins'
  else if (playerMove === 'scissors' && computerMove === 'paper')
    winner = 'playerWins'
  else if (playerMove === 'rock' && computerMove === 'scissors')
    winner = 'playerWins'
  else if (playerMove === 'scissors' && computerMove === 'rock')
    winner = 'computerWins'
  else if (playerMove === 'rock' && computerMove === 'rock')
    winner = 'Tie'
  else if (playerMove === 'scissors' && computerMove === 'scissors')
    winner = 'Tie'
  else if (playerMove === 'paper' && computerMove === 'paper')
    winner = 'Tie'

  return winner;
}

function playToFive() {
  console.log("Let's play Rock, Paper, Scissors");

  var playerWins = 0;
  var computerWins = 0;

  while (playerWins < 5 && computerWins < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();

    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);

    var winner = getWinner(playerMove, computerMove);

    if (winner === 'playerWins')
      playerWins += 1;
    else if (winner === 'computerWins')
      computerWins += 1;

    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  }

  return [playerWins, computerWins];
}