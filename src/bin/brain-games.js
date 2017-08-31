#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${readlineSync.question('May I have your name? ')}\n`);
