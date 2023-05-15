import { difficultLevel } from "../src/difficulty.js";


function buildHTML() {
  
  let centralizer = '<div class="centralizer"></div>';

  let title = '<h1 class="title">Minesweeper</h1>'

  let gameBox = '<div class="game-box"></div>';
  
  let controls = '<div class="controls"></div>';
  let difficult = '<div class="difficult"></div>';
  let mineField = '<div class="mine-field"></div>';

  let info = '<h2 class="info">Produced by Pavel Dalhou</h2>';

  let controlItems = '<div class="new-game">New</div>';
      controlItems += '<div class="aim">Aim:<input class="mines-number" value="10" name="mines-number" id="mines-number"></div>';
      controlItems += '<div class="left">10 to Win</div>';
      controlItems += '<div class="timer">0 sec</div>';

  let buttons = '';
  for (let i = 0; i < difficultLevel.length; i++) {
    buttons += `<button class="${difficultLevel[i].class}" >${difficultLevel[i].title}</button>`;
  }

  document.querySelector("body").innerHTML = centralizer;
  document.querySelector(".centralizer").innerHTML = title + gameBox + info;
  document.querySelector(".game-box").innerHTML = controls + difficult + mineField;
  document.querySelector(".controls").innerHTML = controlItems;
  document.querySelector(".difficult").innerHTML = buttons;
}

function buildField(level = 0) {
  let insertText = '';
  for (let i = 1; i <= difficultLevel[level].height; i++) {
    insertText += '<div class="row">';
    for (let j = 1; j <= difficultLevel[level].width; j++) {
      insertText += `<div class="field" data="${i}-${j}"></div>`
    }
    insertText += '</div>';
  }
  document.querySelector(".mine-field").innerHTML = insertText;
}

export { buildHTML, buildField };