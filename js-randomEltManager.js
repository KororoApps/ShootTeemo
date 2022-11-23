import { ELEMENTS } from "./js-elementsManager.js";

//PROBABILITE D'APPARITION et RECUPERATION ALEATOIRE D'UN ELT DU TABLEAU
export const getRandomElement = () => {
  let cpt = 0;
  const probaArray = Math.random() * 100;
  return ELEMENTS.find((element) => {
    if (cpt <= probaArray && probaArray < cpt + element.probability) {
      return true;
    }
    cpt += element.probability;
    return false;
  });
};

//RANDOM SIZE
const minSize = Math.min(window.innerWidth, window.innerHeight) / 10;
const maxSize = Math.min(window.innerWidth, window.innerHeight) / 3;

export const randomSize = () => {
  return Math.random() * (maxSize - minSize * 2) + minSize;
};

//CREATION BALISE AVEC CLASSE
export const createDivElement = () => {
  const element = document.createElement("div");
  document.body.appendChild(element);
  element.classList.add("picture");
  return element;
};

//CREATION BALISE IMG
export const createImg = (element) => {
  const img = document.createElement("img");
  element.appendChild(img);
  return img;
};

export const changeDivElement = (randomElement, element, img, size) => {
  //RECUPERATION ALEATOIRE D'UNE IMAGE DE L'OBJET RECUPERE
  const elementSrc = randomElement.src;
  const randomSrc = Math.floor(Math.random() * elementSrc.length);
  const randomPicture = elementSrc[randomSrc];

  //INSERTION IMAGE ALEATOIRE
  img.src = randomPicture;

  //DESCRIPTION IMAGE AJOUTEE
  img.classList.add(randomElement.id);

  //COUPER IMAGE
  const elementClipPath = randomElement.clipPath;
  element.style.clipPath = elementClipPath[randomSrc];

  //TAILLE ALEATOIRE DE LA DIV

  element.style.height = size + "px";
  element.style.width = size + "px";

  //TAILLE ALEATOIRE DE L'IMAGE
  img.style.height = size + "px";

  //PLACEMENT DE L'IMAGE SELON SA TAILLE
  element.style.zIndex = Math.floor(size);

  return element;
};
