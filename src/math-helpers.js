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