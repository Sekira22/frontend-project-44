import gameFunc from '../src/index.js';
let gameTask = 'Find the greatest common divisor of given numbers.';

let engineGame = (question) => {
  let rightAnswer = '';
  let item = question.split(' ')
  if (Number(item[0]) < Number(item[1])) {
    let x = item[0];
    item[0] = item[1];
    item[1] = x;
  }
  if (Number(item[0]) >= Number(item[1])) {
    if (Number(item[0]) % Number(item[1]) === 0) {
      rightAnswer = String(item[1]);
    } 
    else {
      let rem = Number(item[0]) % Number(item[1]);
       do {
      if (Number(item[1]) % rem === 0) {
        rightAnswer = String(rem);
        return rightAnswer;
      } else {
        item[0] = item[1];
        item[1] = rem;
        rem = Number(item[0]) % Number(item[1]);
      }
      } while (rem > 0)
    }
  }
  return rightAnswer;
};

let questionGenerate = () => {
  let numberOne = Math.floor(Math.random() * 100) + 1;
  let numberTwo = Math.floor(Math.random() * 100) + 1;
  let question = String(numberOne + ' ' + numberTwo);
  return question;
};

let brainGcd = () => {
  gameFunc(gameTask, questionGenerate, engineGame);
}
export default brainGcd