let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString)
// console.log(myDate.toLocaleString)
// console.log(myDate.toLocaleDateString)

// console.log(typeof myDate);



// let mycreatedDate = new Date(2023 , 0 ,23)
// let mycreatedDate = new Date(2023 , 0 ,23 , 5,6)
// let mycreatedDate = new Date("2023-01-14")
let mycreatedDate = new Date("14-01-2023")
console.log(mycreatedDate.toDateString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() +1)
console.log(newDate.getDay())


console.log(newDate.toLocaleString('default' , {weekday: "long" }))