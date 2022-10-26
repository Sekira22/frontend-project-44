import readlineSync from 'readline-sync';

const yourName = () => {
let name = readlineSync.question('May I have your name? ');
console.log('Hello, ' + name + '!');
return name;
};

yourName();

export default yourName;