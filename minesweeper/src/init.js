import { difficultLevel } from "../src/difficulty.js";
import { koefs, matrix, buildMatrix } from "../src/field-matrix.js"
import { colorNum } from "../src/coloring.js";

function buildHTML(level = 0) {
  let endGame = '<div class="gameover">BOOOOM!!! <br/> Try "New Game"</div>';
  let winGame = '<div class="wingame"></div>';
  let winResults = '<div class="winners"></div>';
  
  let centralizer = '<div class="centralizer"></div>';

  let title = '<h1 class="title">Minesweeper</h1>'

  let gameBox = '<div class="game-box"></div>';
  
  let controls = '<div class="controls"></div>';
  let gameInfo = '<div class="game-info"></div>';
  let difficult = '<div class="difficult"></div>';
  let mineField = '<div class="mine-field"></div>';

  let info = '<h2 class="info">Produced by Pavel Dalhou</h2>';

  let controlItems = '<div class="new-game">New</div>';
      controlItems += `<div class="aim">Aim:<input type="text" class="mines-number" value="${difficultLevel[level].aim}" name="mines-number" id="mines-number"></div>`;
      controlItems += `<div class="left">${difficultLevel[level].aim} to Win</div>`;
      
  
  let gameInfoItems = '<div class="timer">0 sec</div>';
      gameInfoItems += '<div class="win-results"></div>';
      gameInfoItems += '<div class="moves">0 moves</div>';

  let buttons = '';
  for (let i = 0; i < difficultLevel.length; i++) {
    buttons += `<button class="${difficultLevel[i].class}" >${difficultLevel[i].title}</button>`;
  }

  document.querySelector("body").innerHTML = centralizer;
  document.querySelector(".centralizer").innerHTML = title + gameBox + info;
  document.querySelector(".game-box").innerHTML = controls + gameInfo + difficult + mineField + endGame + winGame + winResults;
  document.querySelector(".controls").innerHTML = controlItems;
  document.querySelector(".game-info").innerHTML = gameInfoItems;
  document.querySelector(".difficult").innerHTML = buttons;
}

function buildField(level = 0) {
  let insertText = '';
  for (let i = 0; i < difficultLevel[level].height; i++) {
    insertText += '<div class="row">';
    for (let j = 0; j < difficultLevel[level].width; j++) {
      let num = koefs[i][j];
      if (num > 0 && matrix[i][j] != 10) {
        insertText += `<div class="field" data="${i}-${j}" id="${i}-${j}">${num}</div>`;
      } else if (num > 0 && matrix[i][j] == 10) {
        insertText += `<div class="field" data="${i}-${j}" id="${i}-${j}"></div>`;
      } else {
        insertText += `<div class="field" data="${i}-${j}" id="${i}-${j}"></div>`;
      }
    }
    insertText += '</div>';
  }
  document.querySelector(".mine-field").innerHTML = insertText;

  for (let i = 0; i < difficultLevel[level].height; i++) {
    for (let j = 0; j < difficultLevel[level].width; j++) {
      colorNum(koefs, i, j);
    }
  }
}

// function innerKoefs()

export { buildHTML, buildField };