console.warn(`-------------- filter ()----------`)
const products = [
    {name : 'Shoes', gender : 'unisex', price : 1000},
    {name : 'Tshirt', gender : 'unisex', price : 500},
    {name : 'Saree', gender : 'female', price : 3000},
    {name : 'Trouser', gender : 'male', price : 1000},
    {name : 'Kurta', gender : 'male', price : 700},
    {name : 'dress material', gender : 'female', price : 1000}
]

const unisexProducts = products.filter((product)=>{
    return product.gender === 'unisex'
})
console.log('unisex - ',unisexProducts)

const femaleProducts = products.filter((product)=>{
    return product.gender === 'female'
})
console.log('female -',femaleProducts)

const priceAbove1000 = products.filter((product)=>{
    return product.price > 1000
})
console.log('Price above 1000 -',priceAbove1000)

console.warn(`----------------- sort () -------------------`)
//ascending order - low to high (1 to 10 and a to z)
//descending order  - high to low (10 to 1 and z to a)

//sort () - it modify the original array
//sort () - not return a new array
//sort () - by default always sort data in ascending

const numbers = [7,1,9,2,8,4,3,6,5,0]
console.log(numbers);
numbers.sort()
console.log('numbers -',numbers)


const digits = [35,15,2,45,10,1,20,3,25,30,100,80,1100,90,7,8,9]
console.log(digits);
//ascedning order
digits.sort((a,b)=>{
    //return a - b
    return b - a
})
console.log('digits -', digits)

console.warn(`------------- sort() -string ----------`)

const letters = ['c','f','a','e','d','b','g']
console.log(letters);
console.log('letters -',letters.sort());

const movies = ['Dhurandar','Veer Zara','Bahubali','Dostana','Avengers']
console.log(movies);

//console.log(movies.sort())

movies.sort((a,b)=>{
    //return a.localeCompare(b)
    return b.localeCompare(a)
})
console.log(movies)

const fruits = ['banana','Apple','mango','Cherry']
console.log(fruits)

fruits.sort((a,b)=>{
    return a.toLowerCase().localeCompare(b.toLowerCase())
})
console.log(fruits)

const str1 = 'WElcome'
console.log(str1.toLowerCase())


const cartItem = [
    {name : 'Shoes', gender : 'unisex', price : 1000},
    {name : 'Tshirt', gender : 'unisex', price : 500},
    {name : 'Saree', gender : 'female', price : 3000},
    {name : 'Trouser', gender : 'male', price : 1000},
    {name : 'Kurta', gender : 'male', price : 700},
    {name : 'dress material', gender : 'female', price : 1000}
]

console.log(cartItem)
// low price to high price
/* cartItem.sort((a,b)=>{
    return a.price - b.price
}) */


//high to low
/* cartItem.sort((a,b)=>{
    return b.price - a.price
})
console.log(cartItem) */

//sort products in ascending order by name
/* cartItem.sort((a,b)=>{
    return a.name.localeCompare(b.name)
})
console.log(cartItem) */

/* cartItem.sort((a,b)=>{
    return a.name.localeCompare(b.name) 
}) */
console.log(cartItem.sort((a,b)=>{
    return b.name.localeCompare(a.name)
}));

//interview question 
/* const tasks = [
    {task : 'Fix Bug', priority : 'low', priorityRank : 3},
    {task : 'Deploy', priority : 'high', priorityRank : 1},
    {task : 'Code review', priority : 'medium', priorityRank : 2},
    {task : 'testing', priority : 'high', priorityRank : 1},
] */

//sort according to priority - high, medium, low
/* tasks.sort((a,b)=>{
    return a.priorityRank - b.priorityRank
})
console.log(tasks) */

const tasks = [
    {task : 'Fix Bug', priority : 'low'},
    {task : 'Deploy', priority : 'high'},
    {task : 'Code review', priority : 'medium'},
    {task : 'testing', priority : 'high'}
] 
//expected - high, medium, low
//expected - low, medium, high

//localeCompare - high, low, medium
//localeCompare - medium, low, high

console.warn(`------------------ flat (depth number/ infinity)-----------`)
//const nestedArray = [1,[2,3],[4,5],6,7,8,[9],[10]]
const nestedArray = [1,[2,[3]],[[4,5]],6,7,8,[9],[[[10]]]]
//const nestedArray = [[[[[[[[[[1]]]]]]]]]]
console.log(nestedArray)
//output - [1,2,3,4,5,6,7,8,9,10]
const result = nestedArray.flat(Infinity)
console.log(result)

//flat() - [[1]] = [1]
//flat() - [[[1]]] = [[1]]

//some(), every(), forEach()









