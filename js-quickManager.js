//VITESSE AGUMENTE AVEC TEMPS

export let speedUp = 1;
export const quickUp = () => {
  if (speedUp < 13) {
    speedUp += 0.3;
    setInterval(quickUp, 17000);
  }
  clearInterval(quickUp);
};

export const quickStop = () => {
  clearInterval(quickUp);
};
