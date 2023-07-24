import { carNames, hexNumbers } from '../../constants/carNames';

const generateName = () => {
  const carsAmount = carNames.length;
  const randomId = Math.floor(Math.random() * carsAmount);
  return carNames[randomId];
};

const generateColor = () => {
  let randomColor = '#';
  for (let i = 0; i < 6; i++) {
    randomColor += hexNumbers[Math.floor(Math.random() * 16)];
  }
  return randomColor;
};

export { generateName, generateColor };
