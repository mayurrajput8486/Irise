/* console.warn(`------------ getElementById ()-----------`)
//innerText, innerHTML, textContent
console.warn(`----------- innerText ------`)
const h1Ele = document.getElementById("h1")
const h1content = document.getElementById('h1').innerText

console.log(h1Ele);
console.log(h1content);


console.warn(`----------- innerHTML ------`)

const divEle = document.getElementById('content')
const divContent = document.getElementById('content').innerText
const divMsg = document.getElementById('content').innerHTML

console.log(divEle)
console.log(divContent);
console.log(divMsg);

console.warn(`----------- textContent ------`)

const h2Ele = document.getElementById('h2')

const h2Content = document.getElementById('h2').innerText
//does not display hidden part of the content

const h2TextContent = document.getElementById('h2').textContent
//it display hidden part as well

console.log(h2Ele);
console.log(h2Content)
console.log(h2TextContent); */

function bulbON () {
    document.getElementById('bulb').src = './pic_bulbon.gif'
    document.getElementById('bulb').alt='bulb on'

}

function bulbOFF () {
    document.getElementById('bulb').src='./pic_bulboff.gif'
    document.getElementById('bulb').alt='bulb off'
}


const changeCSS = () =>{
   // document.getElementById('id1').style.color = 'red'

   document.getElementById('id1').style.cssText = 'background-color : navy; color : white; padding : 15px; text-align : center'

   document.getElementById('id1').innerText = 'React is Frontend JavaScript Library'
}







