import { cons } from 'hexlet-pairs';
import { getRandomInt, runGameFlow } from '..';


const qaGenerator = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const numOperations = 3;
  const num1 = getRandomInt(minNumber, maxNumber);
  const num2 = getRandomInt(minNumber, maxNumber);
  const operation = getRandomInt(0, numOperations - 1);
  const questions = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const answers = [num1 + num2, num1 - num2, num1 * num2];
  return cons(questions[operation], answers[operation].toString());
};

const challengeDescription = 'What is the result of the expression?';

const runGame = () => runGameFlow(qaGenerator, challengeDescription);

export default runGame;
