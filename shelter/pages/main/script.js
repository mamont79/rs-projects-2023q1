// burger menu

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-box");
const back = document.querySelector(".menu-back");
const navlist = document.querySelector(".nav-list");
const body = document.querySelector("body");

navlist.addEventListener("click", hiddenMenu);

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
  back.classList.toggle("active");
  body.classList.toggle("modal-open");
});

function hiddenMenu() {
  menuBtn.classList.remove("active");
  nav.classList.remove("active");
  back.classList.remove("active");
  body.classList.remove("modal-open");
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("click", (ev) => {
    const target = ev.target;
    if (!target.closest(".nav-item") && !target.closest(".menu-btn")) {
      hiddenMenu();
    }
  });
});

const slidesOne = document.querySelectorAll(".friend-one");
const slidesTwo = document.querySelectorAll(".friend-two");
const slidesThree = document.querySelectorAll(".friend-three");
const navLeft = document.querySelector(".arrow-left");
const navRight = document.querySelector(".arrow-right");

let activeOrderOne = 0;
let activeOrderTwo = 0;
let activeOrderThree = 0;

init();

function init() {
  activeOrderOne = Math.floor(Math.random() * 7);
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

  navLeft.addEventListener("click", navigationLeft);
  navRight.addEventListener("click", navigationRight);
  return activeOrderOne, activeOrderTwo, activeOrderThree;
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

  return activeOrderOne, activeOrderTwo, activeOrderThree;
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

  return activeOrderOne, activeOrderTwo, activeOrderThree;
}

// Popup

const pets = [
  {
    name: "Katrine",
    img: "../../assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
];

const friendPopupOne = document.querySelector(".slide-one");
const friendPopupTwo = document.querySelector(".slide-two");
const friendPopupThree = document.querySelector(".slide-three");
const popup = document.querySelector(".popup");
const popupCard = document.querySelector(".popup-body");

popup.addEventListener("click", (ev) => {
  const target = ev.target;
  if (!target.closest(".popup-body")) {
    closePopup();
  }
});

friendPopupOne.addEventListener("click", function () {
  createPopupOne();
  popup.classList.toggle("active");
});

function createPopupOne() {
  popupCard.querySelector(".popup-image").src = `${pets[activeOrderOne].img}`;
  popupCard.querySelector(".popup-title").innerHTML = pets[activeOrderOne].name;
  popupCard.querySelector(".popup-name").innerHTML = pets[activeOrderOne].breed;
  popupCard.querySelector(".popup-text").innerHTML =
    pets[activeOrderOne].description;
  popupCard.querySelector(".age").innerHTML = pets[activeOrderOne].age;
  popupCard.querySelector(".inoc").innerHTML =
    pets[activeOrderOne].inoculations;
  popupCard.querySelector(".diseas").innerHTML = pets[activeOrderOne].diseases;
  popupCard.querySelector(".parasite").innerHTML =
    pets[activeOrderOne].parasites;
}

friendPopupTwo.addEventListener("click", function () {
  createPopupTwo();
  popup.classList.toggle("active");
});

function createPopupTwo() {
  popupCard.querySelector(".popup-image").src = `${pets[activeOrderTwo].img}`;
  popupCard.querySelector(".popup-title").innerHTML = pets[activeOrderTwo].name;
  popupCard.querySelector(".popup-name").innerHTML = pets[activeOrderTwo].breed;
  popupCard.querySelector(".popup-text").innerHTML =
    pets[activeOrderTwo].description;
  popupCard.querySelector(".age").innerHTML = pets[activeOrderTwo].age;
  popupCard.querySelector(".inoc").innerHTML =
    pets[activeOrderTwo].inoculations;
  popupCard.querySelector(".diseas").innerHTML = pets[activeOrderTwo].diseases;
  popupCard.querySelector(".parasite").innerHTML =
    pets[activeOrderTwo].parasites;
}

friendPopupThree.addEventListener("click", function () {
  createPopupThree();
  popup.classList.toggle("active");
});

function createPopupThree() {
  popupCard.querySelector(".popup-image").src = `${pets[activeOrderThree].img}`;
  popupCard.querySelector(".popup-title").innerHTML =
    pets[activeOrderThree].name;
  popupCard.querySelector(".popup-name").innerHTML =
    pets[activeOrderThree].breed;
  popupCard.querySelector(".popup-text").innerHTML =
    pets[activeOrderThree].description;
  popupCard.querySelector(".age").innerHTML = pets[activeOrderThree].age;
  popupCard.querySelector(".inoc").innerHTML =
    pets[activeOrderThree].inoculations;
  popupCard.querySelector(".diseas").innerHTML =
    pets[activeOrderThree].diseases;
  popupCard.querySelector(".parasite").innerHTML =
    pets[activeOrderThree].parasites;
}

function closePopup() {
  popup.classList.remove("active");
}
