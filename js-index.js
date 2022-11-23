import { modalOpen, modalClose, listElements } from "./js-modalStart.js";
import { chronoStart } from "./js-chronoManager.js";
import { quickUp, quickStop } from "./js-quickManager.js";
import { teemoMaker } from "./js-teemoMakerManager.js";

window.addEventListener("load", () => {
  modalOpen.showModal();
  listElements();
  quickStop();
});
modalClose.addEventListener("click", () => {
  modalOpen.close();
  teemoMaker();
  chronoStart();
  quickUp();
});
