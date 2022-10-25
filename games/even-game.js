import gameFunc from '../src/index.js';
let gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

let engineGame = (question) => {
  let rightAnswer = '';
  if (question % 2 === 0) {
    rightAnswer = 'yes';
  } else if (question % 2 !== 0) {
    rightAnswer = 'no';
  }
  return rightAnswer;
};

let questionGenerate = () => {
  return Math.floor(Math.random() * 100) + 1;
};

let brainEven = () => {
  gameFunc(gameTask, questionGenerate, engineGame);
}
export default brainEven