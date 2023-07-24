import './style.css';
import { goToGarage, goToWinners } from './components/changeView/change-view';
import { buildGarage, buildNewCar } from './components/garageCars/garageBuilder';
import { nextGaragePage, prevGaragePage } from './components/garageCars/garageCarsPages';
// import { getWinners } from './components/winnersCars/winnersCars';

const garageButton = document.getElementById('garage-button') as HTMLElement;
const winnersButton = document.getElementById('winners-button') as HTMLElement;
const createButton = document.querySelector('.create-button') as HTMLElement;
const garagePrevButton = document.querySelector('.garage-prev') as HTMLElement;
const garageNextButton = document.querySelector('.garage-next') as HTMLElement;

buildGarage();
// getWinners();

garageButton.addEventListener('click', goToGarage);
winnersButton.addEventListener('click', goToWinners);
createButton.addEventListener('click', buildNewCar);
garagePrevButton.addEventListener('click', prevGaragePage);
garageNextButton.addEventListener('click', nextGaragePage);
