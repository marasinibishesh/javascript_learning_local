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
console.log(typeof bigNumber);
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
console.log(typeof heros);
//https://262.ecma-international.org/5.1/#sec-11.4.3






//Non-Primitive Datatype
/* 4 types :Object,Array,Function,Date */
//********************************************************************** */
//Stack(Primitive), Heap(Non-Primitive)
/*when we use stack memory then we get a copy of the variable and
 when we use heap memory then we get reference of the original variable */
 //For primitive example
 let myYoutubeName="BisheshMarasini"
 let anothername=myYoutubeName
 anothername="oppo"
 //console.log(myYoutubeName);
 //console.log(anothername);
 //For reference example
 let userOne={
    email:"user@gmail.com",
    name:"Bishesh",
 }
 let userTwo=userOne
 userTwo.email="stack@gmail.com"
 userTwo.name="oppo"
 console.log(userOne);
 console.log(userTwo);
 

