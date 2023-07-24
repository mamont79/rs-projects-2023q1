import { lineBuilder } from './buildCarLine';
import { baseUrl, path } from '../../constants/serverUrl';
import { generateName, generateColor } from './generator';

const changeAmountInfo = async () => {
  const responce = await fetch(`${baseUrl}${path.garage}`);
  const cars = await responce.json();
  (document.querySelector('.garage-amount') as HTMLElement).textContent = cars.length;
};

const buildGarage = async (pageNumber = 1) => {
  const responce = await fetch(`${baseUrl}${path.garage}`);
  const cars = await responce.json();
  const firstCarNumber = (pageNumber - 1) * 7;
  const lastCarNumber = firstCarNumber + 7 < cars.length ? firstCarNumber + 7 : cars.length;
  (document.querySelector('.race-field') as HTMLElement).innerHTML = '';
  for (let i = firstCarNumber; i < lastCarNumber; i++) {
    const carName = cars[i].name;
    const carColor = cars[i].color;
    const carId = cars[i].id;
    lineBuilder(carColor, carName, carId);
  }
  changeAmountInfo();
};

type ICarData = {
  name: string;
  color: string;
};

const buildCar = async (body: ICarData) => {
  const responce = await fetch(`${baseUrl}${path.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const newCar = await responce.json();

  return newCar;
};

const buildNewCar = async () => {
  const carName = (document.querySelector('.new-car-name') as HTMLInputElement).value;
  const carColor = (document.querySelector('.create-color') as HTMLInputElement).value;

  const newCar = await buildCar({
    name: carName,
    color: carColor,
  });

  const carId = newCar.id;
  const carsOnPage = document.querySelectorAll('.race-line').length;
  if (carsOnPage < 7) {
    lineBuilder(carColor, carName, carId);
  }
  changeAmountInfo();
};

const generateHundredCars = async () => {
  for (let i = 0; i < 100; i++) {
    const carName = generateName();
    const carColor = generateColor();

    const newCar = await buildCar({
      name: carName,
      color: carColor,
    });

    const carId = newCar.id;
    const carsOnPage = document.querySelectorAll('.race-line').length;
    if (carsOnPage < 7) {
      lineBuilder(carColor, carName, carId);
    }
  }
  changeAmountInfo();
};

export { buildGarage, buildNewCar, generateHundredCars };
