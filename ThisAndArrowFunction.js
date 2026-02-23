const user = {
    username : "Rishu",
    price: 999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to out website`);
        // console.log(this);
    }

}
// user.welcomeMessage();
// user.username = "Rishu Singh";
// user.welcomeMessage();

// console.log(this);

// function chai(){
    // console.log(this.username);  //undefined because this is referring to the global object and there is no username property in the global object.
// }
// chai();

// const chai = function(){
//     let username = "Ritu";
//     console.log(this.username);
// }
// chai();



//Arrow Function
// const chai = () =>{
//     let username = "Ritu";
//     console.log(this.username);  //undefined
// }
// chai();


const addTwo = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwo(5, 10));

//implicite return
const addThree = (num1 , num2 , num3) => num1 + num2 + num3;
console.log(addThree(5, 10, 15));

const student = (name , age) => ({username:"rishu", age : 22});
console.log(student("Rishu", 22));


// const myArray = [2,4,6,8,10];
// myArray.forEach(() => {})

    