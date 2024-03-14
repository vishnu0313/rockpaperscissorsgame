// score returned and parsed from localmemory and update
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0

};

updateScoreElement();

// if(!score){
//   score={
//     wins: 0,
//     losses: 0,
//     ties: 0

//   } 
// }

// player move amd compare with computermove 
function playGame(playerMove){

const computerMove = pickComputerMove();
result='';

if(playerMove==='scissors'){
      
  if (computerMove === 'scissors'){
    result = 'Tie.';
  }else if(computerMove === 'rock'){
    result = 'You lose.';
  }else{
    result='You win.';
  }

}else if(playerMove==='paper' ){
  
  if (computerMove === 'paper'){
    result = 'Tie.';
  }else if(computerMove === 'scissors'){
    result = 'You lose.';
  }else{
    result='You win.';
  }

}else if(playerMove==='rock'){
      
  if (computerMove === 'rock'){
    result = 'Tie.';
  }else if(computerMove === 'paper'){
    result = 'You lose.';
  }else{
    result='You win.';
  }
}

// update score

if(result === 'You win.'){
  score.wins += 1;
}else if(result === 'You lose.'){
  score.losses += 1;
}else if(result === 'Tie.'){
  score.ties += 1;
}

// score JSON conversion
localStorage.setItem('score', JSON.stringify(score)); 



// update results 

document.querySelector('.js-results').innerHTML = result;

document.querySelector('.js-moves').innerHTML=`You <img src="images/${playerMove}-emoji.png" class="move-icon"> computer <img src="images/${computerMove}-emoji.png" class="move-icon">`;


updateScoreElement();


//       alert(`
// You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins},loses: ${score.losses},Ties: ${score.ties}`
//       )
}



function updateScoreElement(){
document.querySelector('.js-score').innerHTML=`Wins: ${score.wins},loses: ${score.losses},Ties: ${score.ties}`;

}


// pick random computer move
function pickComputerMove(){
  
let computerMove = '';

randomNumber=Math.random();


if (randomNumber>=0&&randomNumber<1/3){
  computerMove='rock';
}else if(randomNumber>=1/3&&randomNumber<2/3){
  computerMove = 'paper';
}else{
  computerMove = 'scissors';
}
return computerMove;
}  
