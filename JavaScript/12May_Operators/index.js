console.warn('----- Operators in JS -------')

console.warn(`--------- Arithmetic Operator -------`)
let num1 = 20
let num2 = 30
let num3 = 50

let sum = num1 + num2 + num3
let sub = num3 - num2
let multiply = num1*num2

console.log('addition of ', num1, '+', num2, '+',num3, '=',sum)
//addition of 20 + 30 + 50 = 100
//Template Literal Method - ``, ${}
console.log(`addition of ${num1} + ${num2} + ${num3} = ${sum}`)

console.log(`addition = ${num1 + num2 + num3}`)

console.log(`subtraction - ${num3} - ${num2} = ${sub}`)

console.log(`multiplication - ${num1} * ${num2} = ${multiply}`)


let num4 = 5
let num5 = 4

let division = num4 / num5
let modulus = num4 % num5
let exponent = num4**num5
//              5 ** 4
//              5*5*5*5


console.log(`Division - ${num4} / ${num5} = ${division.toFixed(2)}`)

console.log(`Modulus - ${num4} % ${num5} = ${modulus}`)

console.log(`Exponentiation - ${num4} ** ${num5} = ${exponent}`)

let num6 = 35
//num6++ 
num6--
//num6 = num6 + 1
console.log(num6)

/* function cal (num1, num2) {
    return num1 ** num2
}
console.log(cal(5,4))
console.log(cal(17,3)) */


console.warn(`--------- Comparission Operator --------`)
//true, false

// ==      -    it checks only values
let x1 = "20"
let x2 = 20
console.log(`${x1} == ${x2} = ${x1 == x2}`)

//first convert string into number then check the equality


console.log(`${x1} === ${x2} = ${x1 === x2}`)

//it check datatypes before the equality 

//JavaScript convert one datatype into another datatype automatically is called type coersion 

console.log(Number('5') + 5)
//55, 10
console.log('5' - 2)
//3
console.log(true + 1)
//2

console.log(undefined - 1)


/* let a1 = prompt('Enter First Number')
let a2 = prompt('Enter Second NUmber')

let addition = Number(a1) + Number(a2)

let subtraction = a1 - a2 
console.log(addition)
console.log(subtraction) */

//Number(), String(), Boolean()

console.warn('------------ logical operator ---------')

let y1 = '20'
let y2 = 20
let result1 = y1 == y2 && y1 === y2
//               true  &&    false

console.log(result1)

let z1 = 50
let z2 = 50

let result2 = z1 >= z2 || z1 > z2
//            50 >= 50 || 50 > 50
//                 true || false
console.log(result2)

let amount =  0
let result3 = amount || 'Not Valid Amount'

//Nullish Coalsceing - ??
let result4 = amount ?? 'Not Valid Amount'

console.log(result3)
console.log(result4)

console.warn(`-------- not operator---`)
console.log(!true)

//!= or !==
//== or ===

let m1 = 50
let m2 = '50'
console.log(m1 !== m2)





