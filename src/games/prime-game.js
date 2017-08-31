import { cons } from 'hexlet-pairs';
import runGameFlow from '..';
import { getRandomInt, isPrime } from '../math-helpers';


const qaGenerator = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const number = getRandomInt(minNumber, maxNumber);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  return cons(question, answer);
};

const challengeDescription = 'Answer "yes" if number is prime otherwise answer "no"';

const runGame = () => runGameFlow(qaGenerator, challengeDescription);

export default runGame;
