window.onload = function () {
  cardStyles();
  bodyStyles();
  stampStyles();
  buttonStyles();
};

let cont = document.querySelector(".container");
let icons = ["♦", "♥", "♠", "♣"];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let randIcon = Math.floor(Math.random() * icons.length);
let randValue = Math.floor(Math.random() * values.length);

// Generate stamps
let stampOne = document.createElement("h1");
stampOne.classList.add("top-left");
let stampTwo = document.createElement("h1");
stampTwo.classList.add("bottom-right");
stampOne.textContent = icons[randIcon];
stampTwo.textContent = stampOne.textContent;
cont.appendChild(stampOne);
cont.appendChild(stampTwo);

// Generate number
let value = document.createElement("p");
value.classList.add("center");
value.textContent = values[randValue];
cont.insertBefore(value, stampTwo);

function cardStyles() {
  // Card styles
  cont.style.height = "60vh";
  cont.style.background = "white";
  cont.style.border = "1px solid black";
  cont.style.borderRadius = "10px";
  cont.style.width = "40vh";
  cont.style.margin = "10vh auto auto auto";
  cont.style.display = "flex";
  cont.style.flexDirection = "column";
  cont.style.justifyContent = "space-between";
}

function bodyStyles() {
  // Page styles
  document.body.style.background = "green";
}

function stampStyles() {
  let stpOne = document.querySelector(".top-left");
  let mid = document.querySelector(".center");
  let stpTwo = document.querySelector(".bottom-right");
  // Aligning text
  mid.style.textAlign = "center";
  stpTwo.style.textAlign = "right";
  // Padding on both
  stpOne.style.paddingLeft = "20px";
  stpTwo.style.paddingRight = "20px";
  // Font size
  stpOne.style.fontSize = "75px";
  mid.style.fontSize = "75px";
  stpTwo.style.fontSize = "75px";
  // Modify margins
  stpOne.style.margin = "0";
  mid.style.margin = "0";
  stpTwo.style.margin = "0 0 5px 0";
  // Colors depending on textContent
  if (stpOne.textContent == "♠" || stpOne.textContent == "♣") {
    stpOne.style.color = "black";
    mid.style.color = "black";
    stpTwo.style.color = "black";
  } else {
    stpOne.style.color = "red";
    mid.style.color = "red";
    stpTwo.style.color = "red";
  }
}

// Reset card button
let button = document.createElement("button");
let buttonDiv = document.createElement("div");
buttonDiv.classList.add("div");
button.classList.add("btn");
button.innerHTML = "Click to generate a random card!";
cont.parentNode.insertBefore(buttonDiv, cont.nextSibling);
buttonDiv.appendChild(button);

function buttonStyles() {
  // Button styles
  let btn = document.querySelector(".btn");
  let div = document.querySelector(".div");
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.margin = "10vh 0 0 0";
  div.style.height = "5vh";
  div.style.borderRadius = "10px";
}

function resetCard() {
  randIcon = Math.floor(Math.random() * icons.length);
  randValue = Math.floor(Math.random() * values.length);
  stampOne.textContent = icons[randIcon];
  stampTwo.textContent = stampOne.textContent;
  value.textContent = values[randValue];
  stampStyles();
}

// 10 second timer to change card
let myTimer = window.setInterval(interval, 10000);

function interval() {
  resetCard();
}

// Change card when click on button
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    resetCard();
  }
  clearInterval(myTimer);
  myTimer = setInterval(interval, 10000);
});
