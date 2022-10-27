import gameFunc from '../src/index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';
const engineGame = (question) => {
  let rightAnswer = '';
  const item = question.split(' ');
  let [firstItem, secondItem] = item;
  if (Number(firstItem) < Number(secondItem)) {
    const change = firstItem;
    firstItem = secondItem;
    secondItem = change;
  }
  if (Number(firstItem) >= Number(secondItem)) {
    if (Number(firstItem) % Number(secondItem) === 0) {
      rightAnswer = String(secondItem);
    } else {
      let rem = Number(firstItem) % Number(secondItem);
      do {
        if (Number(secondItem) % rem === 0) {
          rightAnswer = String(rem);
          return rightAnswer;
        }
        firstItem = secondItem;
        secondItem = rem;
        rem = Number(firstItem) % Number(secondItem);
      } while (rem > 0);
    }
  }
  return rightAnswer;
};

const questionGenerate = () => {
  const numberOne = Math.floor(Math.random() * 100) + 1;
  const numberTwo = Math.floor(Math.random() * 100) + 1;
  const question = `${numberOne} ${numberTwo}`;
  return question;
};

const brainGcd = () => {
  gameFunc(gameTask, questionGenerate, engineGame);
};
export default brainGcd;
