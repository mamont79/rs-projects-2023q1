import { buildHTML, buildField } from "../src/init.js";
import { matrix, buildMatrix, koefs} from "../src/field-matrix.js";
import { startTimer, stopTimer } from "../src/timer.js";

const gameField = document.querySelectorAll(".field");

buildMatrix();
buildHTML();
buildField();

let targetFields = document.querySelectorAll(".field");
const newGame = document.querySelector(".new-game");
const leftMines = document.querySelector(".left");
let moves = 0;



newGame.addEventListener('click', function() {
  document.querySelector(".gameover").classList.remove("active");

  let count = document.querySelector("input").value;
  
  buildMatrix();
  targetFields.forEach(function (element) {
    element.classList.remove("open");
    element.classList.remove("danger");
    element.classList.remove("block");
    let idElem = element.getAttribute('data').split('-');
    if (koefs[idElem[0]][idElem[1]] > 0 && matrix[idElem[0]][idElem[1]] != 10) {
      element.textContent = koefs[idElem[0]][idElem[1]];
    } else {
      element.textContent = '';
    }
  })
  document.querySelector(".timer").textContent = "0 s";
  document.querySelector(".left").textContent = `${count} to win`;
  stopTimer();
  moves = 0;
})

targetFields.forEach(function (element) {
  element.onclick = function (event) {
    let codeButton = this.getAttribute("data").split("-");
    if (!this.classList.contains("block") && !document.querySelector(".gameover").classList.contains("active")) {
      moves += 1;
      if (moves == 1) {
        startTimer();
      }
      if (matrix[codeButton[0]][codeButton[1]] == 10) {
        this.classList.add("danger");
        stopTimer();
        document.querySelector(".gameover").classList.add("active");
      } else {
        this.classList.add("open");
      }
      console.log(moves);
    }
  };

  element.oncontextmenu = function (event) {
    event.preventDefault();
    if (!this.classList.contains("open") && !document.querySelector(".gameover").classList.contains("active")) {
      moves += 1;
      if (moves == 1) {
        startTimer();
      }
      if (!this.classList.contains("block")) {
        this.classList.add("block");
        let left = leftMines.textContent.split(' ');
        left[0] -= 1;        
        leftMines.textContent = left[0] + ' ' + left[1] + ' ' + left[2];
        if (left[0] < 0) {
          leftMines.classList.add("active")
        }
      } else {
        this.classList.remove("block");
        let left = leftMines.textContent.split(' ');
        left[0] = +left[0] + 1;
        leftMines.textContent = left[0] + ' ' + left[1] + ' ' + left[2];
        if (left[0] >= 0) {
          leftMines.classList.remove("active")
        }
      }
      console.log(moves);
    }
  };
  
});


