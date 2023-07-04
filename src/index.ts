import './style.css';
import * as levelData from './constants/levels.json';
import * as baloonsCode from './constants/baloons.json';
// import { help } from 'yargs';
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

const checkMarks = document.querySelectorAll('.checkmark');
const resetButton = document.querySelector('.reset') as HTMLElement;
const helpButton = document.querySelector('.help') as HTMLElement;
const helpText = document.querySelector('.help-text') as HTMLElement;

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

const clearActive = () => {
  document.querySelectorAll('.level').forEach((element) => {
    element.classList.remove('active');
  });
};

const highlightLevel = (level: number) => {
  clearActive();
  document.getElementById(String(level))?.classList.add('active');
};
highlightLevel(1);

const hideHelp = () => {
  helpText.classList.remove('shown');
};

const levelHandler = (level?: number) => {
  if (level) currentLevel = level;
  taskTitle.textContent = `${levelData[currentLevel].taskTitle}`;
  codeArea.innerHTML = levelData[currentLevel].shownCode || '';
  buildBaloon(currentLevel);
  highlightLevel(currentLevel + 1);
  hideHelp();
  answerInput.value = '';
};

resetButton.addEventListener('click', () => {
  checkMarks.forEach((element) => {
    element.classList.remove('checked');
  });
  currentLevel = 0;
  levelHandler(currentLevel);
});

helpButton.addEventListener('click', () => {
  helpText.classList.add('shown');
  helpText.textContent = levelData[currentLevel].help || null;
});

levelList.addEventListener('click', (event) => {
  if ((event.target as HTMLElement).classList.contains('level')) {
    const levelId = Number((event.target as HTMLElement).id) - 1;
    currentLevel = levelId;
    levelHandler(levelId);
    // highlightLevel(currentLevel + 1);
  }
});

const shootBaloon = () => {
  document.querySelectorAll('.baloon').forEach((element) => {
    element.classList.remove('baloon');
    element.classList.add('shooted');
  });
};

const markLevelComplite = () => {
  const completeLevelId = `${String(currentLevel + 1)}check`;
  document.getElementById(completeLevelId)?.classList.add('checked');
};

const finishLevel = () => {
  shootBaloon();
  markLevelComplite();
};

const showMistake = () => {
  mistakeMessage.classList.add('active');
  taskTitle.classList.add('hide');
  setTimeout(() => {
    mistakeMessage.classList.remove('active');
    taskTitle.classList.remove('hide');
  }, 1500);
};

document.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    const answer = answerInput.value as string;
    if (levelData[currentLevel].answers?.includes(answer)) {
      finishLevel();
      currentLevel += 1;
      setTimeout(levelHandler, 1500);
    } else if (Number(answer) > 0 && Number(answer) <= 10) {
      currentLevel = Number(answer) - 1;
      levelHandler(currentLevel);
      // eslint-disable-next-line no-restricted-globals
    } else if (isNaN(Number(answer))) {
      showMistake();
    }
  }
});
