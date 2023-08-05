const score=JSON.parse(localStorage.getItem('score'))||{win:0,lose:0,tie:0};
seescore();
  function play(){
  const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }
    return computerMove;
}

function comp(pm){
  const computerMove=play()
  let result = '';
  if(pm==='rock'){  
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }
    if(result==='You win'){
      score.win +=1}
    else if(result==='You lose'){
      score.lose +=1}
    else if (result==='Tie'){
      score.tie+=1}
  }

  else if(pm==='paper'){
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }
    if(result==='You win'){
      score.win +=1}
    else if(result==='You lose'){
      score.lose +=1}
    else if (result==='Tie'){
      score.tie+=1}
  }

  else if(pm==='scissors'){
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }
    if(result==='You win'){
      score.win +=1}
    else if(result==='You lose'){
      score.lose +=1}
    else if (result==='Tie'){
      score.tie+=1}
  }
  localStorage.setItem('score',JSON.stringify(score))
  seescore();
  document.querySelector('.r').innerHTML=result
  document.querySelector('.m').innerHTML=`You <img src='rpsimg/${pm}.png'class='rr'> <img src='rpsimg/${computerMove}.png'class='rr'>Computer`
}
function seescore(){
  document.querySelector('.s').innerHTML=`win :${score.win} lose :${score.lose} Tie :${score.tie}`;
}