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
      return `It's a tie.`;
    } else if(computerMsg === 'Ball'){
      return 'User Won.';
    } else if(computerMsg === 'Stump' ){
      return 'Computer Won.';
    }

  } else if(userChoice == 'Ball'){

    if(computerMsg === 'Bat'){
      return `Computer Won.`;
    } else if(computerMsg === 'Ball'){
      return `It's a tie`;
    } else if(computerMsg === 'Stump' ){
      return `User Won.`;
    }

  } else{

    if(computerMsg === 'Bat'){
      return `User Won.`;
    } else if(computerMsg === 'Ball'){
      return `Computer Won`;
    } else if(computerMsg === 'Stump' ){
      return `It's a tie.`;
    }

  }

}


// alerting the page to print the result.
function printMessage(user, computer, result){
  alert(`You chosen ${user}. Computer chosen ${computer}. ${result}`);
}