import './style.css';
import { goToGarage, goToWinners } from './components/changeView/change-view';

(document.getElementById('garage-button') as HTMLElement).addEventListener('click', goToGarage);
(document.getElementById('winners-button') as HTMLElement).addEventListener('click', goToWinners);
