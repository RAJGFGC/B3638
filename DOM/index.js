const secondLi = document.getElementById("second-li"); //id
const firstLi = document.querySelector("li"); //cssSelector
const listItems = document.querySelectorAll("li"); //className
const listByTag = document.getElementsByTagName("li"); //tagName
// secondLi.innerText = "This is the second list item.";
// console.log(secondLi);
// console.log(firstLi);
// console.log(document.getElementsByClassName("list-item")); //htmlCollection

listItems[0].style.color = "red";
listItems[0].style.backgroundColor = "yellow";

document.getElementById("add-btn").addEventListener("click", addButtonClick);

function addButtonClick() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const result = num1 + num2;
  document.getElementById("result-label").textContent = "Result: " + result;
}

const p = document.createElement("p");
p.textContent = "This is a new paragraph added via JavaScript.";

// document.body.appendChild(p, "sdfsf");

document.body.append(p, "Testing append with multiple args");
