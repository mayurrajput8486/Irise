console.error('----concept of immutable and mutable --------')
/* let num1 = 100
let num2 = num1
num2 = 0
console.log('value of num1 - ', num1)
console.log('value of num2 - ', num2) */

//reference datatype - 
let student1 = {
    name : 'Ramesh'
}
//student1 - xx101xx
let student2 = student1 //xx101xx
student2.name = "Suresh" //xx101xx

console.log('value of student 2 - ',student2)
console.log('value of student 1 - ',student1)

console.warn('------------ Primitive Datatypes --------')
console.warn('------- number --------')

//price = 750.50
//float price = 750.50f
//typeof
const price = 750.50
console.log('price of mobile cover - ', price, 'datatype of price -', typeof price)

const creditCard = 1234123412341234
console.log('my credit card no -', creditCard, 'datatype of creditCard - ', typeof creditCard)

console.warn('------- bigint --------')

const utr = 1234567890123456789012345n
console.log('gpay UTR for payemnt -', utr, 'datatype of UTR -', typeof utr)

console.warn('---------- string -----')

const pancard = "BIGPR7589R"
console.log('my pan card no -', pancard, '- ', typeof pancard)

const ispresent = 'true'
console.log('students are present -', ispresent, '-', typeof ispresent)

console.warn('---------- boolean -----')
let isActive = true
console.log(isActive, typeof isActive)

console.warn('-------------- undefined --------')
//variable is declared but value not assign
var fullname;
console.log('value of fullname -', fullname, '-',typeof fullname)

console.warn('---------------- null ----------')
//Historic bugs in programming 
let userPanCard = null
console.log('value of userPanCard - ', userPanCard, '-', typeof userPanCard)

