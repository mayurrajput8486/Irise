const htmlBody = document.body
const themebutton = document.getElementById('btn')

const currentTheme = localStorage.getItem('theme')

if(currentTheme === 'dark'){
    htmlBody.classList.add('dark-mode')
    themebutton.textContent = 'Light Mode'
}

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