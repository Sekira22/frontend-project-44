import gameFunc from '../src/index.js';

const gameTask = 'What is the result of the expression?';
const engineGame = (question) => {
  let rightAnswer = '';
  const items = question.split(' ');
  if (items[1] === '+') {
    rightAnswer = String(Number(items[0]) + Number(items[2]));
  } else if (items[1] === '-') {
      rightAnswer = String(Number(items[0]) - Number(items[2]));
  } else if (items[1] === '*') {
      rightAnswer = String(Number(items[0]) * Number(items[2]));
  }
  return rightAnswer;
};

const questionGenerate = () => {
  const numberOne = Math.floor(Math.random() * 20) + 1,
        numberTwo = Math.floor(Math.random() * 20) + 1,
        operator = ['+', '-', '*'];
  const randomOperator = operator[Math.floor(Math.random() * operator.length)];
  const question = `${numberOne} ${randomOperator} ${numberTwo}`;
  return question;
};

const brainCalc = () => {
  gameFunc(gameTask, questionGenerate, engineGame);
}
export default brainCalc;
