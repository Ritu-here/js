const score = 400;
// console.log(score)
// console.log(typeof score)


const numm = new Number(100)
// console.log(typeof numm)
// console.log(numm)

// console.log(numm.toString());
// console.log(numm.toString.length);
// console.log(numm.toFixed(2));   //only show 2 decimal number


const othernum = 23.345;
console.log(othernum.toPrecision(3));  //23.3 --if number increase-increase value also

const nun = 100000000
// console.log(nun.toLocaleString())
// console.log(nun.toLocaleString('en-IN'))




//+++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  //abs means absolute value it change - to + but not visa versa

console.log(Math.round(234.66))
console.log(Math.ceil(234.66))
console.log(Math.floor(234.66))
console.log(Math.sqrt(25))
console.log(Math.max(3,4,7,3,8,9))


console.log(Math.random());  //gives num between 0 to 1
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()* 10) + 1)


//formulaa
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * ( max - min + 1)) + min)


