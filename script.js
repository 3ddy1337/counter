// Save HTML elements in JS variables
const countNumber = document.getElementById("counter");
const button = document.getElementById("reset-button");

// Starting count or after reset
let count = 0;
let countHundrets = 0;

// HTML render
function updateCounter() {
  count++;
  countHundrets++;
  countNumber.textContent = count;
  if (countHundrets % 100 === 0) {
    countHundrets = 0;
  }
  countNumber.style.background = `linear-gradient(90deg, rgb(220, 183, 82) ${countHundrets}%, white 0%)`;
}

// Accepted keys (space & enter) for counts
function keydownHandler(e) {
  if (e.key === " " || e.key === "Enter") {
    updateCounter();
  }
}

// Reset = Reload page
function resetCount() {
  location.reload();
}

// Click Listener
countNumber.addEventListener("click", updateCounter);

// Enter and Space Listener
window.document.addEventListener("keydown", keydownHandler);

// Reset Listener
button.addEventListener("click", resetCount);

// Calculate responsive height
function windowHeight() {
  let result =
    window.innerHeight -
    document.querySelector("header").offsetHeight -
    document.querySelector("h2").offsetHeight;
  result = result / 2 + "px";
  countNumber.style.paddingTop = result;
  countNumber.style.paddingBottom = result;
}

// Listener for screensize
window.addEventListener("resize", windowHeight);
