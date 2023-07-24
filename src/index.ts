import './style.css';
import { goToGarage, goToWinners } from './components/changeView/change-view';
import { buildGarage, buildNewCar, generateHundredCars } from './components/garageCars/garageBuilder';
import { nextGaragePage, prevGaragePage } from './components/garageCars/garageCarsPages';
import { deleteCar } from './components/garageCars/removeCar';
import { updateCurrentCar } from './components/garageCars/updateCar';
// import { getWinners } from './components/winnersCars/winnersCars';

// alert('Проверьте пожалуйсто в среду или четверг. постараюсь ещё немного доделать');

const garageButton = document.getElementById('garage-button') as HTMLElement;
const winnersButton = document.getElementById('winners-button') as HTMLElement;
const createButton = document.querySelector('.create-button') as HTMLElement;
const updateButton = document.querySelector('.update-button') as HTMLElement;
const garagePrevButton = document.querySelector('.garage-prev') as HTMLElement;
const garageNextButton = document.querySelector('.garage-next') as HTMLElement;
const generateCarsButton = document.querySelector('.generate-button') as HTMLElement;
const raceField = document.querySelector('.race-field') as HTMLElement;

let updateCarId: number;
let updateStatus = false;

buildGarage();
// getWinners();

raceField.addEventListener('click', (event) => {
  if ((event.target as HTMLElement).classList.contains('remove-button')) {
    const removeCarId = (event.target as HTMLElement).id.split('-')[0];
    deleteCar(Number(removeCarId));
  } else if ((event.target as HTMLElement).classList.contains('select-button')) {
    updateStatus = true;
    updateCarId = Number((event.target as HTMLElement).id.split('-')[0]);
    const carName = (event.target as HTMLElement).getAttribute('carname') as string;
    const carColor = (event.target as HTMLElement).getAttribute('carcolor') as string;
    (document.querySelector('.change-car-name') as HTMLInputElement).value = carName;
    (document.querySelector('.change-color') as HTMLInputElement).value = carColor;
    console.log(updateCarId, carName, carColor);
  }
});

garageButton.addEventListener('click', goToGarage);
winnersButton.addEventListener('click', goToWinners);
createButton.addEventListener('click', buildNewCar);
garagePrevButton.addEventListener('click', prevGaragePage);
garageNextButton.addEventListener('click', nextGaragePage);
generateCarsButton.addEventListener('click', generateHundredCars);
updateButton.addEventListener('click', () => {
  if (updateStatus === true) {
    updateCurrentCar(updateCarId);
    updateStatus = false;
  }
});
