import { difficultLevel } from "difficulty.js";


function buildHTML() {
  
  let centralizer = '<div class="centralizer"></div>';

  let title = '<h1 class="title">Minesweeper</h1>'

  let gameBox = '<div class="game-box"></div>';
  
  let controls = '<div class="controls"></div>';

  let difficult = '<div class="difficult"></div>';

  let mineField = '<div class="mine-field"></div>';

  let info = '<h2 class="info">Produced by Pavel Dalhou</h2>';


  document.querySelector("body").innerHTML = centralizer;
  document.querySelector(".centralizer").innerHTML = title + gameBox + info;
  document.querySelector(".game-box").innerHTML = controls + difficult + mineField;

}



// function buildField() {
  
// }

export { buildHTML }