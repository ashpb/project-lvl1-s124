import { cons } from 'hexlet-pairs';
import runGameFlow from '..';
import {
  getRandomInt, progression, getProgressionElement, progressionToString,
} from '../math-helpers';


const qaGenerator = () => {
  const progressionLength = 10;
  const minFirstNumber = 1;
  const maxFirstNumber = 100;
  const minStep = 2;
  const maxStep = 29;
  const firstNumber = getRandomInt(minFirstNumber, maxFirstNumber);
  const step = getRandomInt(minStep, maxStep);
  const missingNumberIndex = getRandomInt(0, progressionLength - 1);
  const progr = progression(firstNumber, step);
  const question = progressionToString(progr, progressionLength, missingNumberIndex);
  const answer = String(getProgressionElement(progr, missingNumberIndex));
  return cons(question, answer);
};

const challengeDescription = 'What number is missing in this progression?';

const runGame = () => runGameFlow(qaGenerator, challengeDescription);

export default runGame;
