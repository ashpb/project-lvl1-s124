import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');

export const getName = () => readlineSync.question('May I have your name? ');

export const greet = (name) => {
  console.log(`Hello, ${name}\n`);
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const incorrectAnswerMessage = (name, incorrect, correct) => {
  console.log(`'${incorrect}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
};

const correctAnswerMessage = () => {
  console.log('Correct!');
};

const congrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * ((maxInt - minInt) + 1)) + minInt;
};

const isEven = number => (number % 2) === 0;

export const oddEvenGame = () => {
  const correctAnswersToWin = 3;
  const minNumber = 1;
  const maxNumber = 100;
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = getName();
  greet(name);

  let correctAnswers = 0;
  let failed = false;
  while (correctAnswers < correctAnswersToWin && !failed) {
    const number = getRandomInt(minNumber, maxNumber);
    const answer = getAnswer(number);
    switch (isEven(number)) {
      case true:
        if (answer === 'yes') {
          correctAnswers += 1;
          correctAnswerMessage();
        } else {
          failed = true;
          incorrectAnswerMessage(name, answer, 'yes');
        }
        break;
      case false:
        if (answer === 'no') {
          correctAnswers += 1;
          correctAnswerMessage();
        } else {
          failed = true;
          incorrectAnswerMessage(name, answer, 'no');
        }
        break;
      default:
    }
  }

  if (!failed) {
    congrats(name);
  }
};
