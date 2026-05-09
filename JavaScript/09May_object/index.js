console.warn('----------- Objct in JS ----------')
console.warn('--------- 1.Object Literal Method -------')

const employee = {
    empID : 'TCS_10125',
    name : "Ajinkya Rahane",
    contact : 7744556633,
    isWorking : true
}
//Read all data of Object
console.log(employee);
//console.table(employee)

//Access Object Properties 
console.warn('------ dot(.) notation-----')
console.log(employee.empID, employee.name, employee.contact)

console.warn('------ bracket([]) notation-----')
console.log(employee["empID"], employee['name'],employee['contact'])

console.warn('---------- Modify Object Properties -------')

const student = {
    name : "Rohit Sharma",
    age : 35,
    city : "Mumbai"
}
//Data read
console.log(student)

//update age 35 to 38
//update city Mumbai to Nagpur
student.age = 38
student.city = "Nagpur"
console.log(student)

//Add new property contact - 7711225533
student.contact = 7711225533
console.log(student)

//Delete property city 
delete student.city
delete student.contact
console.log(student)

console.warn('--------------- nested object -------')

const emp = {
    name : 'Jaspreet',
    role : 'FullStack Developer',
    contact : 7744778899,
    techStack : ["HTML","CSS","JS","React","Docker"],
    address : {
        state : 'Maharashtra',
        city : 'Pune',
        area : {
            streetName : 'Karve Nagar,Lane 4',
            zipcode : 411051
        }
    }
}

console.log(emp)
console.log('Emp Name and techstack - ',emp.name,'-',emp.techStack[0],emp.techStack[1],emp.techStack[2])
console.log('emp address -', emp.address.area.streetName, emp.address.city, emp.address.state, emp.address.area.zipcode)
//Karve Nagar,Lane 4 Pune Maharashtra 411051

console.error('--------- 2. using new Object() -------- ')

const mobile = new Object()
mobile.brand = "Apple"
mobile.model = 'Iphone 17'
mobile.price = 75000
mobile.camera= '24MP'
console.log(mobile)
