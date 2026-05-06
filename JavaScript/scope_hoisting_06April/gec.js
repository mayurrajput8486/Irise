var a = 20 
let b = 50

function greet () {
    console.log('Welcome')
}

const c = 100
greet()

/* 
  Global Execution Context

   Memory Phase                 Code Phase
   var  a = undefined             a = 20
   let  b = <value not avi>       b = 50
   const c =  <value not avi>     c = 100


*/