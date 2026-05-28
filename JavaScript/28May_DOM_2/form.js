const htmlBody = document.body
const themebutton = document.getElementById('btn')
const signupDiv = document.getElementById('userSignup')


function toggleTheme () {
    //signupDiv.classList.toggle('dark-mode')
    htmlBody.classList.toggle('dark-mode')

    if(htmlBody.classList.contains('dark-mode')){
        themebutton.textContent = 'Light Mode'
        localStorage.setItem('theme','dark')
    }else{
         themebutton.textContent = 'Dark Mode'
         localStorage.setItem('theme','light')
    }
}