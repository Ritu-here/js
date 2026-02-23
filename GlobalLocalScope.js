// let a = 10;
// const b = 20;
// var c = 30;



//socpe {}

// var c = 3000;  //Var is function scope and it is globally scoped if declared outside of any function.
//  It can be re-declared and updated within its scope.
let c = 30000;

if(true){
    let a = 10;
const b = 20;
let c = 30;


}
// console.log(a);
// console.log(b);
// console.log(c);



//nested scope 
function one(){
    const username = "Rishu";
    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();


if(true){
    const username = "Rishu";
    if(username === "Rishu"){
        const website = " Youtube"; 
    // console.log(username + "" + website)   
}
// console.log(website);
}

// console.log(username);

//Global scope: Variables declared outside of any function or 
// block are in the global scope and can be accessed from anywhere in the code.


console.log(addOne(5));
function addOne(num){
    return num+1;
    
}
//here we can call the function before its declaration because of hoisting.
//and hoisting means that the function declaration is moved to the top of the 
// scope before the code is executed.
console.log(addTwo(8));
const addTwo = function(num){
    return num + 2;

}


