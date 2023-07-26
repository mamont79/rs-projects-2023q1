const moveCurrentCar = (id: string) => {
  const currentLine = document.getElementById(`${id}-car`) as HTMLElement;
  const currentCar = document.getElementById(`${id}`) as HTMLElement;
  const lineWidth = currentLine.offsetWidth;
  const carWidth = 60;

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
        clearInterval(moveCar);
        console.log(moves / 25);
      } else {
        moves += 1;
        currentCar.style.left = `${position}%`;
      }
    }, 40);
  } else {
    let moveCar = setInterval(() => {
      if (position >= loserDistanse) {
        clearInterval(moveCar);
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
  (document.getElementById(`${id}-start`) as HTMLButtonElement).disabled = false;
};

const allCarsToStart = () => {
  const allCurrentCars = document.querySelectorAll('.car-image');
  allCurrentCars.forEach((element) => {
    const carId = element.id;
    carToStart(carId);
  });
};

const allCarMove = () => {
  const allCurrentCars = document.querySelectorAll('.car-image');
  allCurrentCars.forEach((element) => {
    const carId = element.id;
    moveCurrentCar(carId);
  });
};

export { moveCurrentCar, carToStart, allCarsToStart, allCarMove };
