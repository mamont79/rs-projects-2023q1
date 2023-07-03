import './style.css';
import * as levelData from './constants/levels.json';
// import { ILevelLine } from '../../types/index';

const answerInput = document.getElementById('check-answer') as HTMLElement;
const mistakeMessage = document.querySelector('.show-mistake') as HTMLElement;
const taskTitle = document.querySelector('.task-title') as HTMLElement;

const codeArea = document.querySelector('.code-area') as HTMLElement;
const levelList = document.querySelector('.level-list') as HTMLElement;

let currentLevel: number;
// getAnswer.addEventListener('onenter')

const initApp = () => {
  currentLevel = 0;
};

initApp();

const levelHandler = (level?: number) => {
  if (level) currentLevel = level;
  else currentLevel += 1;
  codeArea.textContent = `${levelData[0].id}`;
};

levelList.addEventListener('click', (event) => {
  if ((event.target as HTMLElement).classList.contains('level')) {
    const levelId = Number((event.target as HTMLElement).id);
    levelHandler(levelId);
  }
});

const finishLevel = () => {};
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
    const answer = answerInput.textContent as string;
    if (levelData[currentLevel].answers?.includes(answer)) {
      finishLevel();
      currentLevel += 1;
    } else {
      showMistake();
    }
  }
});
