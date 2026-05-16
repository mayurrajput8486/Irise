//I Love JavaScript 
/* console.log('I Love JavaScript')
console.log('I Love JavaScript') */

console.warn(`--------- For Loop ---------`)
//Print above statement 5 times
for(let i=1; i <= 5; i++){
    //value intialize --- condition
    // i = 1;  1 <= 100  ---- true --- code ------ increment
    // i = 1; 1 <= 100; i++
    // i = 1 +1 = 2 (latest)
    //i = 101; 101 <= 100 - false ---- terminate
    console.log(`${i} - I Love JavaScript`)
}

const products = ["AC","Fan","Fridge","Cooler","TV",'Washing Machine']

console.log(products.length)

for(let i = 0; i < products.length;i++){
    console.log(products[i])
}

console.warn(`---------- while loop ------`)

let i = 0
while(i > products.length){
    console.log(products[i])
    i++;
}

console.warn(`---------- do....while loop ------`)

let j = 0;
do{
    console.log(products[j])
    j++;
}while(j < products.length)

console.warn(`---------- for...of ---------`)
for(let item of products){
    console.log(item)
}

const emp = {
    name : 'Rohit',
    age : 40
}

for(let key of Object.keys(emp)){
    console.log(emp[key])
}

console.warn(`---------- for...in ---------`)

for(let item in products){
    console.log(item, products[item])
}

const users = {
    name : 'Virat',
    age : 35
}


for(let key in users){
    console.log(key)
}

console.warn(`---------- for loop vs while loop------`)
//print 5 to 1
for(let i=5; i>=1; i--){
    console.log(i)
}

/* let balance = 1000
let userWithdraw = prompt('Enter Withdraw Amount')
while(balance > 0){
    console.log('Current Balance ', balance)
    console.log('Withdraw',Number(userWithdraw))

    balance = balance - Number(userWithdraw)

    console.log('Remaining balance', balance)
    
} */


//for - i know how any times loop should loop
//mostly used with array

//while - I dont know how many times loop should run
//Mostly used with with input 

//While - ATM System, Login System, OTP Verification, API retry system 

//for...of - only for array
//for...in - only for Object (in rear case array)





