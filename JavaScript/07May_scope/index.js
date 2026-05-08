//var support global/ function scope
//let, const support block scope

var num1 = 25
{
    var num1 = 500
    console.log('value of num1 = ', num1)
}
console.log('value of num1 = ', num1)

//25
//500

var fullname = "Rohit Sharma"
function printValue () {
    var fullname = "Virat"
    console.log(fullname, 'inside function')
}
console.log(fullname, 'outside function')
printValue()



let num3 = 50   //global scope
{
    let num3 = 1000   //block scope
    
    //let num3 = 900
    console.log('value of num3 = ', num3)
}
console.log('value of num3 = ', num3)


const num4 = 100
{
    const num4 = 1
    console.log('value of num4 - ', num4, '- inside the scope')
}
 console.log('value of num4 - ', num4, '- outside the scope')

console.warn('---------- example -------')

/* var num1 = 20
function addition (){
    var num1 = 100;
    var num2 = 30;
    var sum = num1 + num2
    console.log('sum = ', sum)
}
addition () */

//lexical scope - clouser 

function parent () {
    let num1 = 20;
    function child () {
        let num2 = 30
        
        function grandChild () {
            let sum = num1 + num2
            console.log('sum = ',sum)
        }

        grandChild()
    }
    child()
}
parent()


console.warn('--------- mutable and immutable ------')

//Stack memory
let name1 = 'KL Rahul'  //xyz
let name2 = name1       // mno
name2 = "Virat Kohli"   
console.log('name 2 -',name2,)
console.log('name 1 -',name1)


//Rest and Spread - ...
//Heap memory
let obj1 = {
    name : 'KL Rahul'
}
let obj2 = obj1 //same reference value update
obj2.name = 'Virat Kohli'

console.log(obj2)
console.log(obj1)

//let obj1 = {name : 'KL Rahul} --- abc 
//let obj2 = obj1 
//     xyz   abc
//obj2.name = 'Virat Kohli"
// abc - update

//chroma - karve, kothrud, shivajinagr
//iphone - 17

