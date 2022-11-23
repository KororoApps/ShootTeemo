let pause = false;

export const togglePause = () => (pause = !pause);

export const isPaused = () => pause;

export const modalPause = document.querySelector(".modalPause");
