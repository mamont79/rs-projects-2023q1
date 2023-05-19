function colorNum(array, row, col) {
   
  let index = row + '-' + col;
  let num = document.getElementById(index).textContent;
  
  if (num == 1) {
    document.getElementById(index).style.color = "blue";
  } else if (num == 2) {
    document.getElementById(index).style.color = "green";
  } else if (num == 3) {
    document.getElementById(index).style.color = "red";
  } else if (num == 4) {
    document.getElementById(index).style.color = "orange";
  } else if (num == 5) {
    document.getElementById(index).style.color = "darkblue";
  } else if (num == 6) {
    document.getElementById(index).style.color = "darkorange";
  } else if (num == 7) {
    document.getElementById(index).style.color = "magenta";
  } else if (num == 8) {
    document.getElementById(index).style.color = "brown";
  }
};

export { colorNum };