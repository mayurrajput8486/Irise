const htmlBody = document.body
const themebutton = document.getElementById('btn')

const currentTheme = localStorage.getItem('theme')

if(currentTheme === 'dark'){
    htmlBody.classList.add('dark-mode')
    themebutton.textContent = 'Light Mode'
}

//contextAPI - localStorage

function toggleTheme() {
    htmlBody.classList.toggle('dark-mode')

    if (htmlBody.classList.contains('dark-mode')) {
        themebutton.textContent = 'Light Mode'
        localStorage.setItem('theme','dark')
    } else {
        themebutton.textContent = 'Dark Mode'
        localStorage.setItem('theme','light')
    }
}



/* //setItem(key,value)
localStorage.setItem('theme','dark')
localStorage.setItem('name','virat')

const read = localStorage.getItem('name')
console.log(read);

//clear key from localStorage
localStorage.clear()
//localStorage.removeItem('name')
//localStorage.removeItem('theme')

//XSS - Cross Site Scripting 
//HTTP Cookies - 2min
//JWT token - cookies 
 */
