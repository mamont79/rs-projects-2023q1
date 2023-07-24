import { baseUrl, path } from '../../constants/serverUrl';
import { buildGarage } from './garageBuilder';

const updateCarName = document.querySelector('.change-car-name') as HTMLInputElement;
const updateCarColor = document.querySelector('.change-color') as HTMLInputElement;

type ICarData = {
  name: string;
  color: string;
};

const updateCar = async (id: number, body: ICarData) => {
  const responce = await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const updateCar = await responce.json();

  return updateCar;
};

const updateCurrentCar = async (id: number) => {
  const carName = (document.querySelector('.change-car-name') as HTMLInputElement).value;
  const carColor = (document.querySelector('.change-color') as HTMLInputElement).value;

  const newCar = await updateCar(id, {
    name: carName,
    color: carColor,
  });

  (document.querySelector('.change-car-name') as HTMLInputElement).value = '';
  (document.querySelector('.change-color') as HTMLInputElement).value = '#aaaa00';

  const currentPage = (document.querySelector('.garage-page-number') as HTMLElement).textContent;
  buildGarage(Number(currentPage));
};

export { updateCurrentCar };
