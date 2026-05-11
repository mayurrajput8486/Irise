console.warn('------------ Object in JS ---------')

//Object literal method
const employee = {
    // key: value
    empID: 10101,
    fullname: "Rakesh Sharma",
    email: 'rakesh@gmail.com',
    city: 'Pune',
    role: 'FullStack Dev',
    address: {
        state: 'Maharashtra',
        street: 'Karve Nagar',
        building: 'Krishani Plaza'
    }
}
employee.city = "Mumbai"
//print all object property
console.log(employee)

//Bracket notation
console.log('Emp Name -', employee["fullname"])
console.log('Emp ID -', employee["empID"])

//dot notation 
console.log('Emp Details -', employee.fullname, employee.email)

//for.....in loop
//for loop, while loop, do...while loop
// for...of loop, for...in loop
console.warn('------- for....in loop - object based ---------')

//for in loop only read top level property

//If you want to read nested property we have to use concept of recursion

for (const props in employee) {
    console.log(props, '- ', employee[props])

    //employee["empID"]
    //employee["fullname"]
}

console.warn('--------- Object Built in method ---------')

const user = {
    name: 'Aditya Shelke',
    instID: 'adity105',
    contact: 7744556633
}

const userInfo = {}

//Object.key(objName)
//Return an array with keys
const keysInObject = Object.keys(user)

const objValue = Object.values(user)

//Convert Object into array

const userDetails = Object.entries(user)

//Object.assign(targetObject, sourceObject)

Object.assign(userInfo, user)

console.log(keysInObject)
console.log(objValue)
console.log(userDetails)
console.log(userInfo)

const productData = {
    brand: 'OnePlus',
    model: '12'
}
const productSpect = {
    ram: '12GB',
    storage: '256GB'
}

const camera = {
    frontCamera: '24MP',
    rearCamera: '64MP'
}

const productDetails = {}
Object.assign(productDetails, productData, productSpect, camera)

console.log(productDetails)

const product = {
    ...productData,
    ...productSpect,
    ...camera
}

console.log(product)

console.warn('---------- freez and seal method in JS ------------')

console.error('---------- freeze () ---------')
const student = {
    rollNo: 101,
    name: 'Sandeep Sharma',
    contact: 7744556633,
    std: 'VI'
}
console.log(student)

//Add new property - city = 'Pune'
student.city = 'Pune'

//Update Value
student.std = 'VII'

//delete std
delete student.std

console.log('latest data -', student)

const sbiCustomer = {
    name: 'Rajesh Mathe',
    username: 'rajesh_mathe9561',
    password: 'Rajesh_101'
}
//Make it immutable

//Add branch property

Object.freeze(sbiCustomer)
// 1. You can not add new property in Object

sbiCustomer.branch = 'Karve Nagar, 411051'

//Update not allowed
sbiCustomer.name = 'Rajesh'

//delete
delete sbiCustomer.password

console.table(sbiCustomer)

console.error('---------- seal () ---------')

const kotakCustomer = {
    name: 'Mayur Rajput',
    username: 'mr.mayurkrajput',
    password: 'mr_mayur@101'
}



Object.seal(kotakCustomer)

//Add new property - not allowed
kotakCustomer.branch = "Nanded City"

//update property name  - allowed
kotakCustomer.name = "Mayur"

//delete property username
delete kotakCustomer.username

console.log(kotakCustomer)


/* const apiFetch = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response)

        let result = await response.json()
        console.log(result)
    } catch (error) {
        console.log('Failed to get data')
    }

}
apiFetch() */
















