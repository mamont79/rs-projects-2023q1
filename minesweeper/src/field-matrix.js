import { difficultLevel } from "../src/difficulty.js";


let matrix = [];
let koefs = [];

function buildMatrix(level = 0, count = 10, firstField) {
  matrix = [];
  let mineArray = [];
  let fields = difficultLevel[level].height * difficultLevel[level].width; 
  for (let i = 0; i < fields; i++) {
    if (i < count) {
      mineArray.push(10);
    } else {
      mineArray.push(0);
    }
  }

  shuffle(mineArray);
  let firstIndex = +firstField[0] * difficultLevel[level].height + +firstField[1];
  console.log(firstIndex);
  if(mineArray[firstIndex] == 10) {
    let changeMine = mineArray.indexOf(0);
    mineArray[firstIndex] = 0;
    mineArray[changeMine] = 10;
  }
  
  let row = [];
  for (let j = 0; j < mineArray.length; j++) {
    row.push(mineArray[j]);
    if (row.length == difficultLevel[level].width) {
      matrix.push(row);
      row = [];
    }
  } 

  koefBuild(matrix);
  // console.log(matrix);
}


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}



function koefBuild(matrix) {
  koefs = [];
  let w = matrix[0].length;
  let h = matrix.length;

  let check = [];
  let zeroArr = [];
  for (let i = 0; i < w + 2; i++) {
      zeroArr.push(0);
  }
  check.push(zeroArr);
  for (let j = 0; j < h; j++) {
      let arrInArr = [0];
      for (let k = 0; k < w; k++) {
          if (matrix[j][k] == false) {
              arrInArr.push(0);
          } else {
              arrInArr.push(1);
          }

      }
      arrInArr.push(0);
      check.push(arrInArr);
  }
  check.push(zeroArr);

  for (let a = 1; a < check.length - 1; a++) {
      let arrInRes = [];
      for (let b = 1; b < check[a].length - 1; b++) {
          let count = check[a - 1][b - 1] + check[a][b - 1] + check[a + 1][b - 1] +
              check[a - 1][b] + check[a + 1][b] +
              check[a - 1][b + 1] + check[a][b + 1] + check[a + 1][b + 1];
          arrInRes.push(count);
      }
      koefs.push(arrInRes);
  }

  // console.log(koefs);
}



export { matrix, buildMatrix, koefs };