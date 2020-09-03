const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

//console.log(getUserChoice('paper'));
//console.log(getUserChoice('fork'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

//console.log(getComputerChoice());
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'The user won!';
  }

  if (userChoice === computerChoice) {
    return 'It is a tie';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The Computer won!';
    } else {
      return 'The user won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The Computer won!';
    } else {
      return 'The user won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The Computer won!';
    } else {
      return 'The user won!';
    }
  }
};

//console.log(determineWinner('paper', 'rock'));
//console.log(determineWinner('paper', 'paper'));
//console.log(determineWinner('paper', 'scissors'));

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();

  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();


