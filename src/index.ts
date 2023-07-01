import './style.css';
import levelData from '../../constants/levels.json';
// import { ILevelLine } from '../../types/index';

const getAnswer = document.querySelector('answer-input') as HTMLElement;
const mistake = document.querySelector('.show-mistake') as HTMLElement;
const title = document.querySelector('.task-title') as HTMLElement;

// getAnswer.addEventListener('onenter')

function shootBaloon() {}
function getMistake() {
  mistake.classList.add('active');
  title.classList.add('hide');
  setTimeout(() => {
    mistake.classList.remove('active');
    title.classList.remove('hide');
  }, 2000);
}

document.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    const answer = getAnswer.textContent as string;
    if (answer in levelData[1].answers) {
      shootBaloon();
    } else {
      getMistake();
    }
  }
});
