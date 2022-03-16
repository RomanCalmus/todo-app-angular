const random = (max: number) => Math.floor(Math.random() * max + 1);
export const getRandomRgbColor = () => `rgb(${random(255)} ${random(255)} ${random(255)})`;