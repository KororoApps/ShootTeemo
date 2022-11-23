const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

const modalPause = document.querySelector(".modalPause");

const pauseGame = document.querySelector(".pause");

const counterDisplay = document.querySelector(".counterDisplay");
let counter = 0;
let pause = false;

const chrono = document.querySelector(".chrono");
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timeout;
let chronoStop = true;

// const incMilliseconds = () => {
//   if (chronoStop) {
//     return;
//   }
//   milliseconds += 100;
//   if (milliseconds >= 1000) {
//     milliseconds = 0;
//     seconds += 1;
//     if (seconds >= 60) {
//       seconds = 0;
//       minutes += 1;
//     }
//   }
//   chrono.textContent = `${minutes} : ${seconds} : ${milliseconds}`;
// };

let initTime;
let pauseTime;

const padZero = (value, number) => `${value}`.padStart(number, "0");

const checkTime = () => {
  if (pause) {
    return;
  }

  const ellapsedTime = Date.now() - initTime;
  milliseconds = ellapsedTime % 1000;
  seconds = ((ellapsedTime - milliseconds) / 1000) % 60;
  minutes = ((ellapsedTime - milliseconds) / 1000 - seconds) / 60;
  chrono.textContent = `${padZero(minutes, 2)} : ${padZero(
    seconds,
    2
  )} : ${padZero(milliseconds, 3)}`;
};

//VITESSE AGUMENTE AVEC TEMPS
let speedUp = 1;
function hurryUp() {
  speedUp += 0.3;
  console.log(speedUp);
}
let speed;

function ring() {
  const audio = new Audio();
  audio.src = "./tir.mp3";
  audio.play();
}

