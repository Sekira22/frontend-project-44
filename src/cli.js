import readlineSync from 'readline-sync';
export let name = '';
const yourName = () => {
name = readlineSync.question('May I have your name? ');
console.log('Hello, ' + name + '!');
return name;
};

export default yourName;