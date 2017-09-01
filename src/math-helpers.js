import { cons, car, cdr } from 'hexlet-pairs';


export const isEven = number => (number % 2) === 0;

export const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * ((maxInt - minInt) + 1)) + minInt;
};

export const getNumDigits = (number) => {
  if (number === 0) {
    return 1;
  }
  return Math.trunc(Math.log10(Math.abs(number))) + 1;
};

export const getSumDigits = (number) => {
  if (number === 0) {
    return 0;
  }
  return (number % 10) + getSumDigits(Math.trunc(number / 10));
};

export const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const progression = (first, step) => cons(first, step);

export const getProgressionElement = (progr, index) =>
  car(progr) + (cdr(progr) * index);

export const progressionToString = (progr, length, indexToObscure) => {
  let output = '';
  for (let i = 0; i < length; i += 1) {
    output = `${output} ${(i === indexToObscure) ? '..' : getProgressionElement(progr, i)}`;
  }
  return output;
};
