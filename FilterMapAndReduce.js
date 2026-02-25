// const coding = ["javascript" , "java","python","cpp", "c"]

// const value = coding.forEach( (item) => {
//     // console.log(item)
//     return item

// })

// console.log(value);



const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num > 4})
// console.log(newNums);


const newnum = []
myNums.forEach((num) => {
    if(num>4){
        newnum.push(num)
    }
})

// console.log(newnum)


const BookStore = [
    {
        title:'Book one ', genre: "History", Publish: 1999 , edition:2009
    },
    { title : 'Book two', genre: "Science", Publish: 1989, edition: 2008},
    {title: 'Book three', genre: "History", Publish:1977, edition : 2006},
    {title: 'Book Four' , genre: "fiction" , Publish: 2000, edition : 2005}
];

let userBook = BookStore.filter( (bk) => bk.genre === 'History')
userBook = BookStore.filter( (bk) => { 
    return bk.Publish >= 1999 && bk.genre === 'History'})
// console.log(userBook)


//
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = myNumbers.map( (num) => num+10)

//chaining 
const newNumbers = myNumbers.map( ( num) => num *10)
.map( ( num) => num+1)
.filter(num => num >= 40)
console.log(newNumbers)


//Reduce
const number = [1,2,3]
// const myTotal = number.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)


const myTotal = number.reduce( (acc, currval) => acc + currval, 0)

console.log(myTotal)


const shoppingCart = [
    { item: "Book1 " ,
        price: 100
    },
    {
        item: "Book2 " ,
        price: 1000
    },
    {
        item: "Book3 " ,
        price: 999
    }
]

const priceToPay = shoppingCart.reduce( ( acc , item) => item.price +acc,0 )
console.log(priceToPay)