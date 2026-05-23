console.warn(`------------ Promise () ---------`)

//blocking operations 
/* console.log(1)
console.log(2)

for(let i=0; i < 1000000000;i++){
    console.log()
}

console.log(3)
console.log(4)
console.log(5) */

//aync javascript
/* console.log('start')
console.log(1)
console.log(2)

setTimeout(()=>{
    console.log(3)
},30*1000)

console.log(4)

setTimeout(()=>{
    console.log(5)
},40*1000)

console.log(6)
console.log('end') */

//
/* console.log('start')
console.log(1)
console.log(2)

setTimeout(()=>{
    console.log(3)
},0)

Promise.resolve().then(()=>console.log(4))

function info () {
    console.log(5)
}

console.log(6)
info()

setTimeout(()=>{
    console.log(7)
},0)

Promise.resolve().then(()=>console.log(8))

console.log('end')
 */
//start 1 2 6 5 end 3 4 7 8
//start 1 2 6 5 end 4 8 3 7


const response = fetch('https://jsonplaceholder.typicode.com/users')
console.log(response)
