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

const congrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const runQuestionRounds = (name, qaGenerator, numQuestions) => {
  if (numQuestions === 0) {
    congrats(name);
    return 0;
  }
  const qa = qaGenerator();
  const question = car(qa);
  const answer = cdr(qa);
  const userAnswer = getUserAnswer(question);
  if (answer === userAnswer) {
    console.log('Correct!');
    return runQuestionRounds(name, qaGenerator, numQuestions - 1);
  }
  incorrectAnswerMessage(name, userAnswer, answer);
  return 0;
};

const runGameFlow = (qaGenerator, challengeDescription) => {
  const correctAnswersToWin = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`${challengeDescription}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  runQuestionRounds(name, qaGenerator, correctAnswersToWin);
};

export default runGameFlow;
