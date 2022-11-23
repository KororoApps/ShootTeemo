//APPARITION TEEMO DIABLE
export function appearDiable(randomElement, element, img) {
  if (!randomElement.appearDiable) {
    element.remove();
    return;
  } else {
    img.src = randomElement.appearDiable;
    setTimeout(() => {
      element.remove();
    }, 1000);
    return;
  }
}
