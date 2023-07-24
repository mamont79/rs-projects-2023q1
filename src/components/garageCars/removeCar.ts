import { baseUrl, path } from '../../constants/serverUrl';
import { buildGarage } from './garageBuilder';
import { changePageInfo } from './garageCarsPages';

const deleteCar = async (id: number) => {
  const responce = await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: 'DELETE',
  });
  const cars = await responce.json();
  buildGarage();
  changePageInfo(1);
  return cars;
};

export { deleteCar };
