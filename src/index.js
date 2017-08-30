import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const welcome = () => console.log('Welcome to the Brain Games!');

export const getName = () => readlineSync.question('May I have your name? ');

export const greet = (name) => {
  console.log(`Hello, ${name}\n`);
};

const getUserAnswer = (question) => {
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

export const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * ((maxInt - minInt) + 1)) + minInt;
};


export const isEven = number => (number % 2) === 0;


export const runGameFlow = (qaGenerator, challengeDescription) => {
  const correctAnswersToWin = 3;
  welcome();
  console.log(`${challengeDescription}\n`);
  const name = getName();
  greet(name);

  let correctAnswers = 0;
  let failed = false;
  while (correctAnswers < correctAnswersToWin && !failed) {
    const qa = qaGenerator(correctAnswers);
    const question = car(qa);
    const answer = cdr(qa);
    const userAnswer = getUserAnswer(question);
    if (answer === userAnswer) {
      correctAnswers += 1;
      correctAnswerMessage();
    } else {
      failed = true;
      incorrectAnswerMessage(name, userAnswer, answer);
    }
  }

  if (!failed) {
    congrats(name);
  }
};
