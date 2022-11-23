const counterDisplay = document.querySelector(".counterDisplay");
let counter = 0;

export function incrCounter(score) {
  counter += score;
  counterDisplay.textContent = counter;
}
