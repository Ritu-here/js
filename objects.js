//two types for decleration og objects in javaScript

//singleton---if object is decleare using constructor then it will be singleton

// object literals --first way of object declearation 


// Object.create


const mySymbol = Symbol("Key1")
const jsUser = {
    name: "Ritu",
    "full name" : "Ritu Kumari",
    course : "Btech",
    [mySymbol]: "mykey11",
    marks: 98,
    Location: "lucknow",
    email: "ritu@gmail.com"

}
//two ways to access obj elements 
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser.mySymbol)

jsUser.email = "ritu1234@gmail.com"
// Object.freeze(jsUser)
// console.log(jsUser)




//Function
jsUser.greeting = function(){
    console.log("Hello jsUser");
}


jsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo());


