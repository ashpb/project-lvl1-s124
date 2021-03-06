import { cons } from 'hexlet-pairs';
import runGameFlow from '..';
import { getRandomInt, isEven } from '../math-helpers';


const qaGenerator = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const question = getRandomInt(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const challengeDescription = 'Answer "yes" if number even otherwise answer "no"';

const runGame = () => runGameFlow(qaGenerator, challengeDescription);

export default runGame;
