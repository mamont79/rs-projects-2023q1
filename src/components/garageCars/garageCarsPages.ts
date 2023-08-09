import { buildGarage } from './garageBuilder';
import { baseUrl, path } from '../../constants/serverUrl';

let pageNumber = 1;

const changePageInfo = (page?: number) => {
  if (page) pageNumber = page;
  (document.querySelector('.garage-page-number') as HTMLElement).textContent = String(pageNumber);
};

const getCars = async () => {
  const responce = await fetch(`${baseUrl}${path.garage}`);
  const data = await responce.json();
  const carsAmount = data.length;
  return carsAmount;
};

const nextGaragePage = async () => {
  const totalAmount = await getCars();
  if (pageNumber < Math.ceil(totalAmount / 7)) {
    pageNumber += 1;
    buildGarage(pageNumber);
    changePageInfo();
  }
};

const prevGaragePage = () => {
  if (pageNumber > 1) {
    pageNumber -= 1;
    buildGarage(pageNumber);
    changePageInfo();
  }
};

export { nextGaragePage, prevGaragePage, changePageInfo };
