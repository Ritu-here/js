//Array

const myArr =  [0,1,2,3,4,5,6,7]   //arrays in js are resizable 
// console.log(myArr[2])

const myHeros = ["ritu" , "Rishu" , "Sneha" , "Bauaa"]
// console.log(myHeros.length)
// console.log(myHeros[1])

const myar = new Array(1,2,3,4,5)
// console.log(myar[1]);

//Array Methods
// myArr.push(6)    //Add at end
// console.log(myArr)
// myArr.pop()   //remove at end
// myArr.pop()
// console.log(myArr)


myArr.unshift(99)             //ADD at First 
// console.log(myArr);
myArr.shift()                 // remove from first
// console.log(myArr)


// console.log(myArr.includes(7))
// console.log(myArr.indexOf(5))

const newArr =  myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr)   //object
// console.log(typeof newArr)  // string 

//slice and splice 



console.log("A" , myArr)
const myn1 = myArr.slice(1,3)  //from 1 to 2 does not include 3
console.log(myn1);


console.log("B" , myArr)
const myn2 = myArr.splice(1,3)  //from 1 to 3 it move all the targeted 
// element from the array

console.log(myn2);








