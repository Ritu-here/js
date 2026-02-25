//For Loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if(index == 5){
    // console.log(" 5 is the best number");
    }
    // console.log(element)
}

for(let i = 0; i < 10; i++) {
    // console.log(`Outer Loop ${i}`);
    for(let j = 0 ; j< 10 ; j++){
        //console.log(`Inner loop ${j} and Outer loop ${i}`);
        // console.log(i+ " * " + j + " =" + i*j)
    }
    
}



let myArray = ["Flash" , "Batman" , "Superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

//Break and Continue
// for (let index = 0; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`)
    
// }

for (let index = 0; index <= 20; index++) {
    if(index == 5){
        // console.log(`Detected 5`);
        continue;
    }
    // console.log(`value of i is ${index}`)
    
}


// while Loop
let index = 0
while (index <= 10) {
    // console.log(`Value of the index is ${index}`)
    index = index + 2;
    
}

let myArray2 = ["Superman" , "Batman" , "Spriderman"]
let arr = 0;
while(arr< myArray2.length){
    // console.log(`Value is ${myArray2[arr]}`)
    arr = arr+1;

}


let score = 11;
do{
    // console.log(`Score is ${score}`);
    score++;
}while(score <= 10);


//For of 

//["","",""]
//[{},{}]

const arr1 = [1,2,3,4,5,6]

for (const num of arr1) {
    // console.log(num);
    
}

const greetings = "Welcome students";
for (const greet of greetings) {
    // console.log(`hello ${greet}`)
    
}


//Maps--Map is a obj that holds collection of key and values--only unique values
const map = new Map()
map.set(`IN` , "India")
map.set(`USA`, "United States of America")
map.set(`Fr` , "France")

console.log(map)

for (const [key , value]  of map) {
    // console.log(key, ':-' , value);
    
}

//object is not iterable
const myObject = {
    "game1" : "NFS",
    "game2" : "Superman"
}
// for (const element of object) {
    
// }


const myobj = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by Apple"
}

for (const key in myobj) {
    // console.log(key);
    // console.log(`${key} shortcut is for ${myobj[key]}`)

}

const programming = ["js","rb","cpp","c" , "java"]
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key])  
}


//For Each Loop
const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(  function (item) {
//     console.log(item)
// })

coding.forEach((item) => {
    // console.log(item)
})

coding.forEach((item , index, arr) => {
    // console.log(item,index , arr)
})

const myCoding = [
    {
        languageName : "javaScript",
        languageFile : "js"
    },
    {
        languageName: "Java",
        languageFile:"java"
    },
    {
        languageName : "Python",
        languageFile:"py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)

})