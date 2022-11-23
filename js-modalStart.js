import { ELEMENTS } from "./js-elementsManager.js";

export const modalOpen = document.querySelector(".modal");
export const modalClose = document.querySelector(".modal-close");

//AFFICHER LES IMAGES ET LES POINTS DANS LES REGLES DU JEU
//RECUP DIV IMAGES-FLEXBOX
const imagesFlexbox = document.querySelector(".images-flexbox");

export const listElements = () => {
  //LISTER LES ELEMENTS
  ELEMENTS.forEach((element) => {
    for (let i = 0; i < element.src.length; i++) {
      const picture = element.src[i];
      const createPicture = document.createElement("div");
      imagesFlexbox.appendChild(createPicture);
      createPicture.classList.add("image-flexbox");
      const img = document.createElement("img");
      createPicture.appendChild(img);
      img.classList.add("image-teemo");
      img.src = picture;
      const createP = document.createElement("p");
      createPicture.appendChild(createP);
      createP.classList.add("score");
      if (element.score > 0) {
        createP.textContent = `+ ${element.score} points`;
      } else {
        createP.textContent = `- ${Math.abs(element.score)} points`;
      }
    }
  });
};
