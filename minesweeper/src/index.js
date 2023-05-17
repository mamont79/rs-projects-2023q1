import { buildField, buildHTML } from "../src/init.js";
import { matrix, buildMatrix, koefs} from "../src/field-matrix.js"

// const gameField = document.querySelectorAll(".field");

buildMatrix();
buildHTML();
buildField();

let targetFields = document.querySelectorAll(".field");
const newGame = document.querySelector(".new-game");

newGame.addEventListener('click', function() {
  document.querySelector(".gameover").classList.remove("active");
  buildMatrix();
  targetFields.forEach(function (element) {
    element.classList.remove("open");
    element.classList.remove("danger");
    element.classList.remove("block");
  })
})

targetFields.forEach(function (element) {
  element.onclick = function (event) {
    let codeButton = this.getAttribute("data").split("-");
    if (!this.classList.contains("block") && !document.querySelector(".gameover").classList.contains("active")) {
      if (matrix[codeButton[0]][codeButton[1]] == 10) {
        this.classList.add("danger");
        document.querySelector(".gameover").classList.add("active");
      } else {
        this.classList.add("open");
      }
    }
  };
  
  element.oncontextmenu = function (event) {
    event.preventDefault();
    if (!this.classList.contains("open") && !document.querySelector(".gameover").classList.contains("active")) {
      this.classList.toggle("block");
    }
  };
});


