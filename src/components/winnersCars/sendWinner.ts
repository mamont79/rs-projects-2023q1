// import { baseUrl, path } from '../../constants/serverUrl';
// import { getWinners } from '../winnersCars/winnersCars';
// import { winnerRowBuilder } from './buildWinnerRow';

// type IWinnerData = {
//   id: number;
//   wins: number;
//   time: number;
// };

// const createWinner = async (body: IWinnerData) => {
//   const responce = await fetch(`${baseUrl}${path.winners}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   });
//   const newWinner = await responce.json();

//   return newWinner;
// };

// const sendWinner = async (winnerId: number, bestTime: number, winsAmount = 1) => {
//   const responceWinners = await fetch(`${baseUrl}${path.winners}`);
//   const datawinners = await responceWinners.json();
//   const responceCars = await fetch(`${baseUrl}${path.garage}`);
//   const dataCars = await responceCars.json();

//   const winId = winnerId;
//   const winsCount = winsAmount;
//   const winnerTime = bestTime;

//   const newWinnerCar = await createWinner({
//     id: winId,
//     wins: winsCount,
//     time: winnerTime,
//   });

//   const winnerIndex = dataCars.findIndex((obj: IWinnerData) => obj.id === winnerId);
//   const carName = dataCars[winnerIndex].name;
//   const carColor = dataCars[winnerIndex].color;

//   const carsOnPage = document.querySelectorAll('.winner-row').length;
//   if (carsOnPage < 10) {
//     winnerRowBuilder(String(winId), carColor, carName, String(winsCount), String(winnerTime));
//   }
//   console.log(winnerIndex);
//   // changeAmountInfo();
// };

// const updateWinner = async () => {};

// export { sendWinner };
