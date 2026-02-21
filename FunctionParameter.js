console.log("This is the FunctionParameter module.")


// function addTwoNumbers(num1 , num2){
//     console.log(num1+num2);
// }
// addTwoNumbers(5,10);
// addTwoNumbers(3,"4");
// addTwoNumbers(4,"ee");
// addTwoNumbers("2","3");
// addTwoNumbers(3, null);



// function AddTwoNumbers(number1 , number2)
// {
//     let result = number1 + number2;
//     return result;

// }
// console.log(AddTwoNumbers(5,10));

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("hehehehe"));
console.log(loginUserMessage())

function calculateCartPrice(...num1){              //this ... is rest operator 
    return num1

}
console.log(calculateCartPrice(200,400,500))


const user = {
    username: "ritu",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)


const myNewArray = [200 , 400 , 100 , 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));