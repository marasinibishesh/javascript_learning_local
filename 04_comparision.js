// console.log(2<1);//false
// console.log(2>=1);//true
// console.log(2==2);//true
// console.log(2==1);//false

//console.log("2">1);//because convert "2" to a number treating it as 2.
//console.log("02"==2);//because convert "2" to a number treating it as 2.

//console.log(null>0);//false
//console.log(null==0);//false
//console.log(null>=0);//true
//console.log(null<=0);//true
/*The reason is that an equality check == and comparisons > < >= <= works differently
Conparisons converts null to a number,treating it as 0
that's why null>=0 is true and null>0 is false */
//console.log(undefined==0);//false
//console.log(undefined>0);//false
//console.log(undefined==null);//true

//=== not only checks values but also check datatype

//console.log(2===2);//true
//console.log(2==="2");//false