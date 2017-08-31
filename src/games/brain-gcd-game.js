import { cons } from 'hexlet-pairs';
import runGameFlow from '..';
import { getRandomInt } from '../math-helper-functions';


const gcd = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }
  const remainder = num1 % num2;
  if (remainder === 0) {
    return Math.abs(num2);
  }
  return gcd(num2, remainder);
};

const qaGenerator = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const num1 = getRandomInt(minNumber, maxNumber);
  const num2 = getRandomInt(minNumber, maxNumber);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();
  return cons(question, answer);
};

const challengeDescription = 'Find the greatest common divisor of given numbers.';

const runGame = () => runGameFlow(qaGenerator, challengeDescription);

export default runGame;
