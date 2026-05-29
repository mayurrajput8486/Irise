
const result = document.getElementById('result')

function showValue (value) {
    result.textContent += value
    
}

//eval()
function solveExpression () {
    result.textContent = eval(result.textContent)
}

function clearScreen () {
    result.textContent = ''
}

function clearLastentry () {
    result.textContent = result.textContent.slice(0,-1)
}


let str1 = 'Welcome'
//          0123456
console.log(str1.slice(0,-1))
