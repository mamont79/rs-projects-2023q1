const garageView = document.querySelector('.garage') as HTMLElement;
const winnersView = document.querySelector('.winners') as HTMLElement;

function goToGarage() {
  garageView.classList.remove('hidden');
  winnersView.classList.add('hidden');
}

function goToWinners() {
  garageView.classList.add('hidden');
  winnersView.classList.remove('hidden');
}

export { goToGarage, goToWinners };
