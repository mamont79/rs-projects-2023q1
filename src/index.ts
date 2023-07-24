import './style.css';
import { goToGarage, goToWinners } from './components/changeView/change-view';
import { buildGarage, buildNewCar, generateHundredCars } from './components/garageCars/garageBuilder';
import { nextGaragePage, prevGaragePage } from './components/garageCars/garageCarsPages';
import { deleteCar } from './components/garageCars/removeCar';
// import { getWinners } from './components/winnersCars/winnersCars';

alert('Проверьте пожалуйсто в среду или четверг. постараюсь ещё немного доделать');

const garageButton = document.getElementById('garage-button') as HTMLElement;
const winnersButton = document.getElementById('winners-button') as HTMLElement;
const createButton = document.querySelector('.create-button') as HTMLElement;
const garagePrevButton = document.querySelector('.garage-prev') as HTMLElement;
const garageNextButton = document.querySelector('.garage-next') as HTMLElement;
const generateCarsButton = document.querySelector('.generate-button') as HTMLElement;
const raceField = document.querySelector('.race-field') as HTMLElement;

buildGarage();
// getWinners();

raceField.addEventListener('click', (event) => {
  if ((event.target as HTMLElement).classList.contains('remove-button')) {
    const removeCarId = (event.target as HTMLElement).id.split('-')[0];
    deleteCar(Number(removeCarId));
    console.log(removeCarId);
  }
});

garageButton.addEventListener('click', goToGarage);
winnersButton.addEventListener('click', goToWinners);
createButton.addEventListener('click', buildNewCar);
garagePrevButton.addEventListener('click', prevGaragePage);
garageNextButton.addEventListener('click', nextGaragePage);
generateCarsButton.addEventListener('click', generateHundredCars);
