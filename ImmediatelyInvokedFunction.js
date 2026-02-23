//Immediately Invoked Function Expression (IIFE)
// function chai(){
//     console.log('DB CONNECTED');
// }

// chai();


(function chai(){
    console.log('DB CONNECTED');
})(); //here we have to add semicolon at the end of the function 
// because if we don't add semicolon then it will throw an error because the 
//the function declaration will be treated as a function expression and it will not be executed immediately.

((name) => {
    console.log(`DB CONNECTED two ${name}`);
})('Rishu'); //here we can also pass arguments to the IIFE and we can also use template literals to access the arguments.



