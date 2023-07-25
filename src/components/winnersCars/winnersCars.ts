import { baseUrl, path } from '../../constants/serverUrl';
import { winnerRowBuilder } from './buildWinnerRow';

interface IObjectCar {
  id: string;
  name: string;
}

const getWinners = async () => {
  const responceWinners = await fetch(`${baseUrl}${path.winners}`);
  const datawinners = await responceWinners.json();
  const responceCars = await fetch(`${baseUrl}${path.garage}`);
  const dataCars = await responceCars.json();

  (document.querySelector('.winners-results') as HTMLElement).innerHTML = '';

  for (let i = 0; i < datawinners.length; i++) {
    const carId = datawinners[i].id;
    const carWins = datawinners[i].wins;
    const carTime = datawinners[i].time;

    const winnerIndex = dataCars.findIndex((obj: IObjectCar) => obj.id === carId);
    console.log(winnerIndex);

    const carName = dataCars[winnerIndex].name;
    const carColor = dataCars[winnerIndex].color;

    winnerRowBuilder(carId, carColor, carName, carWins, carTime);
  }
};

export { getWinners };
