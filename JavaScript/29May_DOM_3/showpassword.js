//Agar humko kisi bhi htl element ke upar event attached karana hai toh we use addEventListner(event,function)
/* const data = document.getElementById('heading')

data.addEventListener('click',()=>{
    data.style.backgroundColor = 'yellow'
}) */

//onclick - click
//onchange - change
//onblur - blur

//React + JavaScript - To handle input element or form element we always use onchange event

const password = document.getElementById('password')
const showpassword = document.getElementById('showpassword')
console.log(password,showpassword);


showpassword.addEventListener('change',()=>{
    //password.type = showpassword.checked ? 'text' : 'password'
    if(showpassword.checked){
        password.type = 'text'
    }else{
        password.type = 'password'
    }
    //password.type = 'text'
})

