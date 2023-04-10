// burger menu

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-box');
const back = document.querySelector('.menu-back');
const navlist = document.querySelector('.nav-list');
const body = document.querySelector('body');

navlist.addEventListener("click", hiddenMenu);


menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
    back.classList.toggle('active');
    body.classList.toggle('modal-open');
})

function hiddenMenu() {
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
    back.classList.remove('active');
    body.classList.remove('modal-open');
}

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('click', (ev) => {
        const target = ev.target;
        if (!target.closest('.nav-item') && !target.closest('.menu-btn')) {
            hiddenMenu();
        }
    });
});


//infinite slider

async function getPets() {
    const pets = '../pets.json';
    const res = await fetch(pets);
    const data = await res.json();
    console.log(data);



}
getPets();

// let randomNum;

// function getRandomNum(num) {
//     randomNum = Math.floor(Math.random() * num);
//     return randomNum;
// }
// getRandomNum(8);

// let cardsArr = [];

// function createCardsArr() {
//     let num = randomNum;
//     cardsArr.push(num);
//     while (cardsArr.length < 8) {

//         while (cardsArr.length <= 8) {
//             num += 3;
//             if (num > 8) {
//                 num -= 8;
//                 cardsArr.push(num);
//             } else {
//                 cardsArr.push(num);
//             }
//         }
//     }
//     return cardsArr;
// }
// createCardsArr();
// console.log(cardsArr);

// class onePetCard {
//     constructor(img, name, parentSelector, petsIndex) {
//         this.img = img;
//         this.name = name;
//         this.parent = document.querySelector(parentSelector);
//         this.petsIndex = petsIndex;
//     }

//     render() {
//         const element = document.createElement("div");
//         element.innerHTML = `
//         <img src=${this.img} alt=${this.name}>
//         <h3 class="pets-name">${this.name}</h3>
//         <button class="learn-pet">Learn more</button>
//   `;
//         element.classList.add("friend-card");
//         element.dataset.index = this.petsIndex;
//         this.parent.after(element);
//     }
// }

const slidesOne = document.querySelectorAll('.friend-one');
const slidesTwo = document.querySelectorAll('.friend-two');
const slidesThree = document.querySelectorAll('.friend-three');
const navLeft = document.querySelector('.arrow-left');
const navRight = document.querySelector('.arrow-right');


console.log(slidesOne);
console.log(slidesTwo);
console.log(slidesThree);

let activeOrderOne = 0;
let activeOrderTwo = 0;
let activeOrderThree = 0;


init();

function init() {
    activeOrderOne = Math.floor(Math.random() * 7)
    activeOrderTwo = activeOrderOne + 1;
    activeOrderThree = activeOrderOne + 2;

    if (activeOrderTwo > 7) {
        activeOrderTwo -= 8;
    }
    if (activeOrderThree > 7) {
        activeOrderThree -= 8;
    }

    slidesOne[activeOrderOne].style.display = "block";
    slidesTwo[activeOrderTwo].style.display = "block";
    slidesThree[activeOrderThree].style.display = "block";

    navLeft.addEventListener('click', navigationLeft);
    navRight.addEventListener('click', navigationRight);

}

function update(away) {

    slidesOne[activeOrderOne].style.display = "none";
    slidesTwo[activeOrderTwo].style.display = "none";
    slidesThree[activeOrderThree].style.display = "none";

}

function navigationLeft() {
    update(300);

    activeOrderOne -= 5;
    if (activeOrderOne < 0) {
        activeOrderOne += 8;
    }
    activeOrderTwo -= 5;
    if (activeOrderTwo < 0) {
        activeOrderTwo += 8;
    }
    activeOrderThree -= 5;
    if (activeOrderThree < 0) {
        activeOrderThree += 8;
    }
    slidesOne[activeOrderOne].style.display = "block";
    slidesTwo[activeOrderTwo].style.display = "block";
    slidesThree[activeOrderThree].style.display = "block";
}

function navigationRight() {
    update(-300);
    activeOrderOne += 3;
    if (activeOrderOne > 7) {
        activeOrderOne -= 8;
    }
    activeOrderTwo += 3;
    if (activeOrderTwo > 7) {
        activeOrderTwo -= 8;
    }
    activeOrderThree += 3;
    if (activeOrderThree > 7) {
        activeOrderThree -= 8;
    }
    slidesOne[activeOrderOne].style.display = "block";
    slidesTwo[activeOrderTwo].style.display = "block";
    slidesThree[activeOrderThree].style.display = "block";
}

alert(" Пожалуйста, дайте ещё день, отойти от болезни  и постараться доделать")