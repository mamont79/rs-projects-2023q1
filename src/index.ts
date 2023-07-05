import './style.css';
import * as levelData from './constants/levels.json';
import * as baloonsCode from './constants/baloons.json';

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
const shootButton = document.querySelector('.enter-button') as HTMLElement;

let progressArray: string[] = ['', '', '', '', '', '', '', '', '', ''];
let currentLevel: number;
let printAnswerIndex = 0;
let anserWithoutHelp = true;

currentLevel = 0;

const saveProgress = () => {
  localStorage.setItem('currentLevel', String(currentLevel));
  localStorage.setItem('progressArray', JSON.stringify(progressArray));
};

const getProgress = () => {
  currentLevel = Number(localStorage.getItem('currentLevel')) || 0;
  progressArray = JSON.parse(localStorage.getItem('progressArray') as string) || [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];
};

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
highlightLevel(currentLevel + 1);

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
  saveProgress();
  answerInput.value = '';
  printAnswerIndex = 0;
  anserWithoutHelp = true;
};

resetButton.addEventListener('click', () => {
  checkMarks.forEach((element) => {
    element.classList.remove('checked');
    element.classList.remove('cheater');
  });
  progressArray = ['', '', '', '', '', '', '', '', '', ''];
  currentLevel = 0;
  levelHandler(currentLevel);
});

const printAnswer = () => {
  const answerToPrint = levelData[currentLevel].answers[0].split('');
  if (printAnswerIndex < answerToPrint.length) {
    answerInput.value += answerToPrint[printAnswerIndex];
    printAnswerIndex += 1;
    setTimeout(printAnswer, 100);
  }
};

helpButton.addEventListener('click', () => {
  anserWithoutHelp = false;
  helpText.classList.toggle('shown');
  helpText.textContent = levelData[currentLevel].help || null;
  printAnswer();
});

levelList.addEventListener('click', (event) => {
  if ((event.target as HTMLElement).classList.contains('level')) {
    const levelId = Number((event.target as HTMLElement).id) - 1;
    currentLevel = levelId;
    levelHandler(levelId);
  }
});

const shootBaloon = () => {
  document.querySelectorAll('.baloon').forEach((element) => {
    element.classList.remove('baloon');
    element.classList.add('shooted');
  });
};

const missBaloons = () => {
  baloonArea.classList.add('miss');
  setTimeout(() => {
    baloonArea.classList.remove('miss');
  }, 1000);
};

const markLevelComplite = () => {
  const completeLevelId = `${String(currentLevel + 1)}check`;
  if (anserWithoutHelp === true) {
    document.getElementById(completeLevelId)?.classList.add('checked');
    progressArray[currentLevel] = 'checked';
  } else {
    document.getElementById(completeLevelId)?.classList.add('cheater');
    progressArray[currentLevel] = 'cheater';
  }
};

const markLevelOnLoad = () => {
  for (let i = 0; i < progressArray.length; i += 1) {
    if (progressArray[i] !== '') {
      const levelMarkId = `${String(i + 1)}check`;
      document.getElementById(levelMarkId)?.classList.add(progressArray[i]);
    }
  }
};

const finishLevel = () => {
  shootBaloon();
  markLevelComplite();
};

const showMistake = () => {
  mistakeMessage.classList.add('active');
  taskTitle.classList.add('hide');
  missBaloons();
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

shootButton.addEventListener('click', () => {
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
});

const initApp = () => {
  getProgress();
  levelHandler();
  markLevelOnLoad();
};
initApp();
