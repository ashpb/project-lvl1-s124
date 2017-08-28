import readlineSync from 'readline-sync';

export const greet = () => {
  console.log(`Hello, ${readlineSync.question('May I have your name? ')}`);
};

