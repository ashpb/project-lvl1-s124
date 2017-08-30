import { cons } from 'hexlet-pairs';
import { getRandomInt } from '..';

const qaGenerator = (iter) => {
  const minNumber = 1;
  const maxNumber = 100;
  const num1 = getRandomInt(minNumber, maxNumber);
  const num2 = getRandomInt(minNumber, maxNumber);
  const questions = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const answers = [num1 + num2, num1 - num2, num1 * num2];
  return cons(questions[iter], answers[iter].toString());
};

export const challengeDescription = 'What is the result of the expression?';

export default qaGenerator;
