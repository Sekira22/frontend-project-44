import gameFunc from '../src/index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const engineGame = (question) => {
  let rightAnswer = '';
  if (question % 2 === 0) {
    rightAnswer = 'yes';
  } else if (question % 2 !== 0) {
    rightAnswer = 'no';
  }
  return rightAnswer;
};

const questionGenerate = () => Math.floor(Math.random() * 100) + 1;

const brainEven = () => {
  gameFunc(gameTask, questionGenerate, engineGame);
};
export default brainEven;
