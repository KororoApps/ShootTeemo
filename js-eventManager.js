import { incrCounter } from "./js-counterManager.js";
import { shot, laughDiable } from "./js-audioManager.js";
import { appearDiable } from "./js-appearDiableManager.js";
import { chronoPause, chronoResume } from "./js-chronoManager.js";
import { quickUp, quickStop } from "./js-quickManager.js";
import { togglePause, modalPause } from "./js-pauseManager.js";

export const clickEvent = (randomElement, element, isPaused, img) => {
  //SUPPRESSION AU CLICK et COMPTER LES POINTS
  element.addEventListener("click", () => {
    if (isPaused()) {
      return;
    }
    incrCounter(randomElement.score);
    //RIRE TEEMO DIABLE
    laughDiable(randomElement);

    //BRUIT TIR
    shot();
    //AJOUT CLASSE DIV ELEMENT
    element.classList.add("remove");
    //ELEMENT CLIQUE SUPPRIME

    appearDiable(randomElement, element, img);
    return;
  });
};

export const keypressEvent = (isPaused) => {
  window.addEventListener("keypress", (e) => {
    if (e.key === "p") {
      togglePause();

      if (isPaused()) {
        chronoPause();
        modalPause.showModal();
        quickStop();
      } else {
        modalPause.close();
        chronoResume();
        quickUp();
      }
    }
  });
};
