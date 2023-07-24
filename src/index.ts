import './style.css';
import { goToGarage, goToWinners } from './components/changeView/change-view';
import { buildGarage } from './components/garageCars/garageBuilder';
// import { getWinners } from './components/winnersCars/winnersCars';

const garageButton = document.getElementById('garage-button') as HTMLElement;
const winnersButton = document.getElementById('winners-button') as HTMLElement;

buildGarage();
// getWinners();

garageButton.addEventListener('click', goToGarage);
winnersButton.addEventListener('click', goToWinners);
