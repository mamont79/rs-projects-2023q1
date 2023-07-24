import { getCars } from './garageCars';
import { lineBuilder } from './buildCarLine';

const buildGarage = async () => {
  const cars = await getCars();
  for (let i = 0; i < cars.length; i++) {
    const carName = cars[i].name;
    const carColor = cars[i].color;
    const carId = cars[i].id;
    lineBuilder(carColor, carName, carId);
  }
};

export { buildGarage };
