var sec = 0;
var t;

function tick(){
  sec++;
}

function add() {
  tick();
  document.querySelector(".timer").textContent = sec + ' sec';
  startTimer();
}

function startTimer() {
  t = setTimeout(add, 1000);
}

function stopTimer() {
  sec = 0;
  clearTimeout(t);
}

export { startTimer, stopTimer };