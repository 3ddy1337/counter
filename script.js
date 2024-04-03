// Save HTML elements in JS variables
const countNumber = document.getElementById("counter");
const button = document.getElementById("reset-button");

// Starting count or after reset
let count = 0;

// HTML render
function updateCounter() {
  count++;
  countNumber.textContent = count;
  countNumber.style.background = `linear-gradient(90deg, rgb(220, 183, 82) ${count}%, white 0%)`;
  if (count >= 100) {
    let newCount = count - 100;
    countNumber.style.background = `linear-gradient(90deg, rgb(220, 183, 82) ${newCount}%, white 0%)`;
  }
}

function resetCount() {
  count = 0;
  countNumber.textContent = count;
  countNumber.style.background = `linear-gradient(90deg, rgb(220, 183, 82) ${count}%, white 0%)`;
}

// Click Listener
countNumber.addEventListener("click", updateCounter);

// Enter and Space Listener
document.addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "Enter") {
    updateCounter();
  }
});

// Reset Listener
button.addEventListener("click", resetCount);

//
