import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';


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

const runGameFlow = (qaGenerator, challengeDescription) => {
  const correctAnswersToWin = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`${challengeDescription}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);

  let correctAnswers = 0;
  let failed = false;
  while (correctAnswers < correctAnswersToWin && !failed) {
    const qa = qaGenerator();
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

export default runGameFlow;
