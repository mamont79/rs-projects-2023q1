import { buildHTML, buildField } from "../src/init.js";
import { matrix, buildMatrix, koefs} from "../src/field-matrix.js";
import { startTimer, stopTimer } from "../src/timer.js";
import { openZero } from "../src/open-zero.js";
import { colorNum } from "../src/coloring.js";
import { saveWinners, getWinners, winners, saveGame, loadGame } from "../src/lock-stor.js";

const gameField = document.querySelectorAll(".field");

buildMatrix(0, 10, "0-0");
buildHTML();
buildField();
if (localStorage.getItem("winners")) {
  getWinners();
}


const newGame = document.querySelector(".new-game");
const leftMines = document.querySelector(".left");
const easy = document.querySelector(".button-small");
const medium = document.querySelector(".button-medium");
const hard = document.querySelector(".button-large");
let targetFields = document.querySelectorAll(".field");
let winButton = document.querySelector(".win-results");
let moves = 0;
let level = 0;

// const click = new Audio("../assets/audio/click.mp3");
// const lose = new Audio("../assets/audio/denonation.mp3");
// const win = new Audio("../assets/audio/win.mp3");

const click = new Audio("../minesweeper/assets/audio/click.mp3");
const lose = new Audio("../minesweeper/assets/audio/denonation.mp3");
const win = new Audio("../minesweeper/assets/audio/win.mp3");

document.querySelector(".winners").addEventListener('click', function(){
    document.querySelector(".winners").classList.remove("active");
})

targetFields.forEach(button => {
  button.addEventListener("click", () => {
    click.playbackRate = 2.0;
    click.play();
  });
});

winButton.addEventListener('click', function() {
  document.querySelector(".winners").classList.toggle("active");
})

easy.addEventListener('click', function() {
  easy.classList.add("active");  
})

medium.addEventListener('click', function() {
  medium.classList.add("active");
  hard.classList.remove("active");
  document.querySelector("body").classList.remove("night");
  document.querySelector(".title").classList.remove("night");
  document.querySelector(".game-box").classList.remove("night");
  document.querySelector(".controls").classList.remove("night");
  document.querySelector(".game-info").classList.remove("night");
  document.querySelector(".difficult").classList.remove("night");
  document.querySelector(".mine-field").classList.remove("night");
  document.querySelector(".info").classList.remove("night");
})

hard.addEventListener('click', function() {
  medium.classList.remove("active");  
  hard.classList.add("active");
  document.querySelector("body").classList.add("night");
  document.querySelector(".title").classList.add("night");
  document.querySelector(".game-box").classList.add("night");
  document.querySelector(".controls").classList.add("night");
  document.querySelector(".game-info").classList.add("night");
  document.querySelector(".difficult").classList.add("night");
  document.querySelector(".mine-field").classList.add("night");
  document.querySelector(".info").classList.add("night");
})


newGame.addEventListener('click', function() {
  document.querySelector(".gameover").classList.remove("active");
  document.querySelector(".wingame").classList.remove("active");
  document.querySelector(".winners").classList.remove("active");
  
  let count = document.querySelector("input").value;
  if (count <= 15) {
    if (count < 10) {
      count = 10;
    }
    easy.textContent = "Easy";
    easy.classList.remove("medium");
    easy.classList.remove("hard");
    easy.classList.remove("really");
  } else if (count < 25) {
    easy.textContent = "Medium";
    easy.classList.add("medium");
    easy.classList.remove("hard");
    easy.classList.remove("really");
  } else if (count < 90) {
    easy.textContent = "Hard";
    easy.classList.remove("medium");
    easy.classList.add("hard");
    easy.classList.remove("really");
  } else if (count > 90) {
    if (count > 99) {
      count = 99;
    }
    easy.textContent = "Really???";
    easy.classList.remove("medium");
    easy.classList.remove("hard");
    easy.classList.add("really");
  }
  
  if (Number.isNaN(count*1)) {
    count = 10;
    easy.textContent = "Easy";
  }

  // document.querySelector(".mine-field").innerHTML = '';
  // console.log(document.querySelector(".mine-field"));
  targetFields.forEach(function (element) {
    element.classList.remove("open");
    element.classList.remove("danger");
    element.classList.remove("block");
  })

  document.querySelector("input").value = count;
  document.querySelector(".timer").textContent = "0 sec";
  document.querySelector(".left").textContent = `${count} to win`;
  document.querySelector(".moves").textContent = 0 + ' moves';
  stopTimer();
  moves = 0;
})

targetFields.forEach(function (element) {
  element.onclick = function (event) {
    let codeButton = this.getAttribute("data").split("-");
    if (!this.classList.contains("block") && !document.querySelector(".gameover").classList.contains("active")) {
      moves += 1;
      document.querySelector(".moves").textContent = moves + ' moves';
      if (moves == 1) {
        buildMatrix(level, document.querySelector("input").value, codeButton);
        targetFields.forEach(function (element) {
          let idElem = element.getAttribute('data').split('-');
          if (koefs[idElem[0]][idElem[1]] > 0 && matrix[idElem[0]][idElem[1]] != 10) {
            element.textContent = koefs[idElem[0]][idElem[1]];
          } else {
            element.textContent = '';
          }
          colorNum(koefs, idElem[0], idElem[1]);
        })

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
      // console.log(moves);
      
    }

    let openedFields = document.querySelectorAll(".open").length;
    let mines = document.querySelector("input").value;
    let allFields = document.querySelectorAll(".field").length;
    let left = allFields - openedFields - mines;
    if (left == 0) {
      document.querySelector(".wingame").classList.add("active");
      stopTimer();
      document.querySelector(".wingame").textContent = `You won in ${document.querySelector(".timer").textContent} with ${moves} moves!`;
      saveWinners(document.querySelector(".timer").textContent, moves)
      win.playbackRate = 1.5;
      win.play();
    }
    // saveGame();
  };

  element.oncontextmenu = function (event) {
    event.preventDefault();
    if (!this.classList.contains("open") && !document.querySelector(".gameover").classList.contains("active")) {
      moves += 1;
      document.querySelector(".moves").textContent = moves + ' moves';
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
      // console.log(moves);
    }
    // saveGame();
  };
  
});

//console.log(document.querySelector("body").innerHTML);
