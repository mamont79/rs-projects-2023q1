import { buildHTML, buildField } from "../src/init.js";
import { matrix, buildMatrix, koefs} from "../src/field-matrix.js";
import { startTimer, stopTimer } from "../src/timer.js";
import { openZero } from "../src/open-zero.js";

const gameField = document.querySelectorAll(".field");

buildMatrix();
buildHTML();
buildField();

const newGame = document.querySelector(".new-game");
const leftMines = document.querySelector(".left");
const easy = document.querySelector(".button-small");
const medium = document.querySelector(".button-medium");
const hard = document.querySelector(".button-large");
let targetFields = document.querySelectorAll(".field");
let moves = 0;

const click = new Audio("../assets/audio/click.mp3");
const lose = new Audio("../assets/audio/denonation.mp3");
const win = new Audio("../assets/audio/win.mp3");

targetFields.forEach(button => {
  button.addEventListener("click", () => {
    click.playbackRate = 2.0;
    click.play();
  });
});


easy.addEventListener('click', function() {
  easy.classList.add("active");
  medium.classList.remove("active");
  hard.classList.remove("active");
})

medium.addEventListener('click', function() {
  easy.classList.remove("active");
  medium.classList.add("active");
  hard.classList.remove("active");
})

hard.addEventListener('click', function() {
  easy.classList.remove("active");
  medium.classList.remove("active");
  hard.classList.add("active");
})


newGame.addEventListener('click', function() {
  document.querySelector(".gameover").classList.remove("active");
  document.querySelector(".wingame").classList.remove("active");

  let count = document.querySelector("input").value;
  if (count > 99) {
    count = 99;
  }
  if (count < 1) {
    count = 1;
  } 
  if (Number.isNaN(count*1)) {
    count = 10;
  }
  
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
  document.querySelector("input").value = count;
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
        lose.playbackRate = 1.5;
        lose.play();
      } else {
        this.classList.add("open");
        if (koefs[codeButton[0]][codeButton[1]] == 0) {
          openZero(koefs, codeButton[0], codeButton[1]);
        }
      }
      console.log(moves);
      
    }

    let openedFields = document.querySelectorAll(".open").length;
    let mines = document.querySelector("input").value;
    let allFields = document.querySelectorAll(".field").length;
    let left = allFields - openedFields - mines;
    if (left == 0) {
      document.querySelector(".wingame").classList.add("active");
      stopTimer();
      document.querySelector(".wingame").textContent = `You won in ${document.querySelector(".timer").textContent} with ${moves} moves!`;
      win.playbackRate = 1.5;
      win.play();
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


