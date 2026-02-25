//if statement 

// const isUserLoggedIn = true;

// if (isUserLoggedIn) {
//     console.log("Welcome back user!");
// }

// if(2 === "2"){
//     console.log("Okayy");
// }
// else{
//     console.log("Not OKayy");
// }

// const score = 200;
// if(score > 100 ){
//     const power = "Fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`); // ReferenceError: power is not defined


const balance = 1000;
// if(balance > 500) console.log("You have a good balance!");

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy Course");
}
if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("User loggedIn");
}


//Switch Statement 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4 :
        console.log("April");
        break;
    case 5: 
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 20:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
        break;
}

//truthy and falsy values
const userEmail = "anilkumar@gmail.com"
if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email");
}
//Falsy values : 0, null, undefined, false, "", NaN ,BigInt(0n),-0
//Truthy values : " ", [], {}, function(){}, true, 1, -1, "false", "0"

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length=== 0 ){
    console.log("Object is empty")
}

//false == 0 //true
//false == "" //true
//false == null //false
//false == undefined //false
// 0 == "" //true 



//Nullish Coalescing Operator(??): null undefined ke case me default value set karne ke liye use hota hai

let val1;
// val1 = 5 ?? 10; //5
// val1 = null ?? 10; //10
// val1 = undefined ?? 10; //10
// val1 = 0 ?? 10; //0



console.log(val1);

//Ternary Operator : condition ? true : false
const age = 18;
const canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote yet.";
console.log(canVote);