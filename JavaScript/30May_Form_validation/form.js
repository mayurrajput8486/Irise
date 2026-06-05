/* ----------- toggle theme dark and light -------------- */
const htmlBody = document.body
const themebutton = document.getElementById('btn')

const currentTheme = localStorage.getItem('theme')

if (currentTheme === 'dark') {
    htmlBody.classList.add('dark-mode')
    themebutton.textContent = 'Light Mode'
}

function toggleTheme() {
    htmlBody.classList.toggle('dark-mode')

    if (htmlBody.classList.contains('dark-mode')) {
        themebutton.textContent = 'Light Mode'
        localStorage.setItem('theme', 'dark')
    } else {
        themebutton.textContent = 'Dark Mode'
        localStorage.setItem('theme', 'light')
    }
}


/* --------------------- form validation ----------------
 */

/* 
    Part 1 - WHAT IS REGEX

    Regex (Regular Expression) is a PATTERN  used to check whether the string matches ceratin rule or not.

    How to use it - 

    const fullNamerule = /^[a-z]{2,}$/
    console.log('check rule - ',fullNamerule.test('virat'))
    console.log('check rule - ',fullNamerule.test('abc'))
    console.log('check rule - ',fullNamerule.test('ABC'))
    console.log('check rule - ',fullNamerule.test('v k'))
    console.log('check rule -', fullNamerule.test('rohit'))

    REGEX SYMBOL FOR QUICK GUIDE
    ----------------------------
    /regEx Pattern /= basic foundation of regEx
    ^               = start of the string
    $               = end of the string
    [a-z]           = any lowercase letter a to z
    [A-Z]           = any uppercase letter A to Z
    [a-zA-Z]        = acccept both cases a to z
    [0-9]           = any digit 0 to 9
    \d              = any digit 0 to 9
    \s              = space or tab accepted
    [a-zA-Z\s\d]    = accept lowercase, uppercase letters a to z. Space and digit allowed
    {3}             = exactly 3 number of character accepted.
    {3,}            = 3 or more character accepted.
    {3,10}          = Minimum 3 and maximum 10 character allowed
    (?=.*[A-Z])     = in you string must have uppercase character
    .               = any character
    [^ ]            = Not this character (inside character not allowed in string)
    [a-zA-Z\d@#$%&*]= string having lowercase, uppercase, digit and special character from @,#,$,%,&,*

*/

/* 
    store all regex patterna in one object
    key = input filed id
    value = regex pattern for that field 

*/
let patterns = {
    fullname: /^[a-zA-Z\s]{2,}$/,
    username: /^[a-zA-Z0-9_]{4,15}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    //virat@gmail.com --- user@domain.com
    phone: /^[6-9]{1}[0-9]{9}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$%&_]).{5,}$/
}

/* This function is called EVERY TIME the user entered data */
function checkField(id) {
    //Get the user input and values
    let inputEle = document.getElementById(id)

    //Get user input value and remove extra whitespaces
    let typedValue = inputEle.value.trim()

    //Get the error message element
    let errorInput = document.getElementById(id + '-err')

    //Example : id = "email" ----> "email-err"


    //Check if the value is valid

    /* Start assuming the is not valid */
    let isValid = false;

    /* 
        STEP 2 - Specialcase for confirmPassword
        No regex needed - just check if it match the password filed 
    */

    if (id === 'confirmPassword') {
        //"fullname" === "confirmPassword"          false       else
        //"email"    === "confirmPassword"          false       else
        //"username" === "confirmPassword"          false       else
        //"password" === "confirmPassword"          false       else
        //'confirmPassword' === 'confirmPassword'   true        if
        let originalpasswordValue = document.getElementById('password').value
        let passwordMatch = typedValue.length > 0 && typedValue === originalpasswordValue
        isValid = passwordMatch
    } else {

        /* if Above condition is false then - This else part is test the regex pattern  */
        //pattern[id]   - call every object field 
        //.test(typeValue) --- test() function return true or false
        //if pattern is match then true return
        //if pattern is not match then false return
        let patternMatch = patterns[id].test(typedValue)
        //                 patterns['password'].test(typedValue)
        isValid = patternMatch
    }

    /* 
        STEP 3 -  Update the input border color
        green - field valid
        red   - field invalid 
    
    */

    if (typedValue.length === 0) {
        inputEle.classList = ''
    } else if (isValid) {
        inputEle.className = 'valid'
    } else {
        inputEle.className = 'invalid'
    }

    /* 
        classList.add('class')  add class dynamically after click (hum new class create karate hai)    
        className               assign class (joh pahale se he created hai)
    */

    /* 
        STEP 4 - Show and hide error message
        In form css - 
        .err-msg{display : none} - by default hidden
        .err-msg.show {display : block} - 
    */

    
    console.log(isValid)
    if(!isValid && typedValue.length > 0){
        errorInput.classList.add('show')
    }else{
        errorInput.classList.remove('show')
    }


    return isValid;
}

/* To submit form create function */

function submitForm () {
    
}