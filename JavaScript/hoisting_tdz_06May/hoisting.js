console.warn('------------- Hoisting in JavaScript ---------')

console.log(num1)
var num1 = 100

greet()
function greet () {
    console.log('Welcome')
}


let num3;
console.log(num3)  // undefined 
num3 = 25


console.log(num4)  //Hoisting - TDZ - referenceError
let num4 = 50




//Hositing is javascript behavior in which variable and function declaration are moved to the top of their scope while compilation.

//Beacuse of Hoisting before 2015 - 
// - debugging is hard
// - not written industry standard code

//To overxome this problem javascript introduced let and const keyword 
// arrow function

//Yes, let and const are hoisted. but due to TDZ it show the referenceError.

// TDZ instruct JS Engine do not touch the variable until value are initialize.
