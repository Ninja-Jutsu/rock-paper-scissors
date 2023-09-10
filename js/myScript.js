// Computer pick a random number between 0 and 1.
let computerPick = '';
function computerMove(){
  const randomNumber = Math.random(); 0
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerPick = 'Rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerPick = 'Scissors';
  }
  else if (randomNumber >= 2/3 && randomNumber <= 1){
    computerPick = 'Paper';
  }
  return (computerPick); 
}
let result='';

// For reset button to delete saved results successfully
const scoreCount = JSON.parse(localStorage.getItem('score')) || 
{
  wins: 0,
  losses: 0,
  ties: 0
};

// pick comparison function for rock button
function pickComparison(playerMove){
    // Rock comparison
  if (playerMove === 'rock'){
    if (computerPick === 'Rock'){
      result = 'You Tie!'
    }
    else if (computerPick === 'Scissors'){
      result = 'You Win!'
    }
    else if (computerPick === 'Paper'){
      result = 'You Lose!'
    }

    // Paper comparison
} else if (playerMove === 'paper'){
    if (computerPick === 'Rock'){
      result = 'You Win!';
    }
    else if (computerPick === 'Scissors'){
      result = 'You Lose!';
    }
    else if (computerPick === 'Paper'){
      result = 'You Tie!';
}

    // Scissors comparison
} else if (playerMove === 'scissors'){
    if (computerPick === 'Rock'){
      result = 'You Lose!';
    }
    else if (computerPick === 'Scissors'){
      result = 'You Tie!';
    }
    else if (computerPick === 'Paper'){
      result = 'You Win!';
    }
}

// Count score
 if (result === 'You Win!'){
  scoreCount.wins += 1
 }
 else if (result === 'You Lose!'){
  scoreCount.losses += 1
 }
 else if (result === 'You Tie!'){
  scoreCount.ties += 1
 }
// Save the score as a string inside LocalStorage
 localStorage.setItem('score', JSON.stringify(scoreCount))

alert(`You picked ${playerMove}. The computer picked ${computerPick} . ${result}
Wins : ${scoreCount.wins} Losses: ${scoreCount.losses} Ties: ${scoreCount.ties}`)
}