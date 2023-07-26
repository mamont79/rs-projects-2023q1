const winnersInfo: Array<string | null> = [];
const winResultMessage = document.querySelector('.garage-win-result') as HTMLElement;

const moveCurrentCar = (id: string) => {
  const currentLine = document.getElementById(`${id}-car`) as HTMLElement;
  const currentCar = document.getElementById(`${id}`) as HTMLElement;

  let carAcceleration = (Math.floor(Math.random() * 28) + 12) / 1000;
  let loseChance = Math.random();
  let loserDistanse = Math.random() * 70;

  let speed = 0;
  let position = 0;
  let moves = 0;

  (document.getElementById(`${id}-start`) as HTMLButtonElement).disabled = true;

  if (loseChance < 0.8) {
    let moveCar = setInterval(() => {
      speed += carAcceleration;
      position += speed;
      if (position >= 100) {
        (document.querySelector('.reset-button') as HTMLButtonElement).disabled = false;
        clearInterval(moveCar);
        winnersInfo.push(String(moves / 25));
        winnersInfo.push((document.getElementById(`${id}-name`) as HTMLElement).textContent);
        winnersInfo.push(id);
        console.log(winnersInfo);
        winResultMessage.textContent = `${winnersInfo[1]} win in ${winnersInfo[0]} seconds`;
        (document.getElementById(`${id}-reset`) as HTMLButtonElement).disabled = false;
      } else {
        moves += 1;
        currentCar.style.left = `${position}%`;
      }
    }, 40);
  } else {
    let moveCar = setInterval(() => {
      if (position >= loserDistanse) {
        (document.querySelector('.reset-button') as HTMLButtonElement).disabled = false;

        clearInterval(moveCar);
        (document.getElementById(`${id}-reset`) as HTMLButtonElement).disabled = false;
      } else if (position >= loserDistanse / 2) {
        position += speed;
        speed -= carAcceleration;
        currentCar.style.left = `${position}%`;
      } else {
        speed += carAcceleration;
        position += speed;
        currentCar.style.left = `${position}%`;
      }
    }, 40);
  }
};

const carToStart = (id: string) => {
  const currentCar = document.getElementById(`${id}`) as HTMLElement;
  currentCar.style.left = '0px';
  winnersInfo.length = 0;
  winResultMessage.classList.remove('active');
  winResultMessage.textContent = `Race in progress...`;
  (document.getElementById(`${id}-start`) as HTMLButtonElement).disabled = false;
};

const allCarsToStart = () => {
  (document.querySelector('.race-button') as HTMLButtonElement).disabled = false;
  (document.querySelector('.reset-button') as HTMLButtonElement).disabled = false;

  const allCurrentCars = document.querySelectorAll('.car-image');
  allCurrentCars.forEach((element) => {
    const carId = element.id;
    carToStart(carId);
  });
};

const allCarMove = () => {
  (document.querySelector('.race-button') as HTMLButtonElement).disabled = true;
  (document.querySelector('.reset-button') as HTMLButtonElement).disabled = true;
  const allCurrentCars = document.querySelectorAll('.car-image');
  allCurrentCars.forEach((element) => {
    const carId = element.id;
    moveCurrentCar(carId);
  });
  winResultMessage.classList.add('active');
};

export { moveCurrentCar, carToStart, allCarsToStart, allCarMove };
