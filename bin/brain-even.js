#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log('Hello, ' + name + '!');

console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  let numberIsRandom = Math.floor(Math.random() * 100) + 1;
  let rightAnswer = '';
  if (numberIsRandom % 2 === 0) {
    rightAnswer = 'yes';
  } else if (numberIsRandom % 2 !== 0) {
    rightAnswer = 'no';
  }
  console.log('Question: ' + numberIsRandom);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
    Let's try again, ${name}!`);
    i = 3;
  }
}
