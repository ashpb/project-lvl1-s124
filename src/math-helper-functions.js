export const isEven = number => (number % 2) === 0;

export const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * ((maxInt - minInt) + 1)) + minInt;
};
