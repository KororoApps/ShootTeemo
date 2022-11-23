import { laughTeemo } from "./js-audioManager.js";
import { incrCounter } from "./js-counterManager.js";
import { isPaused } from "./js-pauseManager.js";
import { speedUp } from "./js-quickManager.js";

//POSITIONS
export function movePosition(size) {
  let dataPosition = {
    yInit: window.innerHeight + size,
    xInit: size / 2 + Math.random() * (window.innerWidth - size),
    yFinal: -size,
    xFinal: size / 2 + Math.random() * (window.innerWidth - size),
  };
  return dataPosition;
}

//INCREMENCE DE Y
const yPlusMin = 1;
const yPlusMax = 3;
const incryY = yPlusMin + Math.random() * (yPlusMax - yPlusMin * 2);

//ANIMATION AVEC JS
export function animation(
  yInit,
  yCurrent,
  yFinal,
  xInit,
  xCurrent,
  xFinal,
  element,
  randomElement,
  size
) {
  if (yCurrent < yFinal && !element.classList.contains("remove")) {
    incrCounter(randomElement.scoreDisappear);
    laughTeemo(randomElement);
    element.remove();
    return;
  }

  if (isPaused()) {
    requestAnimationFrame(() =>
      animation(
        yInit,
        yCurrent,
        yFinal,
        xInit,
        xCurrent,
        xFinal,
        element,
        randomElement,
        size
      )
    );

    return;
  }

  let xCurrentTmp = xCurrent;
  const totalRound = Math.ceil(
    (window.innerHeight + size * 2) / Math.floor(incryY)
  );
  const step = Math.ceil(xFinal - xInit) / totalRound;
  xCurrentTmp += step;

  let yCurrentTmp = yCurrent - incryY * speedUp;

  element.style.top = `${yCurrentTmp}px`;
  element.style.left = `${xCurrentTmp}px`;

  requestAnimationFrame(() =>
    animation(
      yInit,
      yCurrentTmp,
      yFinal,
      xInit,
      xCurrentTmp,
      xFinal,
      element,
      randomElement,
      size
    )
  );
}
