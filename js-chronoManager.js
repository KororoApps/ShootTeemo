const chrono = document.querySelector(".chrono");
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let startTime;
let pauseTime;
let resumeTime;

export const chronoStart = () => {
  startTime = Date.now();
  setInterval(checkTime, 40);
};

export const chronoPause = () => {
  pauseTime = Date.now();
};

export const chronoResume = () => {
  resumeTime = Date.now();
  startTime = startTime + (resumeTime - pauseTime);
  pauseTime = null;
};

const padZero = (value, number) => `${value}`.padStart(number, "0");

const checkTime = () => {
  if (pauseTime) {
    return;
  }
  const elapsedTime = Date.now() - startTime;
  milliseconds = elapsedTime % 1000;
  seconds = ((elapsedTime - milliseconds) / 1000) % 60;
  minutes = ((elapsedTime - milliseconds) / 1000 - seconds) / 60;
  chrono.textContent = `${padZero(minutes, 2)} : ${padZero(
    seconds,
    2
  )} : ${padZero(milliseconds, 3)}`;
};
