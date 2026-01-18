function add(callback) {
  let x = 2;
  let y = 3;
  console.log("Sum :", x + y);
  callback();
}

add(function () {
  console.log("Addition is done");
});

function subtract(callback) {
  let x = 2;
  let y = 3;
  console.log("Difference :", x - y);
  callback();
}

subtract(function () {
  console.log("Subtraction is done");
});
