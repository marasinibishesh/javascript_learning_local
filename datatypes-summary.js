// Primitive Datatype
/* 7 types :String,Number,Boolean,null,undefined,Symbol,BigInt */
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

//for declaring symbols
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id==anotherId);//false
console.log(id===anotherId);//false
//for declaring BigInt
const bigNumber=1234567890123456789n//use n for bigint
//for declaring objects
const heros=["Shaktiman","Naagraj","Bishesh"]
let myObj={
    name:"Bishesh",
    age:20,
}
//for declaring function variable type
const myfunction=function(){
    console.log("Hello World");
}
console.log(typeof outsideTemp);





//Non-Primitive Datatype
/* 4 types :Object,Array,Function,Date */