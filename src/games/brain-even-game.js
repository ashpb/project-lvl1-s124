import { cons } from 'hexlet-pairs';
import { getRandomInt, isEven } from '..';

const qaGenerator = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const question = getRandomInt(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export const challengeDescription = 'Answer "yes" if number even otherwise answer "no"';

export default qaGenerator;
