import readlineSync from 'readline-sync';


let name = '';
const yourName = () => {
name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
return name;
};

export {name};
export default yourName;
