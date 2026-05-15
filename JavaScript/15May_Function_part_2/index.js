console.log(empProfile(101, 'Rajesh Mathe', 'Admin'))
// empInfo(102,'Virat','FrontEnd Dev') ----- ReferenceError: Cannot access 'empInfo' before initialization


console.warn(`----------- Pure JavaScript Function ------`)

function percentage (getMarks, totalMarks) {
    return (getMarks/totalMarks*100).toFixed(2)
}
//console.log(percentage(300,600))
let rajesh = percentage(550,600)
let hitesh = percentage(500,600)
console.log(`Percentage = ${hitesh} %`)


function convertCelsius (fahrenheit) {
    return (fahrenheit -32)*5/9
}

const tempOfA = convertCelsius(100)
console.log(`Temp in Celcius = ${tempOfA}`)

//Create a function to find maximum number - 
// num1 = 20, num2 = 30, num3= 25

function maxNumber (num1,num2,num3) {
    if(num1 >= num2 && num1 >= num3){
        return num1;
    }else if(num2 >= num1 && num2 >= num3){
        return num2;
    }else{
        return num3
    }
}
console.log(`Max Number - ${maxNumber(20,30,25)}`)
console.log(`Max Number - ${maxNumber(20.5,20.4,20.49)}`)

console.warn(`-------------- function expression ------------`)

const userInfo = function (userName){
    console.log(`Welcome ${userName}`)
}
userInfo('Virat')

const stuPercent = function (getMarks, totalMarks) {
    return (getMarks/totalMarks*100).toFixed(2)
}
console.log(stuPercent(600,600))

console.warn(`----------- Function Hoisting -------`)

function empProfile (empId, empName, empRole) {
    return `${empId} - ${empName} - ${empRole}`
}

const empInfo = function(empId, empName, empRole){
    console.log(`${empId} - ${empName} - ${empRole}`)
}
empInfo(102, 'Rohit', 'React Dev')

console.warn(`--------- Arrow Function ---------`)
//function - removed 
// => (Fat arrow notation) used 


const empDetails = (empId, empName, empRole) => {
    console.log(`${empId} - ${empName} - ${empRole}`)
}
empDetails(103,'KL Rahul','Angular Dev')

function sum (a,b,c) {
    console.log(a+b+c)
}
sum(1,2,2)

const addition = (a,b,c) => console.log(a+b+c)
addition(1,2,2)

const empdata = {
    empID : 104,
    empName : 'Sanju Samson',
    role : 'MERN Dev',

    //has its own this keyword that refers the current object
    empinfo : function (){
        console.log(`${this.empID} - ${this.empName} - ${this.role }`)
    },

    //arrow function does not NOT have its own this
    //undefined - because arrow fuction refers this keyword to window/global object 
    empdetails : () =>{
        console.log(`${this.empID} - ${this.empName} - ${this.role }`)
    }
}
empdata.empinfo();
empdata.empdetails()

console.warn(`----------- callback function -------`)
//for creating callback function we alwyas use syntax of arrow function

//A function called within a another built in function is called callback function 

//setTimeout(function, timer)
    //function - normal function, arrow function 
    //timer - 1s --> 1000ms, 2s --> 2000ms
//delay the function execution at certain amount of time

/* setTimeout(()=>{
    console.log('1')
},1000)

setTimeout(()=>{
    console.log('2')
},2000)

setTimeout(()=>{
    console.log('3')
},3000)

setTimeout(()=>{
    console.log('4')
},4000)

setTimeout(()=>{
    console.log('Welcome - 5')
},5000)
 */
const products = [
    {name : 'Milk', price : 38},
    {name : 'Brown Breads', price : 45},
    {name : 'Curd', price : 30},
    {name : 'Apple', price : 350}
]
console.log(products)

//Sort data according to price

const result = products.filter((a)=>{
    return a.price >= 100
})
console.log(result)

console.warn(`-------- async function ------------`)
async function apiData () {

}

const getAPIData = async() =>{

}





