document.write('<h1>I am Extrenal JS</h1>')

function showDateTime () {
    let time = new Date()
    console.log(time)
    document.getElementById('show').textContent = time
}
//showDateTime()

let arr1 = [1,2,3,4,5,6,7,8,9,10]
//console.log(arr1)
let evenElement = arr1.filter((num)=>{
    return num %  2 === 0
})
console.log(evenElement)

let str1 = 'Welcome'
console.log(typeof(str1))
console.log(Array.isArray(str1))
