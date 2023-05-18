function openZero(array, row, col) {
  let maxNum = array.length - 1;

  let listForAdd = [];

  let tl = (+row - 1) + '-' + (+col - 1);
  let t = (+row - 1) + '-' + (+col);
  let tr = (+row - 1) + '-' + (+col + 1);
    
  let l = (+row) + '-' + (+col - 1);
  let r = (+row) + '-' + (+col + 1);
  
  let bl = (+row + 1) + '-' + (+col - 1);
  let b = (+row + 1) + '-' + (+col);
  let br = (+row + 1) + '-' + (+col + 1);
  
  if (row == 0 && col == 0) {
    listForAdd.push(r, b, br);
  } else if (row == 0 && col < maxNum) {
    listForAdd.push(l, r, bl, b, br);
  } else if (row == 0 && col == maxNum) {
    listForAdd.push(l, bl, b);
  } else if (row < maxNum && col == 0) {
    listForAdd.push(t, tr, r, b, br);
  } else if (row < maxNum && col < maxNum) {
    listForAdd.push(tl, t, tr, l, r, bl, b, br);
  } else if (row < maxNum && col == maxNum) {
    listForAdd.push(tl, t, l, bl, b);
  } else if (row == maxNum && col == 0) {
    listForAdd.push(t, tr, r);
  } else if (row == maxNum && col < maxNum) {
    listForAdd.push(tl, t, tr, l, r);
  } else if (row == maxNum && col == maxNum) {
    listForAdd.push(tl, t, l);
  }

  for(let i = 0; i < listForAdd.length; i++) {
    let field = document.getElementById(listForAdd[i]);
    if (!field.classList.contains("open") && field.textContent == '') {
      let newEl = field.getAttribute("data").split('-');
      field.classList.add("open");
      openZero(array, newEl[0], newEl[1])
    } else {
      field.classList.add("open");
    }
    
  }
  console.log(listForAdd);
};

export { openZero };