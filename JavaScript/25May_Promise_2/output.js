//Basic Sync Execution--------------------------

/* console.log("A");
console.log("B");
console.log("C"); */

//A B C

//setTimeout vs Sync Code--------------------------------

/* console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End"); */

//Start end Timeout

// Promise vs setTimeout--------------------------------
/* console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End"); */

//start end Promise Timeout

//Multiple Promises--------------------------------
/* console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D"); */

//A D B C
//Nested setTimeout--------------------------------
/* console.log("Start");

setTimeout(() => {
  console.log("First");

  setTimeout(() => {
    console.log("Second");
  }, 0);

},0);

console.log("End"); */

// start end first second

//Promise Inside setTimeout--------------------------------
/* console.log("Start");

setTimeout(() => {
  console.log("Timeout");

  Promise.resolve().then(() => {
    console.log("Promise Inside Timeout");
  });
}, 0);

console.log("End"); */

//start end Timeout Promise

//Async Await Basics--------------------------------

/* console.log("Start");

async function test() {
  console.log("Inside");

  await Promise.resolve();

  console.log("After Await");
}

test();

console.log("End"); */

//start end inside After await 
//start inside end after await

//Event Loop------------------------------

/* console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

Promise.resolve().then(() => {
  setTimeout(() => {
    console.log("4");
  }, 0);
});

console.log("5"); */

// 1 5 3 2 4

//Nested Promise-----------------------------------------
/* console.log("Start");

Promise.resolve().then(() => {
  console.log("First");

  Promise.resolve().then(() => {
    console.log("Second");
  });

});

console.log("End"); */

//start end first second

//Interview Output Question--------------------------
//Event Loop mechanism - sync, micro, macro

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");

  setTimeout(() => {
    console.log("D");
  }, 0);

});

Promise.resolve().then(() => {
  console.log("E");
});

console.log("F");
//A F C E B D



