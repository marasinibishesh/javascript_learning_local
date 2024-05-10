const name="Bishesh"
const repoCount=70
console.log(name+repoCount+" Value");//old approach
console.log(`Hello, my name is ${name} and my repo count is ${repoCount} `);//new apporach
//Another method to create a string
const gameName=new String('Bishesh')
// console.log(gameName.length);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('B'));

const newString=gameName.substring(0,3)
console.log(newString);

const anotherString=gameName.slice(-7,3)
console.log(anotherString);

const newString1=gameName.replace('B','C')
console.log(newString1);
const newString2="   Marasini   "
console.log(newString2);
console.log(newString2.trim());//removing whitespace
//Learn more string function 