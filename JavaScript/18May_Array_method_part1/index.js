console.warn(`---------- push (ele1) - ADD ELE AT LAST (multiple ele use) ----------`)
let num1 = [1,10,2,20,3,30,4]
//[1,10,2,20,3,30,4,40]
console.log(num1)
num1.push(40,50,60)
console.log(num1)

const str1 = ['mango','grapes','orange']
console.log(str1)
//['mango','grapes','orange', 'apple','sweet lime']
str1.push('apple','sweet lime')
console.log(str1)

const users = [
    {name :'Virat', email : 'virat@gmail.com', age : 36}
]
console.log(users)
users.push({fullname : 'rohit', email:'rohit@gmail.com', age : 38})

console.log(users)

console.warn(`--------- pop () - REMOVE LAST ELE -----------`)

const num2 = [1,2,3,4,5]
console.log(num2)
num2.pop()
console.log(num2)

const emp = [
    {name :'Virat', email : 'virat@gmail.com', age : 36},
    {name : 'rohit', email:'rohit@gmail.com', age : 38}
]
console.log(emp)
emp.pop()
console.log(emp)

console.warn(`------ shift () - REMOVE 0th Index Ele-------`)
const num3 = [1,2,3,4,5]
console.log(num3)
num3.shift()
console.log(num3)

console.warn(`------ unshift (ele1,ele2) - ADD ELE AT 0th Index Ele-------`)
const str2 = ['a','b','c']
console.log(str2)
str2.unshift('z','x','y')
console.log(str2)

//Add element at the end without push()

/* function addLastData (arr,ele) {
    arr[arr.length] = ele 
    return arr; 
}
console.log(addLastData([1,2,3,4],5)) */

console.warn(`----------- reverse () -------`)

const letters = ['a','x','z','b','c','y']
console.log(letters)
letters.reverse()
console.log(letters)

//reverse an array
/* function revArray (arr) {
    let rev = []
    for(let i=arr.length-1; i >= 0; i--){
        // i = 6 - 1 = 5; 5 >=0 ;
       rev.push(arr[i])
       //[].push(arr[5])
       //[y,c]
    }
    return rev;
}
console.log(revArray(['a','x','z','b','c','y'])) */

console.warn(`------------ concat () ------`)
let a1 = ['a','b','c']
let a2 = ['d','e']
let a3 = ['z']
//[a,b,c,d,e,z]
//let a1a2a3 =  a1.concat(a2,a3)
//console.log(a1a2a3)

let spreadArray = [...a1,...a2,...a3]
console.log(spreadArray)

console.warn(`--------- splice() --------`)
//Element add
//element remove

//Element Add - splice(indexPosition, removeIndexPosition, element)

const fruits = ['apple','grapes']
//['apple','orange','grapes']
fruits.splice(1,0,'orange','mango')
console.log(fruits)

const digit = [1,2,4,5,6,7]
//[1,2,3,4,5,6,7]
digit.splice(2,0,3)
console.log(digit)

//remove - splice(indexNumber,deleteCount)
const arr1 = [1,2,3,6,4,5]
arr1.splice(3,1)
console.log(arr1)

console.warn(`--------- join () --------`)
//Join () method convert array into string
const data1 = ['I','Love','JavaScript']
console.log(data1)
const result1 = data1.join()
console.log(result1)
const result2 = data1.join(" ")
console.log(result2)

//string - split()
//split() - convert string into array
const data2 = 'I Love JavaScript'
const result3 = data2.split(" ")
console.log(result3)



console.warn(`---------- slice () ------------`)
const arr2 = [1,2,3,4,5,6,7,8,9,10]
//            0 1 2 3 4 5 6 7 8 9
//slice(startIndex,endIndex) always return new array

//startIndex - include
//endIndex -  exclude
//[6,7,8,9,10]
const result4 =  arr2.slice(5,10)
console.log(result4)

//[3,4,5,6]
const result5 = arr2.slice(2,6)
console.log(result5)

const result6 = arr2.slice(-3)
console.log(result6)

const data3 = 'welcome'
console.log(data3.slice(-1))




//Convert First letter of word into Capital
/* const input = 'i love programming'

let result5 = input.split(' ').slice()
console.log(result4) */

















