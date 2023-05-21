import { matrix, koefs } from "../src/field-matrix.js";

let winners = [];


function saveWinners(seconds, moves) {
  let now = new Date();
  let winDate = now.getDate() + "-" + now.getMonth() + "-" + now.getFullYear(); 
  let result = seconds + " " + moves + " moves" + "  --  " + winDate;

  winners.unshift(result);
  winners.length = 10;

  localStorage.setItem("winners", JSON.stringify(winners));
  getWinners();
}


function getWinners() {
  winners = JSON.parse(localStorage.getItem("winners"));
    
  let insertWinners = '';
  for (let i = 0; i < winners.length; i++) {
    if (winners[i]) {
      insertWinners += `<li>${winners[i]}</li>`;
    } else {
      insertWinners += `<li></li>`;
    }
  }
  
  document.querySelector(".winners").innerHTML = '<div class="win-title">Last 10 wins:</div>' + '<ol class="winner-list"></ol>';
  document.querySelector(".winner-list").innerHTML = insertWinners;
}

function saveGame() {
  let htmlFile = document.querySelector(".game-box").innerHTML;
  let moves = document.querySelector(".moves").textContent.split(' ')[0];
  localStorage.setItem("moves", moves);
  localStorage.setItem("htmlFile", htmlFile);
  localStorage.setItem("matrix", JSON.stringify(matrix));
  localStorage.setItem("koefs", JSON.stringify(koefs));
}

function loadGame() {
  console.log(matrix);
  document.querySelector(".game-box").innerHTML = localStorage.getItem("htmlFile");
  JSON.parse(localStorage.getItem("matrix"));
  JSON.parse(localStorage.getItem("koefs"));
  localStorage.getItem("moves");
  console.log(matrix);
}

export { saveWinners, getWinners, winners, saveGame, loadGame }