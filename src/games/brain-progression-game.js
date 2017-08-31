import { cons } from 'hexlet-pairs';
import runGameFlow from '..';
import { getRandomInt } from '../math-helpers';


const buildQuestion = (firstNumber, step, length, missingNumberIndex) => {
  if (length === 0) {
    return '';
  }
  const currentNumber = (length === missingNumberIndex) ? '..' : String(firstNumber);
  return `${currentNumber}  ${buildQuestion(firstNumber + step, step, length - 1, missingNumberIndex)}`;
};

const qaGenerator = () => {
  const progressionLength = 10;
  const minFirstNumber = 1;
  const maxFirstNumber = 100;
  const minStep = 2;
  const maxStep = 29;
  const firstNumber = getRandomInt(minFirstNumber, maxFirstNumber);
  const step = getRandomInt(minStep, maxStep);
  const missingNumberIndex = getRandomInt(1, progressionLength);
  const question = buildQuestion(firstNumber, step, progressionLength, missingNumberIndex);
  const answer = String(firstNumber + (step * (progressionLength - missingNumberIndex)));
  return cons(question, answer);
};

const challengeDescription = 'What number is missing in this progression?';

const runGame = () => runGameFlow(qaGenerator, challengeDescription);

export default runGame;
