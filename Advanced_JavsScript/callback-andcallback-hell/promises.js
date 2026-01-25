// lets write syntax od promise object without arrow function
const myPromise = new Promise(function (resolve, reject) {
  // Producing code
});

// Example
let promiseObj = new Promise(function (resolve, reject) {
  console.log(
    "Producing code is executed automatically as soon as the promise object is created!."
  );
});
