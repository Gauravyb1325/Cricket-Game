// creating an object to have a scoring of match
let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr){
  score = scoreStr ? JSON.parse(scoreStr) : {
    win : 0,
    lost : 0,
    tie : 0,
  };

  score.displayScore = function(){
    return `Score : Win : ${score.win}, Lost : ${score.lost}, Tie : ${score.tie}.`;
  };

  printMessage();
}

// let score = {
//   win : 0,
//   lost : 0,
//   tie : 0,

  
// };



// Generating Random Computer Choice
function getComputerChoice(){
  let randomNumber = Math.random() * 3;

  if(randomNumber > 0 && randomNumber <= 1){
    return 'Bat';
  } else if(randomNumber > 1 && randomNumber <=2){
    return 'Ball';
  } else {
    return 'Stump';
  }
}


// Generating Result using User choice and Computer choice
function generateResult(userChoice, computerMsg){

  if(userChoice == 'Bat'){

    if(computerMsg === 'Bat'){
      score.tie++;
      return `It's a tie.`;
    } else if(computerMsg === 'Ball'){
      score.win++;
      return 'User Won.';
    } else if(computerMsg === 'Stump' ){
      score.lost++;
      return 'Computer Won.';
    }

  } else if(userChoice == 'Ball'){

    if(computerMsg === 'Bat'){
      score.lost++;
      return `Computer Won.`;
    } else if(computerMsg === 'Ball'){
      score.tie++;
      return `It's a tie`;
    } else if(computerMsg === 'Stump' ){
      score.win++;
      return `User Won.`;
    }

  } else{

    if(computerMsg === 'Bat'){
      score.win++;
      return `User Won.`;
    } else if(computerMsg === 'Ball'){
      score.lost++;
      return `Computer Won`;
    } else if(computerMsg === 'Stump' ){
      score.tie++;
      return `It's a tie.`;
    }

  }

}


// alerting the page to print the result.
function printMessage(user, computer, result){
  localStorage.setItem('Score', JSON.stringify(score));

  document.querySelector('#user-move').innerText = user ? `You have chosen ${user}` : '';

  document.querySelector('#computer-move').innerText =user ? `Computer choice is ${computer}` :  '';
 
  document.querySelector('#result').innerText = result ? `${result}` : '';

  document.querySelector('#score').innerText = `${score.displayScore()}`;

//   alert(`You chosen ${user}. Computer chosen ${computer}.
// `);
}