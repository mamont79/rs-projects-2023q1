const moveCurrentCar = (id: string) => {
  const currentLine = document.getElementById(`${id}-car`) as HTMLElement;
  const currentCar = document.getElementById(`${id}`) as HTMLElement;
  const lineWidth = currentLine.offsetWidth;
  const carWidth = 60;

  let carAcceleration = (Math.floor(Math.random() * 28) + 12) / 1000;

  let speed = 0;
  let position = 0;
  let moves = 0;

  (document.getElementById(`${id}-start`) as HTMLButtonElement).disabled = true;
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
};

const carToStart = (id: string) => {
  const currentCar = document.getElementById(`${id}`) as HTMLElement;
  currentCar.style.left = '0px';
  (document.getElementById(`${id}-start`) as HTMLButtonElement).disabled = false;
};

export { moveCurrentCar, carToStart };
