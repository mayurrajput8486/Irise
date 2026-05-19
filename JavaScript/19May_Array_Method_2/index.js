console.warn(`------ splice () - replace element ----`)

const fruits = ['apple','banana','mango','orange']
//['apple','banana','grapes','orange']
console.log(fruits)
fruits.splice(2,1,'grapes')

//['apple','grapes']
console.log(fruits)

fruits.splice(1,1)
fruits.splice(2,1)

console.log(fruits)

/* fruits.splice(1,2)
console.log(fruits) */

console.warn(`---------- map (callback function) --------`)
//map() return new array 
//map() return same length array
//map () trnasform the original array

const arr1 = [10,20,30,40,50]
//divide each ele by 5
//output - [2,4,6,8,10]
const result1 = arr1.map((num)=>{
    //num = 10, 20
    //return 10 / 5 = 2
    //return 20 / 5 = 4
    return num / 5
})
console.log(result1)
//[2,4]

const greet = ['Virat','MS Dhoni','Rohit','Jadeja','Gill']
//['welcome Virat', 'Welcome MS Dhoni']
const greetUser = greet.map(function (name) {
    return `Welcome ${name}`
})
console.log(greetUser)

const cartItem = [
    {name : 'Milk', price : 38, category : 'dairy product'},
    {name : 'Rice Oil', price : 100, category : 'houehold '},
    {name : 'Paneer', price : 100, category : 'dairy product'},
    {name : 'Perfume', price : 500, category : 'cosmetic'}
]

const priceGST = cartItem.map((item)=>{
    return {...item,price : item.price + item.price*18/100}
})
console.log(priceGST)

const students = [
    {name : 'virat', marks : 95},
    {name : 'Rohit', marks : 79},
    {name : 'Jaspreet', marks : 85},
    {name : 'rishabh', marks : 39},
    {name : 'Siraj', marks : 40}
]
//above 90 = A
//above 70 = B
//above 40 = C
//below 40 = Fail

const stduentsGrade = students.map((stu)=>{
    if(stu.marks >= 90){
        return {...stu,grade : stu.grade = 'A'}
        //       key   :  value
    }else if(stu.marks >= 80){
        return {...stu,grade : stu.grade = 'B'}
    }else if(stu.marks >= 40){
        return {...stu,grade : stu.grade = 'C'}
    }else{
        return {...stu,grade : stu.grade = 'Fail'}
    }

    //...stu, ternary operator
})
console.log(stduentsGrade)

const usersData =[
    {name : 'virat', email : 'vk@gmail.com',password : 'virat@123', username : 'xyz'},
    {name : 'Rohit',email : 'rs@gmail.com', password : 'rohit@123', username : 'xyz'},
    {name : 'Jaspreet',email : 'jssi@gmail.com', password : 'jassi@123', username : 'xyz'},
    {name : 'rishabh',email : 'rp@gmail.com', password : 'rishabh@123', username : 'xyz'},
    {name : 'Siraj', email : 'ms@gmail.com',password : 'siraj@123', username : 'xyz'}
]

const dashBoard = usersData.map((user)=>{
    //return {name : user.name, email : user.email}
    const {password,username, ...rest} = user
    return rest;
})
console.log(dashBoard)
/* const emp = {
    name : 'Virat'
}
emp.age = 35
emp.contact = 7744556633
console.log(emp) */






//Each item add 18% GST
//lets consider - item - 100RS - 18% applicable = 118
//price + price*18/100 - GST

const myArray = [10,20,30,40,50]
// 30,     10,20,40,50

const [a,b,c,...d] = myArray
const x = [a,b,...d]
console.log(x)
console.log(c)

 