const ELEMENTS = [
  {
    id: "champi",
    src: [
      "./a-champi1-redim.png",
      "./a-champi2-redim.png",
      "./a-champi3-redim.png",
    ],
    probability: 60,
    score: +10,
    scoreDisappear: -5,
    clipPath: [
      "polygon(60% 59%, 83% 57%, 87% 50%, 89% 39%, 89% 25%, 85% 16%, 79% 10%, 73% 6%, 65% 5%, 59% 7%, 49% 14%, 29% 29%, 28% 33%, 31% 38%, 34% 42%, 45% 54%, 34% 65%, 24% 72%, 12% 79%, 5% 85%, 5% 91%, 9% 94%, 15% 96%, 23% 97%, 32% 94%, 43% 87%, 54% 73%, 58% 63%)",
      "polygon(48% 96%, 48% 96%, 48% 96%, 33% 91%, 33% 91%, 33% 91%, 27% 81%, 27% 81%, 27% 81%, 28% 75%, 28% 75%, 28% 75%, 2% 53%, 2% 53%, 2% 53%, 3% 38%, 3% 38%, 3% 38%, 8% 25%, 8% 25%, 8% 25%, 26% 11%, 26% 11%, 26% 11%, 52% 3%, 52% 3%, 52% 3%, 63% 5%, 63% 5%, 63% 5%, 77% 13%, 77% 13%, 77% 13%, 89% 25%, 89% 25%, 89% 25%, 93% 40%, 93% 40%, 93% 40%, 93% 50%, 93% 50%, 93% 50%, 87% 58%, 87% 58%, 87% 58%, 71% 71%, 71% 71%, 71% 71%, 72% 80%, 72% 80%, 72% 80%, 69% 90%, 69% 90%, 69% 90%, 59% 94%, 59% 94%, 59% 94%)",
      "polygon(8% 46%, 8% 46%, 8% 46%, 8% 46%, 8% 46%, 8% 46%, 8% 46%, 13% 36%, 13% 36%, 13% 36%, 13% 36%, 13% 36%, 13% 36%, 13% 36%, 18% 21%, 18% 21%, 18% 21%, 18% 21%, 18% 21%, 18% 21%, 18% 21%, 25% 13%, 25% 13%, 25% 13%, 25% 13%, 25% 13%, 25% 13%, 25% 13%, 39% 5%, 39% 5%, 39% 5%, 39% 5%, 39% 5%, 39% 5%, 39% 5%, 51% 3%, 51% 3%, 51% 3%, 51% 3%, 51% 3%, 51% 3%, 51% 3%, 64% 4%, 64% 4%, 64% 4%, 64% 4%, 64% 4%, 64% 4%, 64% 4%, 75% 9%, 75% 9%, 75% 9%, 75% 9%, 75% 9%, 75% 9%, 75% 9%, 81% 15%, 81% 15%, 81% 15%, 81% 15%, 81% 15%, 81% 15%, 81% 15%, 86% 23%, 86% 23%, 86% 23%, 86% 23%, 86% 23%, 86% 23%, 86% 23%, 90% 31%, 90% 31%, 90% 31%, 90% 31%, 90% 31%, 90% 31%, 90% 31%, 92% 41%, 92% 41%, 92% 41%, 92% 41%, 92% 41%, 92% 41%, 92% 41%, 91% 48%, 91% 48%, 91% 48%, 91% 48%, 91% 48%, 91% 48%, 91% 48%, 87% 52%, 87% 52%, 87% 52%, 87% 52%, 87% 52%, 87% 52%, 87% 52%, 66% 66%, 66% 66%, 66% 66%, 66% 66%, 66% 66%, 66% 66%, 66% 66%, 63% 80%, 63% 80%, 63% 80%, 63% 80%, 63% 80%, 63% 80%, 63% 80%, 58% 89%, 58% 89%, 58% 89%, 58% 89%, 58% 89%, 58% 89%, 58% 89%, 52% 94%, 52% 94%, 52% 94%, 52% 94%, 52% 94%, 52% 94%, 52% 94%, 41% 96%, 41% 96%, 41% 96%, 41% 96%, 41% 96%, 41% 96%, 41% 96%, 33% 96%, 33% 96%, 33% 96%, 33% 96%, 33% 96%, 33% 96%, 33% 96%, 25% 94%, 25% 94%, 25% 94%, 25% 94%, 25% 94%, 25% 94%, 25% 94%, 20% 90%, 20% 90%, 20% 90%, 20% 90%, 20% 90%, 20% 90%, 20% 90%, 21% 84%, 21% 84%, 21% 84%, 21% 84%, 21% 84%, 21% 84%, 21% 84%, 26% 77%, 26% 77%, 26% 77%, 26% 77%, 26% 77%, 26% 77%, 26% 77%, 33% 66%, 33% 66%, 33% 66%, 33% 66%, 33% 66%, 33% 66%, 33% 66%, 15% 55%, 15% 55%, 15% 55%, 15% 55%, 15% 55%, 15% 55%, 15% 55%)",
    ],
  },
  {
    id: "teemo",
    src: ["./a-teemo-redim.png"],
    probability: 30,
    score: +30,
    scoreDisappear: -10,
    clipPath: [
      "polygon(84% 65%, 78% 72%, 68% 77%, 73% 83%, 68% 87%, 59% 87%, 58% 92%, 47% 92%, 39% 90%, 35% 84%, 27% 87%, 27% 80%, 28% 75%, 13% 64%, 23% 54%, 12% 49%, 20% 45%, 18% 34%, 20% 20%, 34% 27%, 40% 11%, 57% 2%, 61% 2%, 70% 10%, 75% 5%, 76% 11%, 73% 18%, 79% 22%, 80% 34%, 78% 45%, 86% 49%, 77% 54%, 82% 61%)",
    ],
    laughTeemo: ["./laugh1.mp3", "./laugh2.mp3", "./laugh3.mp3"],
  },
  {
    id: "diable",
    src: ["./a-diable1-redim.png"],
    probability: 10,
    score: -60,
    scoreDisappear: 0,
    clipPath: [
      "polygon(83% 81%, 66% 89%, 62% 92%, 58% 98%, 49% 97%, 44% 93%, 43% 91%, 36% 89%, 20% 81%, 16% 67%, 15% 57%, 15% 52%, 13% 48%, 8% 26%, 11% 25%, 14% 27%, 23% 19%, 34% 11%, 39% 3%, 42% 9%, 53% 1%, 60% 9%, 64% 3%, 69% 11%, 81% 19%, 88% 28%, 94% 26%, 94% 29%, 89% 49%, 87% 54%, 88% 59%, 87% 67%)",
    ],
    laughDiable: ["./laughDiable.mp3"],
    appearDiable: ["./a-diable2.png"],
  },
];

//AFFICHER LES IMAGES ET LES POINTS DANS LES REGLES DU JEU
//RECUP DIV IMAGES-FLEXBOX
const imagesFlexbox = document.querySelector(".images-flexbox");
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

window.addEventListener("load", () => {
  modal.showModal();
  clearInterval(speed);
});
modalClose.addEventListener("click", () => {
  modal.close();
  teemoMaker();
  chronoStop = false;
  initTime = Date.now();
  setInterval(checkTime, 40);
  speed = setInterval(hurryUp, 5000);
});

