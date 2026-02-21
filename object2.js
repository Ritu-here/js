// const tinderUser = new Object();       //singleton object
const tinderUser ={}                   // non singleton object


tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.idLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"ritu@123gmail.com",
    fullname:{
        firstname:"ritu",
        lastname:"Kumari"
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.firstname)


const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}

// const obj3 = {obj1 , obj2}
const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);


const users = [
    {
        id:1,
        email:"r@gmail.com"
    },
    {id:19,
        email:"r@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(Object.hasOwnProperty('idLoggedIn'));


//Destructuring of object

const course ={
    courseName: "js in hindi",
    price :"999",
    courseInstructor:"Ritu"
}
// course.courseInstructor
const {courseInstructor:instrucotr} = course

// console.log(courseInstructor);
console.log(instrucotr);

// json
// {
//   "  name" : "ritu",
//   "course": "Btech",
//   "year":"3rd"
// }

[
    {},
    {},
    {}
]



