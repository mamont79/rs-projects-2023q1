const moveCurrentCar = (id: string) => {
  const currentLine = document.getElementById(`${id}-car`) as HTMLElement;
  const currentCar = document.getElementById(`${id}`) as HTMLElement;
  const lineWidth = currentLine.offsetWidth;
  const carWidth = 60;

  let carAcceleration = (Math.floor(Math.random() * 30) + 10) / 100;

  let speed = 0;
  let position = 0;

  (document.getElementById(`${id}-start`) as HTMLButtonElement).disabled = true;
  let moveCar = setInterval(() => {
    speed += carAcceleration;
    position += speed;
    if (position >= lineWidth - carWidth) {
      clearInterval(moveCar);
    } else {
      currentCar.style.left = `${position}px`;
    }
  }, 25);
};

const carToStart = (id: string) => {
  const currentCar = document.getElementById(`${id}`) as HTMLElement;
  currentCar.style.left = '0px';
  (document.getElementById(`${id}-start`) as HTMLButtonElement).disabled = false;
};

export { moveCurrentCar, carToStart };
