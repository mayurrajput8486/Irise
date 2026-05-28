/* const divEle1 = document.getElementById('content1')
divEle1.style.color = 'red'

const divEle2 = document.getElementsByClassName('content2')

const divEle3 = document.getElementsByTagName('div')

divEle2[0].style.color ='red'
divEle2[1].style.color = 'green'
divEle2[2].style.backgroundColor = 'yellow'
divEle3[0].style.backgroundColor = 'blue'
console.log(divEle1);
console.log(divEle2)
console.log(divEle3)

const arr = [1,2,3]
console.log(arr); */

//Toggle the CSS of html element 

//lets target element first


// h2Ele.classList.add('a')
// h2Ele.classList.remove('a')

function changeCSS () {
    const h2Ele = document.getElementById('content')
    const button = document.getElementsByTagName('button')[0]

    h2Ele.classList.toggle('a')

    //Agar h2 element ko class implement huaa hai toh button ka naam change karana hai
    if(h2Ele.classList.contains('a')){
        button.textContent = 'Reset'
    }else{
        button.textContent = 'Apply CSS'
    }
}

//global - let checkBulb = true

//Change the path of image dynamically
function bulbmode () {
    const bulbimg = document.getElementById('bulb')
    const button = document.getElementsByTagName('button')[1]

    if(bulbimg.src.endsWith('pic_bulboff.gif')){
        bulbimg.src = 'pic_bulbon.gif'
        button.textContent = 'OFF'
    }else{
        bulbimg.src = 'pic_bulboff.gif'
        button.textContent = 'ON'
    }
    //endsWith() - check the whole string 
}
