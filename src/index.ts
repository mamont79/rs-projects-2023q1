import './style.css';
import * as levelData from './constants/levels.json';
import * as baloonsCode from './constants/baloons.json';
// import { ParamData, ITasksData } from './types/index';

interface ICodeOfBaloon {
  [key: string]: string;
}

const codeOfBaloons: ICodeOfBaloon = baloonsCode;
const answerInput = document.getElementById('check-answer') as HTMLInputElement;
const mistakeMessage = document.querySelector('.show-mistake') as HTMLElement;

const taskTitle = document.querySelector('.task-title') as HTMLElement;
const codeArea = document.querySelector('.code-area') as HTMLElement;
const baloonArea = document.querySelector('.baloons') as HTMLElement;

const levelList = document.querySelector('.level-list') as HTMLElement;

let currentLevel: number;

const initApp = () => {
  currentLevel = 0;
};

initApp();

const buildBaloon = (level: number) => {
  baloonArea.innerHTML = '';
  levelData[level].baloonsData?.forEach((element) => {
    const baloonId = element.id;
    baloonArea.innerHTML += codeOfBaloons[baloonId];
  });
};

const levelHandler = (level?: number) => {
  if (level) currentLevel = level;
  else currentLevel += 1;
  taskTitle.textContent = `${levelData[currentLevel - 1].taskTitle}`;
  codeArea.innerHTML = levelData[currentLevel - 1].shownCode || '';
  buildBaloon(currentLevel - 1);
};

const clearActive = () => {
  document.querySelectorAll('.level').forEach((element) => {
    element.classList.remove('active');
  });
};

levelList.addEventListener('click', (event) => {
  if ((event.target as HTMLElement).classList.contains('level')) {
    const levelId = Number((event.target as HTMLElement).id);
    clearActive();
    levelHandler(levelId);
    (event.target as HTMLElement).classList.add('active');
  }
});

const shootBaloon = () => {
  document.querySelectorAll('.baloon').forEach((element) => {
    element.classList.remove('baloon');
    element.classList.add('shooted');
  });
};

const finishLevel = () => {
  shootBaloon();
};

// const markLevelComplite = (level: number) => {
//   const currentTask = document.getElementById(String(level));
//   currentTask?.forEach((element) => {
//     element.classList.add('checked');
//   });
// };

const showMistake = () => {
  mistakeMessage.classList.add('active');
  taskTitle.classList.add('hide');
  setTimeout(() => {
    mistakeMessage.classList.remove('active');
    taskTitle.classList.remove('hide');
  }, 2000);
};

document.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    const answer = answerInput.value as string;
    if (levelData[currentLevel].answers?.includes(answer)) {
      finishLevel();
      currentLevel += 1;
      // levelHandler(currentLevel);
    } else {
      showMistake();
    }
  }
});
