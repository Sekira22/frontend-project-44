import gameFunc from '../src/index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const engineGame = (question) => {
  let rightAnswer = '';
  if (question === 1) {
    rightAnswer = 'no';
  }
  for (let i = 0; i < question - 1; i += 1) {
    if ((question % (i + 1) === 0) && (i !== 0)) {
      rightAnswer = 'no';
      return rightAnswer;
    }
    rightAnswer = 'yes';
  }
  return rightAnswer;
};
const questionGenerate = () => Math.floor(Math.random() * 100) + 1;
const brainPrime = () => {
  gameFunc(gameTask, questionGenerate, engineGame);
};
export default brainPrime;
