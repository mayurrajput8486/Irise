console.warn(`----------- ternary operator -------------`)
let num1 = 80

//25 > 0

if(num1 > 0){
    console.log(`${num1} is positive`)
}else{
    console.log(`${num1} is negative`)
}

num1 > 0 ? console.log(`${num1} is +ve`) : console.log(`${num1} is -ve`)

//print number is positive, negative or zero
let num2 = 0

if(num2 > 0){
    console.log('+ve')
}else if(num2 < 0){
    console.log('-ve')
}else{
    console.log('Number is ZERO')
}

num2 > 0 ? console.log('+ve') : (num2 < 0) ? console.log('-ve') : console.log('ZERO')


//age criteria 18 

let age = 25

// if(age >= 18) { console.log('I am eligible')}

age >= 18 ? console.log('User eligible for voting') : console.log('user not eligible')

if([]){
    console.log('I am true')
}else{
    console.log('I am False')
}

console.warn(`------------- spread operator ----------`)
//coping and merging 
let obj1 = {
    name : 'rohan',
    age : 35
}
let obj2 = {
    city : 'Pune',
    zipcode : 411052
}

let user = {...obj1,...obj2}
console.log(user)

const arr1 = [1,2,3,4,5]
const arr2 = [6,7]
const arr3 = [8,9,10]

const arrays = [...arr1,...arr2,...arr3]
console.log(arrays)


console.warn(`-------- rest operator -------`)
const numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers)
console.log(numbers[5])


//Array destructure
const [a,b,c,d,e,f,g,h,i,j,k] = numbers
console.log(a)
console.log(b)

const fruits = ['apple','grapes','orange','sweet lime','mango']

//spread - unpack
//rest - pack [], {}

const [fruit1, fruit2,...allFruit] = fruits

console.log(fruit1)
console.log(fruit2)
console.log(allFruit)

let str1 = 'welcome'
console.log(str1)
console.log(...str1)

const users = {
    user_name : 'Virat',
    user_age : 35,
    city : 'Pune',
    pincode : 411052
}
//console.log(users.name)

const {user_name, user_age, ...contactInfo } = users

console.log(user_name)
console.log(user_age)
console.log(contactInfo)

//Create a function for addition of numbers
//sum(1,2,3,4,5) = 15
//sum(5,4) = 9
//sum(1,2,3) = 6

//rest operator also used to collection multipe arguments
function sum (...num) {
    let total = 0;
    for(let i=0; i< num.length;i++){
        total+=num[i]
    }
    return total;
}
// num = [1,2,3,4,5]
console.log(sum(1,2,3,4,5))
console.log(sum(4,5))

//spread - merge, copy
//rest - multiple function argument, staore the value in array or object