function teemoMaker() {
  //ANIMATION EN BOUCLE
  const appear = Math.random() * 2000 + 500;
  setTimeout(teemoMaker, appear);

  if (pause) {
    return;
  }

  //CREATION BALISE AVEC CLASSE
  const element = document.createElement("div");
  document.body.appendChild(element);
  element.classList.add("picture");

  //PROBABILITE D'APPARITION et RECUPERATION ALEATOIRE D'UN ELT DU TABLEAU
  let cpt = 0;
  const probaArray = Math.random() * 100;
  const randomElement = ELEMENTS.find((element) => {
    if (cpt <= probaArray && probaArray < cpt + element.probability) {
      return true;
    }
    cpt += element.probability;
    return false;
  });

  //RECUPERATION ALEATOIRE D'UNE IMAGE DE L'OBJECT RECUPERE
  const elementSrc = randomElement.src;
  const randomSrc = Math.floor(Math.random() * elementSrc.length);
  const randomPicture = elementSrc[randomSrc];

  //CREATION BALISE IMG
  const img = document.createElement("img");
  element.appendChild(img);

  //INSERTION IMAGE ALEATOIRE
  img.src = randomPicture;

  //DESCRIPTION IMAGE AJOUTEE
  img.classList.add(randomElement.id);

  //COUPER IMAGE
  const elementClipPath = randomElement.clipPath;
  element.style.clipPath = elementClipPath[randomSrc];

  //TAILLE ALEATOIRE DE LA DIV
  const minSize = Math.min(window.innerWidth, window.innerHeight) / 10;
  const maxSize = Math.min(window.innerWidth, window.innerHeight) / 3;
  const size = Math.random() * (maxSize - minSize * 2) + minSize;
  element.style.height = size + "px";
  element.style.width = size + "px";

  //TAILLE ALEATOIRE DE L'IMAGE
  img.style.height = size + "px";

  //PLACEMENT DE L'IMAGE SELON SA TAILLE
  element.style.zIndex = Math.floor(size);

  //POSITION DE DEPART
  let up = window.innerHeight + size;
  let direction = size / 2 + Math.random() * (window.innerWidth - size);

  //POSITION D'ARRIVEE
  let arriveUp = -size;
  const arriveDirection = size / 2 + Math.random() * (window.innerWidth - size);
  let arriveDirectionTmp = direction;
  //INCREMENCE DE UP
  const upPlusMin = 1;
  const upPlusMax = 3;
  const upPlus = upPlusMin + Math.random() * (upPlusMax - upPlusMin * 2);
  const totalRound = Math.ceil(
    (window.innerHeight + size * 2) / Math.floor(upPlus)
  );

  //ANIMATION AVEC JS
  function animation() {
    if (up < arriveUp && !element.classList.contains("remove")) {
      counter += randomElement.scoreDisappear;
      counterDisplay.textContent = counter;
      laughTeemo();
      element.remove();
      return;
    }

    requestAnimationFrame(animation);

    if (pause) {
      return;
    }

    const step = Math.ceil(arriveDirection - direction) / totalRound;
    arriveDirectionTmp += step;

    up -= upPlus * speedUp;
    element.style.top = `${up}px`;
    element.style.left = `${arriveDirectionTmp}px`;
  }

  requestAnimationFrame(animation);

  //FONCTION RIRE TEEMO
  function laughTeemo() {
    if (!randomElement.laughTeemo) {
      return;
    }
    const randomTeemoSrc = Math.floor(
      Math.random() * randomElement.laughTeemo.length
    );
    const audio = new Audio();
    audio.src = randomElement.laughTeemo[randomTeemoSrc];
    audio.play();
  }

  //FONCTION RIRE TEEMO DIABLE
  function laughDiable() {
    if (!randomElement.laughDiable) {
      return;
    }
    const audio = new Audio();
    audio.src = randomElement.laughDiable;
    audio.play();
  }

  //APPARITION TEEMO DIABLE
  function appearDiable() {
    if (!randomElement.appearDiable) {
      element.remove();
    } else {
      img.src = randomElement.appearDiable;
      setTimeout(() => {
        element.remove();
      }, 1000);
      return;
    }
  }

  //SUPPRESSION AU CLICK et COMPTER LES POINTS
  element.addEventListener("click", () => {
    if (pause) {
      return;
    }
    counter += randomElement.score;
    counterDisplay.textContent = counter;
    //RIRE TEEMO DIABLE
    laughDiable();

    //BRUIT TIR
    ring();
    //AJOUT CLASSE DIV ELEMENT
    element.classList.add("remove");
    //ELEMENT CLIQUE SUPPRIME

    appearDiable();
    return;
  });
}

window.addEventListener("keypress", (e) => {
  if (e.key === "p") {
    pause = !pause;

    if (pause) {
      pauseTime = Date.now();
      modalPause.showModal();
      clearInterval(speed);
    } else {
      const ellapsedTime = Date.now() - pauseTime;
      initTime = initTime + ellapsedTime;
      modalPause.close();
      speed = setInterval(hurryUp, 5000);
    }
  }
});
