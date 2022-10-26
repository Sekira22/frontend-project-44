import gameFunc from '../src/index.js';
let gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let engineGame = (question) => {
  let rightAnswer = '';
   if (question === 1) {
      rightAnswer = 'no';
    }
  for (let i = 0; i < question - 1; i += 1) {
  if ((question % (i + 1) === 0) && (i !== 0)) {
    rightAnswer = 'no';
    return rightAnswer;
  } else {
    rightAnswer = 'yes';
  }
  } 
  return rightAnswer;
};

let questionGenerate = () => {
  return Math.floor(Math.random() * 100) + 1;
};

let brainPrime = () => {
  gameFunc(gameTask, questionGenerate, engineGame);
}
export default brainPrime