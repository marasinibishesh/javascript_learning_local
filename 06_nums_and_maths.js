const score =400
//console.log(score);//normal approach
const balance=new Number(1000000000000000000000)//new approach to say taking number only
//console.log(balance.toString().length);
//console.log(balance.toFixed(2));
//console.log(balance.toLocaleString('hi-IN'));
const otherNumber=23.896
//console.log(otherNumber.toPrecision(3));

const hundreds=1000000000000000000
//console.log(hundreds.toLocaleString('hi-IN'));//to show comas in devnagari

//+++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++
// console.log(Math.abs(-4))
// console.log(Math.round(4.6));//output 5
// console.log(Math.ceil(4.1));//output 5
// console.log(Math.floor(4.9));//output 4
// console.log(Math.sqrt(10000));
// console.log(Math.min(4,3,6,8));//output 3
// console.log(Math.max(4,3,6,8));//output 8
console.log(Math.random());//Gives value between 0 to 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min+1)))+min);//for avoiding decimal we use floor this a generic formula for defining getting random value at any number
const min1=1
const max1=6
console.log(Math.floor((Math.random()*(max1-min1+1)))+min1);


