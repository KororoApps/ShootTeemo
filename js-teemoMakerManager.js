import {
  getRandomElement,
  createDivElement,
  createImg,
  changeDivElement,
  randomSize,
} from "./js-randomEltManager.js";
import { animation, movePosition } from "./js-animationManager.js";
import { isPaused } from "./js-pauseManager.js";
import { clickEvent, keypressEvent } from "./js-eventManager.js";

export function teemoMaker() {
  //ANIMATION EN BOUCLE
  const appear = Math.random() * 2000 + 500;
  setTimeout(teemoMaker, appear);

  if (isPaused()) {
    return;
  }

  //TIRAGE ALEATOIR DE L'ELEMENT
  const randomElement = getRandomElement();

  //CREATION DE LA DIV ACCEUILLANT LES PROPTIETES DE L'ELT

  const element = createDivElement();
  const img = createImg(element);

  //DEFINITION DE LA TAILLE/VITESSE/POSITION DE L'ELT
  const size = randomSize();

  //CREATION DE CHQ ELEMENT
  changeDivElement(randomElement, element, img, size);

  let dataPosition = movePosition(size);
  //POSITION DE DEPART DE L'ELT

  const yInit = dataPosition.yInit;
  const xInit = dataPosition.xInit;

  //POSITION MOUVANTE DE L'ELT
  let yCurrent = yInit;
  let xCurrent = xInit;

  //POSITION D'ARRIVEE DE L'ELT
  const yFinal = dataPosition.yFinal;
  const xFinal = dataPosition.xFinal;

  //ANIMATION JS
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

  //SUPPRESSION AU CLICK et COMPTER LES POINTS
  clickEvent(randomElement, element, isPaused, img);
}
//MISE EN PAUSE
keypressEvent(isPaused);
