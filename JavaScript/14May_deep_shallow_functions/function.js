console.warn(`---- 1. Named Function ------`)

function greet () {
    return 'Welcome to JavaScript'
}
let mygreet = greet ()
console.log(mygreet.length)

console.warn(`--------- 2. Pure JavaScript Function`)

function squareofNum (num) {
    return num*num
    //      2*2 = 4
}
console.log(squareofNum(2))

function withOutReturn (num) {
    console.log(num*num*num)
}

const result = withOutReturn(3)
console.log(result)


function withReturn (num) {
    return num*num*num
}
let data = withReturn(3)
console.log(data*2)

function withConsoleReturn (a) {
    return a*a
}
const data2 = withConsoleReturn(5)
console.log(data2)

function parent () {
    let count = 0
    function child (){
        let count1 = 10
        let sum = count+ count1
        console.log(sum)
    }
    child()
}
parent()

//default 
function profile (name="User"){
    console.log('Welcome '+ name)
}
profile('Virat')
profile('Rohit')
profile()







