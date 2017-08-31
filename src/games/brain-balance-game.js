import { cons } from 'hexlet-pairs';
import runGameFlow from '..';
import { getRandomInt, getNumDigits, getSumDigits } from '../math-helpers';


const createBalancedNumber = (sumDigits, numDigits) => {
  if (numDigits === 1) {
    return String(sumDigits);
  }
  const firstDigit = Math.trunc(sumDigits / numDigits);
  return String(firstDigit) + createBalancedNumber(sumDigits - firstDigit, numDigits - 1);
};

const balance = (number) => {
  const numDigits = getNumDigits(number);
  const sumDigits = getSumDigits(number);
  return createBalancedNumber(sumDigits, numDigits);
};

const qaGenerator = () => {
  const minNumber = 100;
  const maxNumber = 10000;
  const num = getRandomInt(minNumber, maxNumber);
  const question = `${num}`;
  const answer = balance(num);
  return cons(question, answer);
};

const challengeDescription = 'Balance the given number.';

const runGame = () => runGameFlow(qaGenerator, challengeDescription);

export default runGame;
