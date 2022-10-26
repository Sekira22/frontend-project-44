import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
const yourName = () => {
  console.log(`Hello, ${userName}!`);
};

export { userName }
export default yourName;
