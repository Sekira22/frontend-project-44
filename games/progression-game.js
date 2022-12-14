import gameFunc from '../src/index.js';

const gameTask = 'What number is missing in the progression?';
const engineGame = (question) => {
  const array = question.split(' ');
  let summand = 0;
  let rightAnswer = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '..') {
      if (i === 0) {
        summand = Number(array[i + 2]) - Number(array[i + 1]);
        rightAnswer = String(Number(array[i + 1]) - summand);
      } else if (i === array.length - 1) {
        summand = Number(array[i - 1]) - Number(array[i - 2]);
        rightAnswer = String(Number(array[i - 1]) + summand);
      } else {
        summand = (Number(array[i + 1]) - Number(array[i - 1])) / 2;
        rightAnswer = String(Number(array[i - 1]) + summand);
      }
    }
  }
  return rightAnswer;
};

const questionGenerate = () => {
  const array = [];
  const miss = '..';
  const placeMiss = Math.floor(Math.random() * 10) + 1;
  const summand = Math.floor(Math.random() * 5) + 1;
  array[0] = Math.floor(Math.random() * 10) + 1;
  let result = array[0];
  for (let i = 0; i < 10; i += 1) {
    if (i === placeMiss - 1) {
      result += summand;
      array[i] = miss;
    } else if (i !== 0) {
      array[i] = result + summand;
      result = array[i];
    }
  }
  const question = array.join(' ');
  return question;
};

const brainProgression = () => {
  gameFunc(gameTask, questionGenerate, engineGame);
};
export default brainProgression;
