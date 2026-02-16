const name = "Ritu Kumari"
const repoCount = 50

// console.log(name + repoCount + "value")

//use backticks 
//string intopolation 
// console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

//String declearation method 2
const gameName = new String('Hello  Dostoo')
// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("t"))


const newString = gameName.substring(0,4)
// console.log(newString);



const str2 = gameName.slice(2, 5)
console.log(str2);


const newStr1 = "    ritu "
console.log(newStr1)
console.log(newStr1.trim())  //start trim and end trim() method


const url = "https://ritu.com/ritu%20kumari"
console.log(url.replace('%20' , '_'))

console.log(url.includes('ritu'))
console.log(url.includes('kuku'))

//read most of the methods of the string 
