import gameFunc from '../src/index.js';
let gameTask = 'What is the result of the expression?';

let engineGame = (question) => {
  let rightAnswer = '';
  let items = question.split(' ')

if (items[1] === '+') {
  rightAnswer = String(Number(items[0]) + Number(items[2]));
} else if (items[1] === '-') {
  rightAnswer = String(Number(items[0]) - Number(items[2])); 
} else if (items[1] === '*') {
  rightAnswer = String(Number(items[0]) * Number(items[2])); 
}
return rightAnswer;
};

let questionGenerate = () => {
  let numberOne = Math.floor(Math.random() * 20) + 1;
  let numberTwo = Math.floor(Math.random() * 20) + 1;
  let operator = [ '+', '-', '*'],
  randomOperator = operator[Math.floor(Math.random() * operator.length)];
  let question = String(numberOne + ' ' + randomOperator + ' ' + numberTwo);
  return question;
};

let brainCalc = () => {
  gameFunc(gameTask, questionGenerate, engineGame);
}
export default brainCalc