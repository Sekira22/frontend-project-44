import readlineSync from 'readline-sync';
import yourName, { userName } from './cli.js';

const gameFunc = (gameTask, questionGenerate, engineGame) => {
  console.log('Welcome to the Brain Games!');
  yourName();
  console.log(gameTask);
  for (let i = 0; i < 3; i += 1) {
    const question = questionGenerate();
    console.log(`Question: ${question}`);
    const rightAnswer = engineGame(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
      Let's try again, ${userName}!`);
      i = 3;
    }
  }
};

export default gameFunc;
