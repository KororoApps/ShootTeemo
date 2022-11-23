//SON TIR
export function shot() {
  const audio = new Audio();
  audio.src = "./tir.mp3";
  audio.play();
}

//FONCTION RIRE TEEMO
export function laughTeemo(element) {
  if (!element.laughTeemo) {
    return;
  }
  const randomSoundIndex = Math.floor(
    Math.random() * element.laughTeemo.length
  );
  const audio = new Audio();
  audio.src = element.laughTeemo[randomSoundIndex];
  audio.play();
}

//FONCTION RIRE TEEMO DIABLE
export function laughDiable(element) {
  if (!element.laughDiable) {
    return;
  }
  const audio = new Audio();
  audio.src = element.laughDiable;
  audio.play();
}
