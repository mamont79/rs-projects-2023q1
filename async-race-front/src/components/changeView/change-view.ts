const garageView = document.querySelector('.garage') as HTMLElement;
const winnersView = document.querySelector('.winners') as HTMLElement;

const goToGarage = () => {
  garageView.classList.remove('hidden');
  winnersView.classList.add('hidden');
};

const goToWinners = () => {
  garageView.classList.add('hidden');
  winnersView.classList.remove('hidden');
};

export { goToGarage, goToWinners };
