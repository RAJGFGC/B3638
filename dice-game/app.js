// 1) Get elements from HTML (DOM)
const dice1El = document.getElementById("dice1");
const dice2El = document.getElementById("dice2");

const totalEl = document.getElementById("total");
const attemptsEl = document.getElementById("attempts");
const winsEl = document.getElementById("wins");
const lossesEl = document.getElementById("losses");
const bestEl = document.getElementById("best");

const messageEl = document.getElementById("message");

const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

// 2) Game data (scoreboard)
let attempts = 0;
let wins = 0;
let losses = 0;
let bestScore = 0;

// 3) Dice faces (number -> emoji)
const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

// 4) Helper: roll a dice (1 to 6)
function rollDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// 5) When we click ROLL
rollBtn.addEventListener("click", () => {
  const d1 = rollDiceNumber();
  const d2 = rollDiceNumber();

  // show emojis
  dice1El.textContent = diceFaces[d1 - 1];
  dice2El.textContent = diceFaces[d2 - 1];

  //Add a rule: if any dice is 6, show “🔥 Lucky Six!. Lets write it as a individual function”
  //   if (d1 === 6 || d2 === 6) {
  //     messageEl.textContent = "🔥 Lucky Six!";
  //     messageEl.className =
  //       "mt-4 text-center text-xl font-semibold text-orange-400";
  //   }

  const total = d1 + d2;

  if (total > bestScore) {
    bestScore = total;
    bestEl.textContent = bestScore;
  }

  // update attempts
  attempts++;
  attemptsEl.textContent = attempts;

  // show total
  totalEl.textContent = total;

  let extraText = "";

  if (d1 === 6 || d2 === 6) {
    extraText = " 🔥 Lucky Six!";
  }

  // win rule
  if (total === 12) {
    wins++;
    winsEl.textContent = wins;
    messageEl.textContent = "🎉 JACKPOT! You got 12!" + extraText;
    messageEl.className =
      "mt-4 text-center text-xl font-semibold text-green-400";
  } else {
    losses++;
    lossesEl.textContent = losses;
    messageEl.textContent = "😄 Not 12! Try again!" + extraText;
    messageEl.className =
      "mt-4 text-center text-xl font-semibold text-yellow-300";
  }

  //Add a “Best Score” that stores the highest total
  //   let bestScore = parseInt(localStorage.getItem("bestScore")) || 0;
  //   if (total > bestScore) {
  //     bestScore = total;
  //     localStorage.setItem("bestScore", bestScore);
  //     messageEl.textContent += " 🏆 New Best Score!";
  //   }
});

// 6) Reset game
resetBtn.addEventListener("click", () => {
  attempts = 0;
  wins = 0;
  losses = 0;
  bestScore = 0;
  bestEl.textContent = "0";

  dice1El.textContent = "🎲";
  dice2El.textContent = "🎲";

  totalEl.textContent = "0";
  attemptsEl.textContent = "0";
  winsEl.textContent = "0";
  lossesEl.textContent = "0";

  messageEl.textContent = "Click ROLL to start!";
  messageEl.className = "mt-4 text-center text-xl font-semibold";
});
