import './navigation.css';

const helpText = document.querySelector('.help-text') as HTMLElement;

const clearActiveLevels = () => {
  document.querySelectorAll('.level').forEach((element) => {
    element.classList.remove('active');
  });
};

const highlightLevel = (level: number) => {
  clearActiveLevels();
  document.getElementById(String(level))?.classList.add('active');
};

const hideHelpText = () => {
  helpText.classList.remove('shown');
};

export { highlightLevel, hideHelpText };
