// lec--1

// console.log("I am Successful");

// let username = "Ritu"
// const accountId = "rk11"
// console.log(username);
// console.log(accountId);

// let accountState;
// console.log(accountState);

// console.table([accountId, username,accountState]);


// prefer not to use var ""




// lec---2
// "use strict";     //treat all JS code as newer version 
// console.log(3+3)
// console.log("I am here ")

// let name = "Ritu"
// let age = 21
// let isLogged = true

// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof isLogged);
// console.log(typeof null)
// typeof null is Object


// lec---3
// conversion operation
let score = "33";

//console.log(typeof score)
let valueInNumber = Number(score)
//console.log(typeof valueInNumber) 

// "33" = 33
// "33abc" = NaN
// true = 1 ; false = 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 = true ; 0= false
//"" = false
// "ritu" = true


// let num = 33;
// let stringNumber = String(num)
// console.log(stringNumber)
// console.log(typeof(stringNumber))

// **********Operation*********
let value = 3
let negValue = -value
// console.log(negValue)
// console.log(typeof negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)


let s1 = "Ritu"
let s2 = " singh"

let s3 = s1+ s2
// console.log(s3)

// console.log("1" + 2)
// console.log(2 + "1")
// console.log("1" + 2+2)
// console.log(2+2+"1")


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0) //false
// console.log(null == 0) // false
// console.log(null >= 0) //true
// console.log(undefined == 0) //false


//=== it checks value as well as data type
// console.log( "2" === 2)


// const id = Symbol('123')
// const id2 = Symbol('123')
// console.log( id === id2) //false


// primitive --String , number , Boolean , Null , undefined,Symbol,BigInt


//Reference Variable -- Array , Objects , Function

const heros = ["shaktiman" , "Naagraj" , "doga"]

let myobj = {
    name: "ritu",
    course: "Btech",
    roll: 21
}
// console.log(myobj)

//Function
const myFunction = function(){
    // console.log("Hello World");
}

// console.log(typeof myFunction)
// console.log(typeof myobj)


//Assignment 
let S = "Ritu"
let n = 123
let b = true
let a = null
let u = undefined
let sy = Symbol('123')
let big = 12324434456565n

// console.log(typeof S)
// console.log(typeof n)
// console.log(typeof b) // boolean 
// console.log(typeof a) //object 
// console.log(typeof u) //undefined
// console.log(typeof sy)  //symbol
// console.log(typeof big)   //bigInt




//Memory Allocation of variable 

// two types of memory
//  1. Stack (primitive datatypes uses stack m/m) --- Stack mm gives copy of the variable
//  2. Heap (non-primitive datatypes uses HEAP m/m) --- heap mm gives reference of the original value
let myYoutubename = "rks_studio_here"
let anothername = myYoutubename
anothername = "ChaiAurCode"

console.log(myYoutubename)
console.log(anothername)


let userOne ={
    email:"email@email",
    upi:"name@uit"
}

let userTwo = userOne
userTwo.email = "ritu@google.com"

console.log(userOne.email)
console.log(userTwo.email)

