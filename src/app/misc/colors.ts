export const random = (max: number) => Math.floor(Math.random() * max + 1);
export const getRandomRgbColor = () => `rgba(${random(255)}, ${random(255)}, ${random(255)})`;
export const getRandomRgbaColor = (alpha?: number) => `rgb(${random(255)}, ${random(255)}, ${random(255)}, ${alpha || 0.5})`;