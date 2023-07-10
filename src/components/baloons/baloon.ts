import './baloon.css';
import * as levelData from '../../constants/levels.json';
import * as baloonsCode from '../../constants/baloons.json';

interface ICodeOfBaloon {
  [key: string]: string;
}

const codeOfBaloons: ICodeOfBaloon = baloonsCode;
const baloonArea = document.querySelector('.baloons') as HTMLElement;

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

const buildBaloon = (level: number) => {
  baloonArea.innerHTML = '';
  levelData[level].baloonsData?.forEach((element) => {
    const baloonId = element.id;
    baloonArea.innerHTML += codeOfBaloons[baloonId];
  });
};

export { shootBaloon, missBaloons, buildBaloon };
