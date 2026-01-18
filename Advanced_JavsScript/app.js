document.getElementById("processButton").addEventListener("click", function () {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;

  // Call the advanced JS function from app.js
  const result = getNameHypen(input1, input2);

  // Display the result in the output area
  document.getElementById("outputArea").value = result;
});

function getNameHypen(fName, lName) {
  //   return `Full Name: ${fName} ${lName}`;
  return "Full Name: " + fName + "-" + lName;
}

// lets write function with baking cake analogy to expalin callback feature -- "Dingggg!! Your cake is ready"
function bakeCake(cakeType, callback) {
  console.log(`Baking a ${cakeType} cake...`);
  setTimeout(function () {
    console.log(`${cakeType} cake is ready!`);
    callback();
  }, 3000); // Simulate baking time with a 3-second delay
}
function cakeReadyNotification() {
  console.log("Dingggg!! Your cake is ready");
}

function drinkCoffee() {
  console.log("Enjoying a cup of coffee while waiting for the cake...");
}
// Usage
bakeCake("Chocolate", cakeReadyNotification);
drinkCoffee();
