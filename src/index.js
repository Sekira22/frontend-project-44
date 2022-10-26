import readlineSync from 'readline-sync';

let gameFunc = (gameTask, questionGenerate, engineGame) => {
  let name = '';
  console.log('Welcome to the Brain Games!');
  const yourName = () => {
    name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    return name;
    };
  yourName();
  console.log(gameTask);
  
  for (let i = 0; i < 3; i += 1) {
    let question = questionGenerate();
    console.log('Question: ' + question);

    let rightAnswer = engineGame(question);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
      Let's try again, ${name}!`);
      i = 3;
    }
}
};

export default gameFunc;