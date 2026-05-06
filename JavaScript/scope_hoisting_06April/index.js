console.warn('------------ variables in JS--------')

//JavaScript is dynamic typed Lang
//We not need to mentioned the datatypes before the javascript variable, because JS engine itself get the datatype while compilation of code or run.
//var, let, const

var num1 = 25
var num1 = 50     //redeclared  possible
num1 = 100        //reassign    possible
console.log("value of num1 - ",num1)

let num2 = 25
//let num2 = 50     //redeclared - syntaxError
num2 = 100          //reassign   - possible  
console.log("value of num2 - ",num2);

const pancard = "BIGPR4455R"
//const pancard = "BIGPR889R"   //redeclared syntaxError
//pancard = "BIGPR889R"           //reassign   typeError 
console.log('My Pan Card Number - ', pancard)

var num3;
console.log(num3)

let num4;
console.log(num4)

//const adhaarCard;
//console.log(adhaarCard);


//null - nothing or absence value
//undefined - variabled declared but value not assign

