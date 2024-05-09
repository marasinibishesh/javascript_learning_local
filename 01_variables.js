const accountId=442355
let accountEmail="bishesh@gmail.com"
var accountPassword="12345"
accountCity="Butwal"
//accountId=2 //not allowded
console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
accountEmail="Bishesh@"
accountPassword="12"
accountCity="Kathmandu"//can be declared but not prefered
let accountState; //if value not given then shows undefined
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//{} ->scope
/*
Prefer not to use var because of issue in block scope and functional scope
*/
