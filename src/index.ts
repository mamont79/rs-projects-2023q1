import './style.css';
import * as levelData from './constants/levels.json';
import { shootBaloon, missBaloons, buildBaloon } from './components/baloons/baloon';
import { highlightLevel, hideHelpText } from './components/navigation/navLevels';

const answerInput = document.getElementById('check-answer') as HTMLInputElement;
const mistakeMessage = document.querySelector('.show-mistake') as HTMLElement;

const taskTitle = document.querySelector('.task-title') as HTMLElement;
const codeArea = document.querySelector('.code-area') as HTMLElement;
const helpText = document.querySelector('.help-text') as HTMLElement;

const levelList = document.querySelector('.level-list') as HTMLElement;

const checkMarks = document.querySelectorAll('.checkmark');
const resetButton = document.querySelector('.reset-button') as HTMLElement;
const helpButton = document.querySelector('.help-button') as HTMLElement;

const shootButton = document.querySelector('.submit-answer-button') as HTMLElement;

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

const levelHandler = (level?: number) => {
  if (level) currentLevel = level;
  taskTitle.textContent = `${levelData[currentLevel].taskTitle}`;
  codeArea.innerHTML = levelData[currentLevel].htmlTask || '';
  buildBaloon(currentLevel);
  highlightLevel(currentLevel + 1);
  hideHelpText();
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
  helpText.textContent = levelData[currentLevel].helpText || null;
  printAnswer();
});

levelList.addEventListener('click', (event) => {
  if ((event.target as HTMLElement).classList.contains('level')) {
    const levelId = Number((event.target as HTMLElement).id) - 1;
    currentLevel = levelId;
    levelHandler(levelId);
  }
});

const markLevelComplite = () => {
  const completeLevelId = `${currentLevel + 1}check`;
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

const completeLevel = () => {
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

const checkInputAnswer = () => {
  const answer = answerInput.value as string;
  if (levelData[currentLevel].answers?.includes(answer)) {
    completeLevel();
    currentLevel += 1;
    setTimeout(levelHandler, 1500);
  } else if (Number(answer) > 0 && Number(answer) <= 10) {
    currentLevel = Number(answer) - 1;
    levelHandler(currentLevel);
  } else if (!Number(answer)) {
    showMistake();
  }
};

document.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') checkInputAnswer();
});

shootButton.addEventListener('click', checkInputAnswer);

const initApp = () => {
  getProgress();
  levelHandler();
  markLevelOnLoad();
};
highlightLevel(currentLevel + 1);
initApp();
