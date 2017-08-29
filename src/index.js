import readlineSync from 'readline-sync';

const greet = () => {
  console.log(`Hello, ${readlineSync.question('May I have your name? ')}`);
};

export default greet;

