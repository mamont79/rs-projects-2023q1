// import { lineHtml } from '../../constants/lineHTML';
import { carSvgCode } from '../../constants/svg-code';

const lineBuilder = (color: string, carName: string, id?: string) => {
  const svgImg = `<svg fill="${color}"
                  xmlns="http://www.w3.org/2000/svg"
                  width="90" height="40" viewBox="0 0 1280 640"
                  class="car-image" id="${id}"></svg>`;
  const lineHtml = `<div class="race-line" id="${id}-line">
                     <div class="car-controls">
                       <button class="select-button" id="${id}-select" carname = "${carName}" carcolor = "${color}">Select</button>
                       <button class="remove-button" id="${id}-remove">Remove</button>
                       <span class="car-name" id="${id}-name">Tesla</span>
                     </div>
                     <div class="current-controls">
                       <div class="current-line">
                         <div class="current-start">A</div>
                         <div class="current-reset">B</div>
                         <div class="current-car" id="${id}-car">
                         </div>
                       </div>
                     </div>
                     <div class="finish-flag"></div>
                   </div>
                   `;
  (document.querySelector('.race-field') as HTMLElement).innerHTML += lineHtml;
  (document.getElementById(`${id}-name`) as HTMLElement).textContent = carName;
  (document.getElementById(`${id}-car`) as HTMLElement).innerHTML = svgImg;
  (document.getElementById(`${id}`) as HTMLElement).innerHTML = carSvgCode;
};

export { lineBuilder };
